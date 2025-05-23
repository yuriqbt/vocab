---
slug: mdpo-mirror-descent-policy-optimization
summary: Optimization algorithm used in reinforcement learning to update policies by leveraging the mirror descent technique, which balances exploration and exploitation more effectively than traditional gradient descent methods.
title: MDPO (Mirror Descent Policy Optimization)
---

MDPO is a reinforcement learning algorithm that integrates the mirror descent optimization framework into policy optimization. Unlike standard gradient descent, which updates parameters in the Euclidean space, mirror descent operates in a dual space defined by a convex function (often called a mirror map). This approach allows for more natural and efficient updates in high-dimensional or constrained spaces. MDPO ensures that the policy updates respect the geometry of the parameter space, leading to potentially faster convergence and better handling of non-linearities. The algorithm iteratively performs a policy evaluation step, followed by a mirror descent step, which projects the updated policy back to the original space. This mechanism helps in managing the trade-off between exploration of new policies and exploitation of known good policies, which is crucial for effective reinforcement learning.

The concept of mirror descent originated in convex optimization in the late 20th century, but its application to reinforcement learning, particularly in the form of MDPO, gained traction around 2019. This adaptation leverages the strengths of mirror descent to address specific challenges in policy optimization.

The development and application of MDPO in reinforcement learning are attributed to researchers such as Matteo Papini, Michele Pirotta, and Marcello Restelli, who have explored the integration of mirror descent with policy optimization techniques. Their work has contributed significantly to the theoretical foundations and practical implementations of MDPO.
