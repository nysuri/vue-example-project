<template>
  <div class="forum-page">
    <h1>Community Forums</h1>
    <p v-if="lastUpdated">Last updated: {{ lastUpdated }}</p>

    <!-- Add Forum Section -->
    <!-- TODO: add submit event handler to form -->
    <form class="add-forum">
      <!-- TODO: Bind input to reactive newTitle -->
      <input type="text" placeholder="Enter forum title..." />

      <!-- Theme selection -->
      <!-- TODO: Bind select to reactive newTheme -->
      <select>
        <option disabled value="">Select a theme</option>
        <option value="Natuur">Natuur</option>
        <option value="Politiek">Politiek</option>
        <option value="Onderwijs">Onderwijs</option>
        <option value="Technologie">Technologie</option>
      </select>

      <!-- TODO: Handle form submit to add new forum -->
      <button type="submit">Add Forum</button>
    </form>

    <!-- Forum List -->
    <div class="forum-list">
      <!-- TODO: Show "No forums yet" message when forums array is empty -->
      <div class="empty">No forums yet. Add one!</div>

      <!-- TODO: Render forum items dynamically -->
      <div class="forum-item">
        <h3>Forum title</h3>
        <p class="theme">Forum Theme</p>

        <!-- TODO: Optional: add like button with thumbs up icon -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, onUpdated } from 'vue'

const lastUpdated = ref(null)

// TODO: make the variable forums, newTitle and newTheme reactive
const forums = []
const newTitle = ''
const newTheme = ''

// TODO: Create reactive refs for form inputs (newTitle & newTheme)

// TODO: Implement addForum function to add a new forum to forums array
const addForum = () => {
  // 1. Check if inputs are filled
  // 2. Add new forum to forums array
  // 3. Reset form inputs
}

// TODO: Use onMounted hook to load forums from localStorage (use JSON.parse)
onMounted(() => {
  const saved = localStorage.getItem('forums')
})

onUpdated(() => {
  console.log({ updated: lastUpdated.value })
  lastUpdated.value = new Date().toLocaleTimeString()
})

// TODO: Use onUnmounted hook to save forums to localStorage (JSON.stringify)
onUnmounted(() => {})
</script>

<style>
.forum-page {
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  font-family: system-ui, sans-serif;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.forum-page h1 {
  text-align: center;
  margin-bottom: 20px;
}

.add-forum {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.add-forum input,
.add-forum select {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.add-forum button {
  padding: 10px 16px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.2s;
}

.add-forum button:hover {
  background: #0056b3;
}

.forum-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.forum-item {
  padding: 15px;
  border-radius: 8px;
  background: white;
  border: 1px solid #ddd;
}

.forum-item h3 {
  margin: 0 0 6px;
}

.forum-item .theme {
  font-style: italic;
  color: #555;
}

.empty {
  text-align: center;
  color: #888;
  font-style: italic;
}
</style>
