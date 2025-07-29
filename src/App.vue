<script setup>
import TheNavbar from './components/TheNavbar.vue'

const books = [
  { id: 1, title: 'Vue 3 Basics', author: 'John Doe', isAvailable: true },
  { id: 2, title: 'Composition API', author: 'Jane Smith', isAvailable: false },
]
</script>

<template>
  <TheNavbar />

  <main class="container">
    <h1 class="title">Welcome to the Library Book Tracker</h1>

    <!-- Form to add a new book -->
    <form class="book-form">
      <h2 class="form-title">Add New Book</h2>
      <div class="form-content">
        <div class="form-group">
          <label for="title" class="form-label"> Title </label>
          <input id="title" type="text" placeholder="Enter book title" class="form-input" />
        </div>
        <div class="form-group">
          <label for="author" class="form-label"> Author </label>
          <input id="author" type="text" placeholder="Enter author name" class="form-input" />
        </div>
        <button type="submit" class="submit-button">Add Book</button>
      </div>
    </form>

    <!-- Display list of books -->

    <div class="book-list">
      <!-- Todo: add an empty books state. -->

      <div class="book-sections">
        <div class="book-section">
          <h3 class="section-title">A list of my books ({{ books.length }})</h3>
          <div class="book-items">
            <!-- Todo: Add a list of books -->
            <ul>
              <li class="book-title">{{ books[0].title }} - {{ books[0].author }}</li>
              <li class="book-title">{{ books[1].title }} - {{ books[1].author }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.title {
  font-size: 1.25rem; /* text-xl */
  font-weight: 700; /* font-bold */
  color: #1a202c; /* text-foreground */
  text-align: center;
}
</style>
