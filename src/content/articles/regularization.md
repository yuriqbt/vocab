---
slug: regularization
summary: Technique used in machine learning to reduce model overfitting by adding a penalty to the loss function based on the complexity of the model.
title: Regularization
---

Regularization addresses the problem of overfitting in machine learning models, which occurs when a model is too closely fit to a limited set of data points and performs poorly on new data. By adding a penalty term to the loss function, regularization discourages overly complex models that might fit the noise in the training data rather than capturing the underlying distribution. Common forms of regularization include L1 (lasso), which adds a penalty equivalent to the absolute value of the magnitude of coefficients, and L2 (ridge), which adds a penalty equivalent to the square of the magnitude of coefficients. These methods help in maintaining simpler models that generalize better to unseen data.

The concept of regularization has been around since the early days of statistical learning theory, but it gained prominence in machine learning with the introduction of ridge regression in 1970 by Hoerl and Kennard. Lasso was later introduced by Robert Tibshirani in 1996, further popularizing regularization techniques in statistics and machine learning.

The development of ridge regression by Arthur E. Hoerl and Robert W. Kennard was a significant milestone. Robert Tibshirani’s introduction of lasso regularization further contributed to the widespread adoption and development of regularization techniques. These contributors have shaped how regularization is used today in reducing overfitting and improving model generalizability across various applications in machine learning.