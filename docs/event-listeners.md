A book has also a `read` property, which indicates that a book is read or not (boolean). Let's create a function that toggles this property:

```vue
function toggleRead(id) { }
```

Now add a click handler to the button:

```vue
<button class="read-button" v-on:click="toggleRead(books[0].id)">Mark as read</button>
```
