"use client";
import { useRef, useEffect, useMemo, useState, useCallback } from "react";
import * as d3 from "d3";
import { Node } from "@/types/article";
import { useRouter } from "next/navigation";

interface ArticleMapProps {
  nodes: Node[];
}

interface Link {
  source: Node;
  target: Node;
  type: "parent" | "child";
}

export default function ArticleMap({ nodes: rawNodes }: ArticleMapProps) {
  const router = useRouter();
  const svgRef = useRef<SVGSVGElement>(null);
  const [isFullyLoaded, setIsFullyLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [tooltipContent, setTooltipContent] = useState<{
    title: string;
    content: string;
    year: number | null;
    x: number;
    y: number;
  } | null>(null);

  // Deduplicate nodes based on slug
  const nodes = useMemo(() => {
    const uniqueNodes = new Map();
    rawNodes.forEach((node) => {
      if (!uniqueNodes.has(node.slug)) {
        uniqueNodes.set(node.slug, node);
      }
    });
    return Array.from(uniqueNodes.values());
  }, [rawNodes]);

  // Define helper functions first
  const calculateNodeSizes = (nodes: Node[], links: Link[]) => {
    const connectionCounts = new Map<string, number>();

    // Count both incoming and outgoing connections
    links.forEach((link) => {
      const sourceSlug = (link.source as Node).slug;
      const targetSlug = (link.target as Node).slug;

      connectionCounts.set(
        sourceSlug,
        (connectionCounts.get(sourceSlug) || 0) + 1
      );
      connectionCounts.set(
        targetSlug,
        (connectionCounts.get(targetSlug) || 0) + 1
      );
    });

    // Ensure all nodes have at least 1 connection in the count
    nodes.forEach((node) => {
      if (!connectionCounts.has(node.slug)) {
        connectionCounts.set(node.slug, 1);
      }
    });

    // Scale node sizes proportionally based on connection count
    const maxConnections = Math.max(...connectionCounts.values());
    const scale = d3
      .scaleLinear()
      .domain([1, maxConnections]) // Changed minimum to 1
      .range([30, 80]) // Base size of 30 for 1 connection, max 80
      .clamp(true); // Ensure we don't go below minimum size

    // Return a function that gets the scaled size for a node
    return (slug: string) => {
      const connections = connectionCounts.get(slug) || 1;
      return scale(connections);
    };
  };

  // Create links array from node relationships
  const createLinks = (nodes: Node[]): Link[] => {
    const links: Link[] = [];
    const slugMap = new Map(nodes.map((node) => [node.slug, node]));

    // Add outgoing (child) connections
    nodes.forEach((node) => {
      if (Array.isArray(node.children)) {
        node.children.forEach((child) => {
          const childSlug = typeof child === "string" ? child : child.slug;
          const childNode = slugMap.get(childSlug);
          if (childNode) {
            links.push({
              source: node,
              target: childNode,
              type: "child",
            });
          }
        });
      }
    });

    // Add incoming (parent) connections
    nodes.forEach((node) => {
      if (Array.isArray(node.parents)) {
        node.parents.forEach((parent) => {
          const parentSlug = typeof parent === "string" ? parent : parent.slug;
          const parentNode = slugMap.get(parentSlug);
          if (parentNode) {
            links.push({
              source: parentNode,
              target: node,
              type: "parent",
            });
          }
        });
      }
    });

    return links;
  };

  // Memoize expensive calculations
  const links = useMemo(() => createLinks(nodes), [nodes]);
  const getNodeSize = useMemo(
    () => calculateNodeSizes(nodes, links),
    [nodes, links]
  );

  // Add this function near the top of the component, similar to TimelineMap
  const getDecadeColor = (year: number) => {
    const decades = {
      1950: "#F3722C",
      1960: "#F8961E",
      1970: "#F9C74F",
      1980: "#90BE6D",
      1990: "#43AA8B",
      2000: "#4D908E",
      2010: "#577590",
      2020: "#277DA1",
    };

    const decade = Math.floor(year / 10) * 10;
    return decade < 1950 ? "#F94144" : decades[decade as keyof typeof decades]; // Teal-blue for pre-1950s
  };

  useEffect(() => {
    setIsLoading(true);
    if (!svgRef.current || !nodes.length) return;

    // Debounce resize handling
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Optimize force simulation
    const simulation = d3
      .forceSimulation(nodes)
      .force(
        "link",
        d3
          .forceLink(links)
          .id((d: any) => d.slug)
          .distance(10)
      )
      .force("charge", d3.forceManyBody().strength(-300))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force(
        "collision",
        d3
          .forceCollide()
          .radius((d: unknown) => getNodeSize((d as Node).slug) * 1.5)
      );

    // Reduce simulation ticks to speed up initial load
    simulation.stop();
    simulation.tick(150); // Reduced from 300 to 150 ticks
    simulation.stop();

    // Setup SVG with zoom support
    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height);

    // Clear previous content but keep the stats text
    svg.selectAll("*:not(.stats-text)").remove();

    // Create container group for zoom
    const g = svg.append("g");

    // Add zoom behavior
    const zoom = d3
      .zoom()
      .scaleExtent([0.1, 4])
      .on("zoom", (event: d3.D3ZoomEvent<any, any>) => {
        g.attr("transform", event.transform);
      });

    svg.call(zoom as any);

    // Add links with pre-calculated positions
    const linkElements = g
      .append("g")
      .attr("class", "links")
      .selectAll("line")
      .data(links)
      .enter()
      .append("line")
      .attr("stroke", "#ddd")
      .attr("stroke-width", 2)
      .attr("stroke-opacity", 0.3)
      .attr("x1", (d: any) => d.source.x)
      .attr("y1", (d: any) => d.source.y)
      .attr("x2", (d: any) => d.target.x)
      .attr("y2", (d: any) => d.target.y)
      .attr(
        "class",
        (d: Link) =>
          `link-${(d.source as Node).slug} link-${(d.target as Node).slug}`
      );

    // Create nodes with pre-calculated positions
    const nodeElements = g
      .append("g")
      .attr("class", "nodes")
      .selectAll("g")
      .data(nodes)
      .enter()
      .append("g")
      .attr("class", (d: Node) => `node cursor-pointer node-${d.slug}`)
      .attr("transform", (d: Node) => `translate(${d.x},${d.y})`)
      .on("click", (event: MouseEvent, d: Node) => {
        event.stopPropagation();
        router.push(`/${d.slug}`);
      })
      .on("mouseenter", (event: MouseEvent, d: Node) => {
        setHoveredNode(d.slug);

        // Show tooltip
        const [x, y] = d3.pointer(event, svg.node());
        setTooltipContent({
          title: d.title || d.slug,
          content: d.summary || "",
          year: d.year,
          x: x + 10,
          y: y + 10,
        });

        // Highlight connected links with light gray
        d3.selectAll("line")
          .attr("stroke-opacity", 0.2)
          .attr("stroke", "#94A3B8");

        d3.selectAll(`.link-${d.slug}`)
          .attr("stroke-opacity", 0.5)
          .attr("stroke", "#94A3B8")
          .attr("stroke-width", 2);

        // Find connected nodes through links
        const connectedSlugs = links
          .filter(
            (link) =>
              (link.source as Node).slug === d.slug ||
              (link.target as Node).slug === d.slug
          )
          .flatMap((link) => [
            (link.source as Node).slug,
            (link.target as Node).slug,
          ]);

        // Highlight the hovered node and its connections with light gray outline
        d3.selectAll(
          connectedSlugs.map((slug) => `.node-${slug} circle`).join(", ")
        )
          .attr("stroke", "#94A3B8")
          .attr("stroke-width", 2)
          .attr("stroke-opacity", 0.5);
      })
      .on("mouseleave", () => {
        setHoveredNode(null);
        setTooltipContent(null);

        // Reset all elements to original state
        d3.selectAll("line")
          .attr("stroke", "#94A3B8")
          .attr("stroke-opacity", 0.3);

        // Remove all strokes from circles
        d3.selectAll("circle")
          .attr("stroke", "none")
          .attr("stroke-width", 0)
          .attr("stroke-opacity", 0);
      });

    // Add circles with dynamic radius
    nodeElements
      .append("circle")
      .attr("r", (d: Node) => getNodeSize(d.slug))
      .attr("fill", (d: Node) => (d.year ? getDecadeColor(d.year) : "#93C5FD"))
      .attr("fill-opacity", 0.9)
      .attr("class", "hover:brightness-110");

    // Add text with scaled size
    const textElements = nodeElements
      .append("text")
      .attr("text-anchor", "middle")
      .attr("dominant-baseline", "middle")
      .attr("fill", "#000000")
      .attr("font-size", (d: Node) => {
        const radius = getNodeSize(d.slug);
        return `${Math.max(12, radius / 2.5)}px`;
      })
      .attr("font-weight", "500");

    // Add title with line breaks if needed
    textElements.each(function (this: SVGTextElement, d: any) {
      const text = d3.select(this);
      const title = (d.title || d.slug || "").replace(/\s*\([^)]*\)/g, ""); // Remove text in parentheses
      const words = title.split(/\s+/);
      const lineHeight = 16; // increased from 12

      if (words.length === 1) {
        text.append("tspan").attr("x", 0).attr("y", 0).text(words[0]);
      } else {
        const midpoint = Math.ceil(words.length / 2);
        const firstLine = words.slice(0, midpoint).join(" ");
        const secondLine = words.slice(midpoint).join(" ");

        text
          .append("tspan")
          .attr("x", 0)
          .attr("y", -lineHeight / 2)
          .text(firstLine);

        text
          .append("tspan")
          .attr("x", 0)
          .attr("y", lineHeight / 2)
          .text(secondLine);
      }
    });

    // Initial zoom to fit
    const initialScale = 0.6; // decreased from 0.75 to show more of the graph
    svg.call(
      zoom.transform as any,
      d3.zoomIdentity
        .translate(width / 2, height / 2)
        .scale(initialScale)
        .translate(-width / 2, -height / 2)
    );

    requestAnimationFrame(() => {
      // Restore full visual quality
      linkElements
        .transition()
        .duration(500)
        .attr("stroke-width", 2)
        .attr("stroke-opacity", 0.3);
      setIsFullyLoaded(true);
      setIsLoading(false);
    });
  }, [nodes, links, getNodeSize, router]);

  return (
    <div className="absolute inset-0">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-50/80">
          Loading Map...
        </div>
      )}
      <svg
        ref={svgRef}
        className="w-full h-full bg-gray-50"
        style={{ cursor: "grab" }}
      />
      {tooltipContent && (
        <div
          className="absolute z-10 max-w-sm p-2 text-sm bg-white border border-gray-200 rounded-lg shadow-lg pointer-events-none"
          style={{
            left: `${tooltipContent.x}px`,
            top: `${tooltipContent.y}px`,
          }}
        >
          <div className="font-bold mb-1">{tooltipContent.title}</div>
          {tooltipContent.year && (
            <div className="text-gray-600 mb-1">
              Year: {tooltipContent.year}
            </div>
          )}
          {tooltipContent.content && <div>{tooltipContent.content}</div>}
        </div>
      )}
      <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between text-sm">
        <div className="text-gray-500">
          {`Nodes: ${nodes.length} | Connections: ${links.length}`}
        </div>

        <div className="flex items-center gap-4">
          {[1940, 1950, 1960, 1970, 1980, 1990, 2000, 2010, 2020].map(
            (decade) => (
              <div key={decade} className="flex items-center gap-1">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{
                    backgroundColor: getDecadeColor(decade),
                    opacity: 0.9,
                  }}
                />
                <span className="text-gray-600">{`${decade}s`}</span>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
