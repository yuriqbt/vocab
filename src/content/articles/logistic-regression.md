---
slug: logistic-regression
summary: Statistical model that estimates the probability of a binary outcome, commonly used for classification tasks.
title: Logistic Regression
---

Logistic regression is a fundamental machine learning algorithm used primarily for binary classification problems, where the objective is to predict a label that is either 0 or 1 (e.g., spam or not spam, sick or healthy). Unlike linear regression which predicts a continuous output, logistic regression models the probability that a given input belongs to the positive class (usually labeled as 1) by applying a logistic function to a linear combination of inputs. This logistic function, also known as the sigmoid function, outputs a value between 0 and 1, effectively mapping any real-valued number into a probability space. The coefficients of the logistic regression model are typically estimated using maximum likelihood estimation, a method that seeks to find the parameter values that most likely produce the observed outcomes.

Logistic regression was developed as a biometric tool in the early 20th century, first introduced in 1912 by statistician Ronald A. Fisher and expanded by Joseph Berkson in 1944, who coined the term "logit model" to describe the logarithm of odds of the dependent variable. Its use in machine learning as a classification method gained significant traction in the late 1950s and 1960s.

Ronald A. Fisher is pivotal for introducing the logistic model in the context of genetics, and Joseph Berkson further developed the method, establishing its foundation in modern statistics and its application to a wide range of biological and medical problems. Their work laid the groundwork for logistic regression's later adaptations into other fields, including economics and machine learning.