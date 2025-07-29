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
            <!-- Todo: Loop through books and show the books one by one. -->
            <div class="book-item">
              <div class="book-content">
                <h3 :class="['book-title', { read: books[0].isRead }]">
                  {{ books[0].title }}
                </h3>
                <p :class="['book-author', { read: books[0].isRead }]">by {{ books[0].author }}</p>
              </div>
              <div class="book-actions">
                <button :class="['read-button', { read: books[0].isRead }]">
                  {{ books[0].isRead ? 'Read' : 'Mark as Read' }}
                </button>
                <button class="delete-button">delete</button>
              </div>
            </div>
            <!-- End book item -->
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
