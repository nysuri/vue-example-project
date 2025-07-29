# Declarative Rendering


What you see in the ==App.vue== file is a Vue Single-File Component (SFC). An SFC is a reusable self-contained block of code that encapsulates HTML, CSS and JavaScript that belong together, written inside a ==.vue== file.

The core feature of Vue is declarative rendering: using a template syntax that extends HTML, we can describe how the HTML should look based on JavaScript state. When the state changes, the HTML updates automatically.

State that can trigger updates when changed is considered reactive. We can declare reactive state using Vue's ==ref()== API.

```vue
import { ref } from 'vue'

const message = ref('Hello World!')

console.log(message.value) // "Hello World!"
message.value = 'Changed'
```

==ref()== can take any value type and create an object that exposes the inner value under a .value property.

### Rendering

Reactive state declared in the component's ==<script setup>== block can be used directly in the template. This is how we can render dynamic text based on the value of the counter object and message ref, using mustaches syntax:

```vue
<h1>{{ message }}</h1>
```
Notice how we did not need to use .value when accessing the message ref in templates: it is automatically unwrapped for more succinct usage.

The content inside the mustaches is not limited to just identifiers or paths - we can use any valid JavaScript expression:

```vue
<h1>{{ message.split('').reverse().join('') }}</h1>
```

### In our library app

Now, try to create some reactive state yourself. In the starter code, open ==src/App.vue==. You'll see a basic template with some placeholder content.

1. Add the following in the script to create a reactive books array: 

```vue
import { ref } from 'vue'

const books = ref([
  { id: 1, title: 'Vue 3 Basics', author: 'John Doe', isAvailable: true },
  { id: 2, title: 'Composition API', author: 'Jane Smith', isAvailable: false }
])
```

2. In the template, display the first book's title:

```vue
<h2>First Book: {{ books[0].title }}</h2>
<p>by {{ books[0].author }}</p>
```


Next, let's learn how to bind attributes → (Attribute Binding)[link]