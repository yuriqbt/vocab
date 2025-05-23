---
slug: gqn-generative-query-network
summary: Neural network architecture designed to enable machines to understand and generate visual scenes from different viewpoints based on limited observations.
title: GQN (Generative Query Network)
---

GQNs function by building a representation of a scene from partial views and using this representation to predict the appearance of the scene from new, unseen viewpoints. This approach leverages a combination of neural rendering techniques and generative modeling to infer the spatial and structural layout of the scene. The core innovation lies in its ability to learn an implicit 3D model of the environment directly from raw image data without requiring explicit 3D supervision. GQNs use a combination of variational inference and neural network architectures, such as convolutional and recurrent neural networks, to achieve this. The representation network encodes observed views into a latent space, which the generation network then uses to produce novel views, facilitating tasks like scene understanding, robotics, and augmented reality.

The concept of the GQN was introduced in 2018 by researchers from DeepMind. It quickly gained attention for its innovative approach to visual scene representation and understanding, marking a significant advancement in the field of computer vision and generative models.

The development of the GQN was led by a team at DeepMind, with key contributions from Ali Eslami, Danilo Rezende, and other collaborators. Their work demonstrated the practical potential of generative models in spatial and visual cognition, pushing the boundaries of what AI systems can achieve in understanding and interacting with 3D environments.