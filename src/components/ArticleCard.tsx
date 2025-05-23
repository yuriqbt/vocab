import Image from "next/image";
import Link from "next/link";
import { Article, RelatedArticle } from "@/types/article";
import { Zap, File } from "lucide-react";

interface ArticleCardProps {
  article: Article | RelatedArticle;
  size?: "normal" | "compact";
  // Add new prop to control which metric to show
  metricType?: "generality" | "similarity";
}

// Add helper function to parse acronyms
const parseAcronyms = (text: string) => {
  const acronymRegex = /(\w+)\s*\(([^)]+)\)/g;
  return text.replace(
    acronymRegex,
    '<div class="acronym">$1<br/><span class="acronym-description">$2</span></div>'
  );
};

export default function ArticleCard({
  article,
  size = "compact",
  // Default to generality for backwards compatibility
  metricType = "generality",
}: ArticleCardProps) {
  console.log("Full article data:", article); // Add this temporary log
  // Calculate average generality with defensive checks
  const avgGenerality =
    Array.isArray(article.generality) && article.generality.length > 0
      ? Math.round(
          (article.generality.reduce((acc, curr) => acc + curr, 0) /
            article.generality.length) *
            1000
        ).toString()
      : "N/A";

  // Determine which metric to show based on metricType prop
  const metricLabel = metricType === "similarity" ? "Similarity" : "Generality";
  const metricValue =
    metricType === "similarity" && "similarity" in article
      ? ((article?.similarity ?? 0) * 100).toFixed(1) + "%" // Fixed multiplication
      : avgGenerality;

  return (
    <Link
      href={`/${article.slug}`}
      className="transform transition duration-500 hover:scale-105 block w-full"
    >
      <div className="relative w-full pt-[133%]">
        <div className="absolute inset-0 rounded-lg overflow-hidden">
          <Image
            src={`/vocab/images/articles/small/${article.slug}.webp`}
            alt={article.title}
            fill
            loading="lazy"
            className="object-cover"
            sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/0" />
          {article.component && (
            <div className="absolute top-2 right-2">
              <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-white opacity-75" />
            </div>
          )}
          {typeof article.year === "number" && article.year > 0 && (
            <div className="absolute top-3 left-3">
              <span className="text-[8px] sm:text-xs text-gray-400">
                {article.year}
              </span>
            </div>
          )}
          <div className="absolute bottom-0 p-3 w-full">
            <h2
              className="text-sm font-semibold mb-1.5 text-white"
              dangerouslySetInnerHTML={{ __html: parseAcronyms(article.title) }}
            />
            <p className="text-gray-200 text-xs mb-1.5">{article.summary}</p>
            <div className="flex justify-between items-center">
              <p className="text-gray-400 text-[8px] sm:text-xs">
                {metricLabel}: {metricValue}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
