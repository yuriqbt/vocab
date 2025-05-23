---
slug: laq-locally-adaptive-quantization
summary: Technique used in data compression and neural network optimization that adjusts quantization levels based on local data characteristics to improve accuracy and efficiency.
title: LAQ (Locally-Adaptive Quantization)
---

Locally-Adaptive Quantization (LAQ) refers to the method of varying the quantization parameters locally within a dataset or model to better capture and represent the intrinsic properties of the data. In neural networks, LAQ is employed to reduce the model size and computational requirements while maintaining or improving accuracy by dynamically adjusting the precision of weights and activations depending on their local statistical properties. This approach contrasts with uniform quantization, where a fixed number of bits are used across the entire model or dataset, which can lead to suboptimal performance especially in heterogeneous data distributions. LAQ can significantly enhance the efficiency of AI models deployed on resource-constrained devices, such as mobile phones and edge computing devices, by optimizing the bit allocation in a manner that is sensitive to local variations in the data.

The concept of quantization has been around since the early days of digital signal processing in the mid-20th century. However, the specific application and refinement of locally-adaptive techniques emerged more prominently in the 1990s and gained substantial traction with the advent of deep learning in the 2010s. The rise of edge computing and the necessity for efficient AI models further accelerated interest in LAQ methods.

The development of locally-adaptive quantization techniques involves contributions from various researchers in the fields of signal processing and neural networks. Notable figures include John G. Proakis, whose work in digital communications laid foundational principles, and more recently, researchers like Song Han and William J. Dally, who have advanced the application of adaptive quantization in deep learning and efficient neural network design. Their work has been instrumental in demonstrating the practical benefits of LAQ in real-world AI applications.
