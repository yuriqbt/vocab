---
slug: glu-gated-linear-unit
summary: Neural network component that uses a gating mechanism to control information flow, improving model efficiency and performance.
title: GLU (Gated Linear Unit)
---

Gated Linear Units (GLUs) are designed to enhance the modeling capacity of neural networks by incorporating a gating mechanism that regulates the flow of information. The GLU splits the input into two parts: one part is linearly transformed, and the other part is passed through a sigmoid activation function to act as a gate. The outputs of these two transformations are then element-wise multiplied, allowing the gate to control which information passes through. This gating mechanism helps the model focus on relevant information and ignore irrelevant data, leading to more efficient learning and better performance, especially in natural language processing and sequence modeling tasks. By selectively filtering information, GLUs address the vanishing gradient problem and improve the convergence of deep neural networks.

The concept of gated mechanisms in neural networks, including GLUs, emerged around the mid-2010s. GLUs gained popularity after their introduction in the paper "Language Modeling with Gated Convolutional Networks" by Yann Dauphin et al. in 2017. The work demonstrated significant improvements in language modeling tasks, marking the term's rise in prominence.

Yann Dauphin and his colleagues are key contributors to the development and popularization of the Gated Linear Unit through their influential 2017 paper. Their research highlighted the effectiveness of GLUs in enhancing language modeling and inspired further exploration of gating mechanisms in various neural network architectures.