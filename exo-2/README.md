# Second exercise on modal API

- Dialogs can be opened or closed using an *imperative API*, that is exposed through a hook (that internally consumes a context to get the API)
- A top level wrapper component is needed so that one can access the API through the context, as context can only be acccessed by the children component
- The wrapper component also store the state of the dialog
   - we use the hook `useReducer` as a simple Redux subsitute
   - we can only open one dialog at a time, but for notifications/toaster is would be more appropriate to have a list
- The dialog is injected in document body HTML element using a portal, so that it can escape if needed any CSS layout of a parent component when trying to create the modal or modeless layout.
In my case, you probably are going to inject the wrapper near the top of you app, so that the API is available everywhere through the context, so should you use an older version where React Portals are not yet available, it would have much impact anyway, as it is unlikely you would be blocked by some CSS so near of the top level of the DOM.


 