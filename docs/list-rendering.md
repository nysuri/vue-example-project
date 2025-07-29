# List Rendering

We can use the `v-for` directive to render a list of elements based on a source array:

{% raw %}

```vue
<ul>
  <li v-for="book in books" :key="book.id">
    {{ book.title }}
  </li>
</ul>
```

Here `book` is a local variable representing the array element currently being iterated on. It's only accessible on or inside the `v-for` element, similar to a function scope.

Notice how we are also giving each todo object a unique `id`, and binding it as the special key attribute for each `<li>`. The `key` allows Vue to accurately move each `<li>` to match the position of its corresponding object in the array.

There are two ways to update the list:

1. Call **mutating methods** on the source array:

```vue
books.value.push(newTodo)
```

2. Replace the array with a new one:

```vue
books.value = books.value.filter(/* ... */)
```

{% endraw %}

### Exercise

1. Loop through the books and display them with the help of the `v-for` directive. Use the unique `id` and bind it as the special key attribute for each `<li>` (`:key`)
