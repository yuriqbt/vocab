---
slug: frame-problem
summary: Challenge in AI of representing and updating the effects of actions in a dynamic world without having to explicitly state all conditions that remain unchanged.
title: Frame Problem
---

The frame problem arises in AI when trying to model how actions affect the state of the world. It deals with the difficulty of specifying what remains constant in a given situation when certain actions are performed. For example, if a robot picks up an object, the frame problem involves ensuring that the world model correctly updates to reflect this change without needing to re-specify all the unchanged facts, such as the color of the walls or the position of other objects. This problem is significant because it challenges the efficiency and scalability of logical systems in AI, particularly in planning and reasoning tasks. It underscores the complexity of creating systems that can handle real-world dynamics flexibly and efficiently.

The frame problem was first articulated in 1969 by John McCarthy and Patrick J. Hayes in the context of AI and formal logic. The term gained prominence in the 1980s and 1990s as AI research expanded into more complex domains requiring sophisticated reasoning about actions and their effects.

John McCarthy and Patrick J. Hayes are the primary figures associated with the initial identification of the frame problem. McCarthy, a pioneering computer scientist and one of the founders of artificial intelligence, along with Hayes, brought significant attention to the issue through their foundational work on the formalization of common sense knowledge and reasoning in AI systems. Their contributions have influenced subsequent research in non-monotonic reasoning, action languages, and the development of more efficient logical frameworks to address the frame problem.