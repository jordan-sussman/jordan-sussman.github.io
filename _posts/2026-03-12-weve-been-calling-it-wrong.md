---
layout: post
title: "We've Been Calling It Wrong"
---

The term *"artificial intelligence"* carries a lot of weight. Maybe you think of robots out in the world making their own decisions or reasonings. We know that isn't the case, at least not right now. Instead, we get a sophisticated pattern matcher. This isn't a criticism, more a clarification I wish was a given.

When you type a prompt into a language model, the system doesn't "think" in any meaningful sense. It doesn't reason from principles, hold beliefs, or understand context the same way a human does. What it does is predict what the next most likely token should be, given everything that came before it, based on patterns observed across vast amounts of training data. The same principle applies to image recognition, fraud detection, and recommendation engines. Each one is finding and applying patterns learned from data, something like a search on Google, for instance, has already been doing for decades. In many cases, what once was a *"feature"* is now named *"AI"*.

For software engineers, when interfacing with these language models (or "AI"), we spend most of our time fighting the output. Let's say a model is asked to write a function in TypeScript, it will produce something that *looks* correct by matching a pattern of code it has seen. However, the model can frequently sidestep the type system entirely, defaulting to `any` because that pattern is far more common in the wild than well-typed code. For example:

```typescript
// What the model gives you
const parseResponse = (data: any) => {
  return data.user.name
}
 
// What you actually need
type ApiResponse = {
  user: {
    name: string
  }
}
 
const parseResponse = (data: ApiResponse): string => {
  return data.user.name
}
```


The first version compiles and runs fine. For a novice engineer, maybe that's enough. For scalable and large codebases, this isn't acceptable as you've then lost the safety net TypeScript was there to provide. The model isn't cutting corners, it genuinely has no concept of "type-safe", it just matched a pattern. Engineers who understand this don't blindly accept the output; they treat it like code from a junior developer who has read plenty but shipped very little. You review it, question it, and often rewrite it. That relationship changes how you work with these tools productively.
 
Language models as we know them today are mirrors, not windows. They reflect a world they were trained on, and when they perform well, it's because those patterns were good approximations of what is needed. A great pattern matcher. 
