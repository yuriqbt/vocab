---
slug: ppo-proximal-policy-optimization
summary: RL algorithm that aims to balance ease of implementation, sample efficiency, and reliable performance by using a simpler but effective update method for policy optimization.
title: PPO (Proximal Policy Optimization)
---

PPO stands out among reinforcement learning algorithms for its effectiveness and simplicity. It addresses the limitations of previous methods, such as Trust Region Policy Optimization (TRPO), by introducing a surrogate objective function that allows multiple updates per data sample while maintaining policy stability. This is achieved by clipping the probability ratio between the new and old policies, preventing excessive changes that could destabilize learning. PPO's design ensures that the policy updates stay within a trusted region without the computational complexity of calculating second-order derivatives or solving complex optimization problems. As a result, PPO has become a popular choice for training agents in various continuous and discrete action spaces, achieving competitive performance in benchmarks like Atari games and simulated robotics tasks.

PPO was introduced in 2017 by researchers at OpenAI as an improvement over TRPO. The initial paper, "Proximal Policy Optimization Algorithms," highlighted its theoretical foundations and demonstrated its practical benefits. Since then, PPO has gained widespread use in both academic research and practical applications due to its balance of performance and simplicity.

The development of PPO is primarily attributed to John Schulman and his colleagues at OpenAI. Their work built upon earlier advancements in reinforcement learning, particularly those related to policy gradient methods and trust region optimization techniques. The PPO algorithm represents a significant step forward in making reinforcement learning more accessible and robust for a variety of applications.