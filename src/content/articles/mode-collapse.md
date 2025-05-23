---
slug: mode-collapse
summary: Phenomenon in Generative Adversarial Networks (GANs) where the generator produces limited, highly similar outputs, ignoring the diversity of the target data distribution.
title: Mode Collapse
---

Mode collapse occurs when the generator in a GAN overfits to certain patterns in the training data, producing a narrow set of outputs while ignoring other possible variations (modes) in the data distribution. In essence, instead of generating diverse samples that reflect the variety in the input data, the generator collapses into producing nearly identical outputs. This is a critical issue because the goal of GANs is to create outputs that represent the full diversity of the underlying data distribution. Mode collapse can severely hinder the performance of GANs, especially in tasks like image synthesis, where diversity and variety are essential. Researchers have proposed various techniques to mitigate this issue, including modifying the loss function, using ensemble techniques, or improving the balance between the generator and discriminator training.

The term "mode collapse" emerged shortly after the introduction of GANs by Ian Goodfellow and colleagues in 2014. As GANs became more popular, especially after 2016 when their applications in image generation exploded, mode collapse was recognized as a fundamental challenge that needed to be addressed for the successful training of GANs.

The GAN architecture, and thus the context for mode collapse, was introduced by Ian Goodfellow and his collaborators in 2014. Various research teams, including the DeepMind and OpenAI teams, have contributed to techniques like Wasserstein GANs (WGAN) and improved loss functions aimed at mitigating mode collapse.