<script setup></script>

<template>
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
</template>
