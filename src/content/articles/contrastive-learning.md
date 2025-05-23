---
slug: contrastive-learning
summary: ML technique used primarily in unsupervised learning that improves model performance by teaching the model to distinguish between similar and dissimilar data points.
title: Contrastive Learning
---

Contrastive learning operates by leveraging pairs or groups of data samples, training a model to recognize how these samples are similar or different. This is often applied in scenarios where labeled data is scarce, making it a powerful tool for unsupervised learning tasks, particularly in the field of deep learning for image and speech recognition. The core principle involves maximizing the agreement between embeddings (representations) of similar pairs while minimizing it for dissimilar ones, often using a contrastive loss function such as triplet loss or contrastive loss. This method enables the learning of robust feature representations by reinforcing what makes data instances distinct from each other in a latent space, thus enhancing the model's discriminative power.

The roots of contrastive learning can be traced back to the early 2000s, with significant attention and development occurring in the last decade. The term itself gained popularity in the mid-2010s as researchers explored deep learning techniques that could efficiently handle unlabelled data in various AI applications.

Prominent figures in the development of contrastive learning include Geoffrey Hinton and Yann LeCun, among others. Hinton's work on neural networks and LeCun's contributions to convolutional neural networks have set foundational principles that have been adapted into contrastive learning frameworks, particularly in their application to tasks like image and speech processing.
