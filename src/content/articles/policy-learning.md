---
slug: policy-learning
summary: Branch of reinforcement learning where the objective is to find an optimal policy that dictates the best action to take in various states to maximize cumulative reward.
title: Policy Learning
---

Policy learning involves directly optimizing a policy, a function that maps states to actions, to maximize the expected cumulative reward in a given environment. Unlike value-based methods that derive policies from value functions (e.g., Q-learning), policy learning methods adjust the policy parameters directly. Techniques include policy gradient methods, which use gradient descent to update policy parameters, and actor-critic methods, which combine value estimation and policy optimization. These methods are fundamental in environments where the state and action spaces are continuous or where the policy needs to be stochastic. Policy learning is crucial in applications such as robotics, where policies can be directly mapped to motor controls, and in complex games like Go or chess, where strategy involves complex decision-making.

The concept of policy learning became prominent with the advent of reinforcement learning in the 1980s. It gained substantial traction in the 2000s with the development of more sophisticated algorithms like REINFORCE (1992) and the proliferation of deep learning techniques in the 2010s, leading to the success of algorithms like Trust Region Policy Optimization (TRPO, 2015) and Proximal Policy Optimization (PPO, 2017).

Significant contributors to the development of policy learning include Richard S. Sutton, who co-authored the foundational book "Reinforcement Learning: An Introduction," and John Schulman, whose work on TRPO and PPO has been highly influential. Other notable figures include Andrew Ng and Pieter Abbeel, who have advanced the application of policy learning in robotics.
