---
layout: post
title: "Less Is More"
---

There's a particular kind of satisfaction in writing a clever abstraction. It feels like real engineering muscle, but often it isn't. The cost of clever code doesn't show up when you write it. It shows up six months later, when someone (even you, the original author) has to modify it and first has to understand what the code is actually doing.

```typescript
// Premature abstraction
function processItem<T>(
  item: T,
  options: {
    validate?: boolean;
    transform?: (item: T) => T;
    onError?: (err: Error) => void;
    skipCache?: boolean;
  } = {},
) {
  // now every caller needs to know which options matter
}

// Just two functions
function processUser(user: User) {
  /* ... */
}

function processOrder(order: Order) {
  /* ... */
}
```

Two similar functions are not a problem that needs solving. They're a normal, readable state of a codebase. Abstraction earns its place when duplication is proven, not when it's merely possible. A useful gut check is the "rule of three": don't abstract on the first repetition, consider it on the second, and only commit to it on the third when the actual shape of the pattern is clear.

Good abstraction is essential in large codebases as it's what keeps systems navigable throughout growth. But abstraction as a reflex, applied before the duplication cost is proven, is often more expensive than the duplication it was meant to prevent. Each unnecessary layer is a tax paid by every future developer that can cause more indirection and misuse when programming.

There's genuine value in code that fellow engineers can read in one pass, versus code that asks them to first reverse-engineer the abstraction before they can trust their understanding of it. Optimize for that.

The best code I've worked with rarely impresses on a first read. It just makes sense. That's a much harder thing to write than it sounds, but ultimately, less is more.
