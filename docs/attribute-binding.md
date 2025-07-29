# Attribute Bindings

In Vue, mustaches are only used for text interpolation. To bind an attribute to a dynamic value, we use the v-bind directive:

```vue
<div v-bind:id="dynamicId"></div>
```

A **directive** is a special attribute that starts with the v- prefix. They are part of Vue's template syntax. Similar to text interpolations, directive values are JavaScript expressions that have access to the component's state.

The part after the colon (==:id==) is the "argument" of the directive. Here, the element's id attribute will be synced with the dynamicId property from the component's state.

Because v-bind is used so frequently, it has a dedicated shorthand syntax:

```vue
<div :id="dynamicId"></div>
```

### In our library app

Every book has a unique identifier (`id`).
Let's make the id of the list unique. Change the following line `<li id="1" class="book-item">` to: `<li :id="books[0].id" class="book-item">`

Neat! Although we don't see anything happening yet, we need the id for things like toggling classes and deleting the book.

Let's see how we can use this id in the next chapter.

[Event Listeners](event-listeners.md)
