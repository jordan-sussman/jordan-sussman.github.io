---
layout: post
title: "A Side Effect"
---

If you've spent any time in a React codebase, you've seen it. A `useEffect` at the top of a component, a dependency array that's either empty or suspiciously long, and a comment from six months ago that says "don't touch this". It works. Until it doesn't. That's not to say `useEffect` has no place in your codebase, but if you're reaching for it, it's worth asking yourself why.

This is the pattern that should give you pause:

```tsx
const [user, setUser] = useState(null)
const [loading, setLoading] = useState(false)

useEffect(() => {
  setLoading(true)
  fetchUser(id).then((data) => {
    setUser(data)
    setLoading(false)
  })
}, [id])
```

No cleanup, no error handling, no cancellation. If `id` changes before the fetch resolves you'll set stale data. Failures are silent. Race conditions are a matter of when, not if. This is three problems pretending to be one `useEffect`.

For data fetching, the alternative isn't a better-written effect; it's not writing one at all. For instance, React Query handles caching, deduplication, loading/error state, and cancellation out of the box.

```tsx
const {
  data: user,
  isLoading,
  error,
} = useQuery({
  queryKey: ["user", id],
  queryFn: () => fetchUser(id),
})
```

Same result, no boilerplate, no race conditions, and the component is back to describing what it renders rather than how it fetches.

State management has the same story. Effects used to keep state in sync across components are usually a sign the state doesn't belong in a component at all.

```tsx
// Syncing state across components with useEffect is a losing battle
useEffect(() => {
  setGlobalUser(user)
}, [user])
```

Zustand, for instance, makes this straightforward without the overhead of Redux or the fragility of syncing effects.

```tsx
const useUserStore = create((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}))

// Anywhere in the tree
const { user, setUser } = useUserStore()
```

One source of truth, no syncing required, no effects needed.

These are just a few examples highlighting how using `useEffect` puts the burden of coordination on the component. You're writing imperative code inside a declarative system and hoping the dependency array keeps everything honest. A conditional workflow doesn't belong in an effect either, it belongs in a state machine.

If you're none the wiser, you can easily spend more time than you'd like debugging effects that fired in the wrong order, ran too many times because an object reference changed on every render, or stopped running because someone forgot a dependency. The rule isn't "never use `useEffect`." Syncing with a WebSocket, a third party library, or the DOM directly, that's what it's for. If you're reaching for it with nothing external involved, the effect is usually hiding a problem rather than solving one.

Good code doesn't hide what it's doing. Neither should a `useEffect`.
