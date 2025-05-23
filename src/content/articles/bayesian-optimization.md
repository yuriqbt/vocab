---
slug: bayesian-optimization
summary: Strategy for optimizing complex, expensive-to-evaluate functions by building a probabilistic model of the function and using it to select the most promising points to evaluate.
title: Bayesian Optimization
---

Bayesian Optimization leverages Bayesian inference to build a surrogate model, typically a Gaussian Process, of an objective function. This surrogate is cheaper to evaluate than the objective function itself and provides a measure of uncertainty about the function's values at unsampled points. The optimization process involves iteratively selecting new points to evaluate based on an acquisition function, which balances exploration (reducing uncertainty about the function) and exploitation (focusing on areas likely to yield better results). This approach is particularly useful for hyperparameter tuning in machine learning, optimizing engineering designs, and other scenarios where function evaluations are costly.

Bayesian Optimization has roots in the 1960s, with significant theoretical foundations laid by Harold Kushner in 1964. The methodology gained traction in the machine learning community in the early 2010s, especially following the influential work of Jones, Schonlau, and Welch on Efficient Global Optimization (EGO) in 1998.

Harold Kushner is credited with early theoretical contributions. More recently, Carl Edward Rasmussen and Christopher K. I. Williams have significantly advanced the field, particularly through their work on Gaussian Processes. Additionally, Jasper Snoek, Hugo Larochelle, and Ryan P. Adams made substantial contributions to the practical application of Bayesian Optimization in machine learning.