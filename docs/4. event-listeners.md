# Event Listeners

We can listen to DOM events using the `v-on` directive:

```vue
function increment() { 
    // update component state 
} 

{% raw %}
<button v-on:click="increment">{{ count }}</button>
{% endraw %}
```

Due to its frequent use, v-on also has a shorthand syntax:

```vue
{% raw %}
<button @click="increment">{{ count }}</button>
{% endraw %}
```

Like the attributes, there are many more event listeners (@mouseover, @scroll, @submit, etc...)


### Library app

A book has also a `read` property, which indicates that a book is read or not (boolean). Let's create a function that toggles this property:

```vue
function toggleRead(id) {
  const foundBook = books.value.find((book) => book.id === id)

  if (foundBook) {
    foundBook.read = !foundBook.read
  }
}
```

Now add a click handler to the button:

```vue
<button class="read-button" v-on:click="toggleRead(books[0].id)">Mark as read</button>
```

Try to click on the toggle button. Does it work?


### Next section

Let's try to dispay all the books in the next chapter: [List Rendering](list-rendering.md)


