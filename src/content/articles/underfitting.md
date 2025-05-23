---
slug: underfitting
summary: Occurs when a ML model is too simple to capture the underlying pattern of the data it is trained on, resulting in poor performance on both training and testing datasets.
title: Underfitting
---

Underfitting happens when a model, whether due to its simplicity or insufficient training, fails to learn the important patterns in the training data. This typically leads to high bias in the model, where the model assumptions fail to sufficiently represent the complexity of the underlying data distribution. As a consequence, the model performs poorly not just on new data (generalization), but often on the training data itself. This is in contrast to overfitting, where a model learns the training data too well, including the noise and outliers, at the expense of generalizing poorly to new data. To address underfitting, one might consider using a more complex model, adding more features, or reducing the strength of regularization techniques, if used.

The concept of underfitting has been around since the early days of machine learning, but it became more formally discussed as part of the bias-variance tradeoff in statistical learning theory in the 1990s. This framework helps in understanding how different errors contribute to the overall error of a model, emphasizing the balance needed between complexity and simplicity.

Key figures in the theoretical development of concepts surrounding underfitting include statisticians and computer scientists like Leo Breiman and Vladimir Vapnik. Their work in the development of statistical learning theory and machine learning algorithms has been crucial in formalizing the understanding and approaches to tackling underfitting.
