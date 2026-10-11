---
layout: post
title: "Rewrite It?"
---

I remember when upgrades, refactors, and shifting to new languages would easily take an entire year to complete in a major production codebase. Most of the time, this was out of necessity rather than preference. You need to tend to the garden to maintain, build new capabilities, or improve performance and security.

Many popular software companies were built with Ruby and Rails during a time when that language and framework were incredibly popular, like Airbnb. A commonly used language or framework is great, but it can still come with pitfalls. One of those pitfalls is Rails. Upgrading Rails versions can be quite challenging in large, complex production codebases. It takes time to make sure the code is reworked to the newer version's patterns and practices without breaking things along the way. A task like this would take an engineer a good amount of time and many PRs to get right.

Today, with AI, that's often no longer the case. Engineers are rewriting entire products and codebases in much less time and effort. For example, Anthropic acquired Bun, and the Bun team used Claude to rewrite it in Rust so they could better catch memory and stability issues early (https://bun.com/blog/bun-in-rust). This raises the question: would your codebase be better if it were in another language? If this can be accomplished quicker with the help of AI, are we thinking critically enough about the codebase? Is the codebase better being kept as-is or should we rework it from scratch?

Depending on the gripes and pitfalls of your codebase, the answer may vary. Production codebases that are over a decade old are no longer bound by the constraints of the past. And isn't it comforting to know you're not stuck forever working on Rails upgrades and instead spending that time building what the product needs? Spending more time building rather than maintaining certainly sounds good to me; I bet you agree.
