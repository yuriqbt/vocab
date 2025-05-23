---
slug: layer-normalization
summary: Technique used in neural networks to normalize the inputs across the features within a layer, improving training stability and model performance, particularly in recurrent and transformer models.
title: Layer Normalization
---

Layer normalization works by normalizing the pre-activation inputs (the outputs of the previous layer) within a neural network layer, ensuring they have zero mean and unit variance across the features. This differs from batch normalization, which normalizes across the batch dimension. Layer normalization is especially useful in settings where batch sizes are small or vary, such as in recurrent neural networks (RNNs) and transformers, where it can stabilize training by reducing internal covariate shift. The technique also helps by making the network less sensitive to changes in scale, which can speed up convergence and improve generalization.

Layer normalization was first introduced in 2016 by Jimmy Ba and Diederik Kingma in their paper "Layer Normalization." It gained popularity with the rise of transformer-based models, where it became a standard component due to its effectiveness in stabilizing training in complex architectures like BERT and GPT.

The primary contributors to the development of layer normalization are Jimmy Lei Ba and Diederik P. Kingma, who proposed the method in their 2016 paper. Their work built on the idea of normalization techniques in deep learning, further expanding its use beyond convolutional and batch-processing networks to more diverse architectures.