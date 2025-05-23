---
slug: bql-binary-quantization-learning
summary: ML method that aims to reduce model complexity and computational cost by quantizing weights and activations to binary values.
title: BQL (Binary Quantization Learning)
---

Binary Quantization Learning transforms the weights and activations of neural networks from high-precision numerical values into binary values (typically -1 and 1 or 0 and 1). This approach reduces the memory footprint and computational requirements, as operations involving binary values are less computationally intensive than those involving floating-point arithmetic. BQL is particularly relevant for deploying deep learning models on devices with limited computational resources, such as mobile phones and embedded systems, where power consumption and speed are critical factors. The quantization process usually involves training modifications or post-training techniques to minimize the performance loss typically associated with reducing numerical precision.

The concept of using binary values in neural network computations has been explored since the early days of neural networks, but significant advancements and practical applications began to emerge around the mid-2010s. BQL became more popular as the demands for deploying AI in resource-constrained environments grew.

Key figures in the development and popularization of quantized and binary neural networks include Itay Hubara and Matthieu Courbariaux, among others. Their work has been instrumental in demonstrating that neural networks can maintain a significant degree of accuracy even when their weights and activations are constrained to binary values.
