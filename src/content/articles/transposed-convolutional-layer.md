---
slug: transposed-convolutional-layer
summary: Type of neural network layer that performs the opposite operation of a traditional convolutional layer, effectively upscaling input feature maps to a larger spatial resolution.
title: Transposed Convolutional Layer
---

In detail, the transposed convolutional layer uses a technique similar to the convolution operation but in reverse, aiming to 'learn' an upscaling function. Where a standard convolution reduces the spatial dimensions of the input through its filter application, the transposed convolution applies filters in a way that expands the dimensions. This is achieved by inserting zeros between input data points (a process known as upsampling), followed by a convolution operation. The filters in the transposed convolutional layer are learned during training, similar to traditional convolutional layers, making it suitable for tasks like semantic segmentation and generative models where output dimensions need to be increased.

Historically, the concept of transposed convolution became prominent in the literature around the mid-2010s, particularly with its application in models like the Fully Convolutional Network (FCN) for semantic segmentation and Generative Adversarial Networks (GANs) for generating high-resolution images from low-resolution inputs.

Key contributors to the development and popularization of transposed convolutional layers include researchers involved in early work on FCN and GANs, such as Jonathan Long, Evan Shelhamer, and Trevor Darrell for FCN, and Ian Goodfellow for GANs. Their work demonstrated the utility of transposed convolutions in effectively learning to upscale feature maps, thereby contributing significantly to advances in computer vision and generative models.