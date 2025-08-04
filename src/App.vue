<script setup>
import TheNavbar from './components/TheNavbar.vue'
import { ref } from 'vue'

const books = ref([
  { id: 1, title: 'Vue 3 Basics', read: false },
  { id: 2, title: 'Composition API', read: false },
])

function toggleRead(id) {
  const foundBook = books.value.find((book) => book.id === id)

  if (foundBook) {
    foundBook.read = !foundBook.read
  }
}

function addBook(id) {
  // TODO
  const newBook = {
    id,
    title: 'New Book',
    read: false,
  }
  books.value.push(newBook)
}

function deleteBook(id) {
  // TODO
  books.value = books.value.filter((book) => book.id !== id)
}
</script>

<template>
  <TheNavbar />

  <main class="container">
    <h1 class="title">Welcome to the Library Book Tracker</h1>

    <!-- Display list of books -->

    <div class="book-list">
      <!-- Todo: add an empty books state. -->
      <div>
        <h3 class="section-title">A list of my books ({{ books.length }})</h3>
        <ul class="book-items">
          <li v-for="book in books" :id="`book-${book.id}`" class="book-item">
            <p class="book-title" :class="{ read: book.read }">
              {{ book.title }}
              <!-- Show the first book here -->
            </p>
            <div>
              <button class="read-button" @click="toggleRead(book.id)">Mark as read</button>
              <button class="delete-button" @click="deleteBook(book.id)">Delete</button>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!-- Form to add a new book -->
    <form class="book-form">
      <h2 class="form-title">Add New Book</h2>
      <div class="form-content">
        <div class="form-group">
          <label for="title" class="form-label"> Title </label>
          <input id="title" type="text" placeholder="Enter book title" class="form-input" />
        </div>
        <button type="submit" class="submit-button">Add Book</button>
      </div>
    </form>
  </main>
</template>

<style scoped>
.title {
  font-size: 1.25rem; /* text-xl */
  font-weight: 700; /* font-bold */
  color: #1a202c; /* text-foreground */
  text-align: center;
  margin: 2.5rem 0;
}

.read {
  color: #6b7280; /* text-muted-foreground */
  text-decoration: line-through;
}
</style>
