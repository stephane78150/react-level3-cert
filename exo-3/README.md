# Typeahead

I intially though that the goal was to query a dynamic REST API (I think that usually typeahead are used for, because you need to have a dataset large enough to warrant the search feature).
Later, I find that it was simpler than I thought initially, you have to use static data, just need to have property name be configurable...

As I used typescript, dynamic property name, requires some care with typing (you have to make your component generic), note that I use the `keyof` operator for property name, so typescript
will check that the property name do exist in the implicitely typed JSON dataset.

### Rx.JS

I choose to use RX.JS as it provides a lot of useful operator like

- `switchMap` to cancel the last http query when triggering a new search
- `debounceTime` to wait until the user has finished typing

I relied on a library (`observable-hooks`) to peform the "plumbing" that link react events system with RX.JS observable, it could have be done manually by playing with the RX.JS subject

### Limitation

As it is not a production ready component, there is a few improvement that could be done :

- after selecting a value, there is no way to reset the state to perform another search
- styling of search results could be improved
- keyboard navigation to select the first result with enter, or use the arrow keys to navigate among results
