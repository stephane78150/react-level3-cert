# Typeahead

As shown in the demo, this component support various sources of static data and could be adapted easily to query dynamically if I had some free REST API to test it :-)

### Rx.JS

I choose to use RX.JS as it provides a lot of useful operator like 
- `switchMap` to cancel the last http query when triggering a new search
- `debounceTime` to wait until the user has finished typing 

I relied on a library (`observable-hooks`) to peform the "plumbing" that link react events system with RX.JS observable, it could have done manually by playing with the RX.JS subject

### Limitation

As it is not a production ready component, there is a few improvement that could be done : 
- after selecting a value, there is no way to reset the state to perform another search
- styling of search results could be improved
- keyboard navigation to select the first result with enter, or use the arrow keys to navigate among results

