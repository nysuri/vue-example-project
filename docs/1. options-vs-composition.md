# Options API vs Composition API

## Options API

- The traditional Vue approach
- Organizes code by options (data, methods, computed, etc.)
- Easier for beginners to understand separation of concerns
- Can become harder to maintain in large components 

## Composition API

- Introduced in Vue 3
- Organizes code by logical concerns
- Uses **setup** and reactive references
- Better TypeScript support
- More flexible code organization
- Easer code reuse

### Example Comparison

**Options API**

```vue
<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++
    }
  },
  mounted() {
    console.log(`The initial count is ${this.count}.`)
  }
}
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>
```

**Composition API**

```vue
<script setup>
import { ref, onMounted } from 'vue'

const count = ref(0)

function increment() {
  count.value++
}

onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>
```

## Which to choose?

You can choose whichever you like. However, for this workshop, we'll use the Composition API as it's the more modern approach and offers better scalability.



Ready to begin? Let's start with our first concept → (Declarative Rendering)[link]