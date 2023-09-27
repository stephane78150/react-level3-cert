# My Local-Storage API


I used the hook _useSyncExternalStore_ to make sure components are notified when the content of local storage changes.
For that, I had to design a kind of external store that track subscribers, so that react can subscribe its own internal functions and be notified that it needs to render again a specific component.
I choose to manage the subscription at the key level, rather than the whole local storage scope, so that only the component that tracks a particular key value get rendered and not the whole app.

### Implementation choice

As optimization did not matter, since this is just proof-of-concept code, using a simple object as dictionary was enough for me, but maybe one of theses [collections](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Keyed_collections) would have provided better performance. I did wrote some test with Vitest to check my subscription code that is written in a functionnal style (I could also have used OOP) with [curried functions](https://blog.bitsrc.io/functional-programming-part-3-the-powers-of-currying-213eb69b234b).

When implementing the hook, I made sure to create key specific function using [partial application](https://en.wikipedia.org/wiki/Partial_application), and I also memoize stuff that is specific to a key (_useMemo_ & _useCallback_), to ensure value stability for callbacks function, as I do not know how the _useSyncExternalStore_ is implemented by the React team, and I would to avoid confusing it by calling it repeatedly with different function values, that may create the illusion that it needs to subscribe again to a new store causing potential useless renders.

### Render count 

I also use a debugging hook to display the number of renders for each component (_React Dev Tools_ can do that also), that allow user to check that only the components that monitor the key that had changed are rendered. 
- You will notice that we get _two_render instead of one when editing a key in local dev [as React always render twice in dev build](https://react.dev/reference/react/StrictMode). Other keys whose value have not changed will not render uselessly
- Also when we add or remove key, the parent component that contains the list of keys re-render again, and this trigger a render of all child components for specific key.

### Write component UX design

The 'remove' button is implememented by removing both the local storage value & the key from the array of monitored keys for the write component.
However, the 'add' button just add the keys to the 




