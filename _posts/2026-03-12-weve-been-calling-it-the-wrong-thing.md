---
layout: post
title: "We've Been Calling It the Wrong Thing"
---

The term *"artificial intelligence"* carries a lot of weight. Maybe you think of machines like robots making their own decisions, understandings, and reasonings with the world they inhabit. We know that isn't the case, at least not right now. Instead, we get a sophisticated pattern matcher. This isn't a criticism, more a clarification I wish was a given.

When you type a prompt into a language model, the system doesn't "think" in any meaningful sense. It doesn't reason from first principles, hold beliefs, or understand context the way a human does. What it does is predict what the next most likely token should be, given everything that came before it, based on patterns observed across vast amounts of training data. The same principle applies to image recognition, fraud detection, and recommendation engines. Each one is finding and applying patterns learned from data, something Google search, for instance, has already been doing for decades. What were *"features"* are now all *"artificial intelligence"*.

For a human, intelligence involves generalizing from sparse data, dealing with cause and effect, adapting without retraining, and operating with intent. A child shown one cat can recognize cats they've never seen. Current models require millions of examples. Humans understand why things happen, while models recognize correlations. The response a model provides you is coherent but it isn't doing much more than interpolating from trained patterns and contextual data.

This is exactly why engineers spend so much time fighting the output. For example, a model is asked to write a TypeScript function, it will produce something that *looks* correct by matching a pattern of code it has seen. However, the model can frequently sidesteps the type system entirely, defaulting to `any` because that pattern is far more common in the wild than well-typed code. For example:

```typescript
// What the model gives you
const parseResponse = (data: any) => {
  return data.user.name;
};
 
// What you actually need
type ApiResponse = {
  user: {
    name: string;
  };
};
 
const parseResponse = (data: ApiResponse): string => {
  return data.user.name;
};
```

The first version compiles and runs fine. For a novice engineer, maybe that's enough. For scalable and large codebases, this isn't acceptable as you've then lost the safety net TypeScript was there to provide. The model isn't cutting corners, it genuinely has no concept of "type-safe", it just matched a pattern. Engineers who understand this don't blindly accept the output; they treat it like code from a junior developer who has read plenty but shipped very little. You review it, question it, and often rewrite it. That relationship changes how you work with these tools productively.
 
So let me clear this up. Language models as we know them today are mirrors, not windows. They reflect a world of which they were trained on, and when they perform well, it's because those patterns were good approximations of what is needed. A great pattern matcher. 
