<script setup>
import { ref } from 'vue'

const books = ref([
  { id: 1, title: 'Vue 3 Basics', author: 'John Doe', isAvailable: true },
  { id: 2, title: 'Composition API', author: 'Jane Smith', isAvailable: false },
])
</script>

<template>
  <div class="book-list">
    <!-- Add here an empty books state. -->

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
              <button class="delete-button"></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
