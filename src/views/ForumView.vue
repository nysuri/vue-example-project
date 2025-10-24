<template>
  <div class="forum-page">
    <h1>Community Forums</h1>

    <!-- Add Forum Section -->
    <form class="add-forum">
      <!-- TODO: Implement reactive state for form inputs -->
      <input type="text" placeholder="Enter forum title..." />
      <input type="text" placeholder="Enter forum description..." />

      <!-- TODO: Handle add button click to create new forum post -->
      <button>Add Forum</button>
    </form>

    <!-- Forum List -->
    <div class="forum-list">
      <!-- TODO: Show "no forums" message only when the posts array is empty -->
      <div class="empty">No forums yet. Add one!</div>

      <div v-for="(forum, index) in forums" :key="index" class="forum-item">
        <h3>{{ forum.title }}</h3>
        <p>{{ forum.description }}</p>

        <!--  Todo: Add click handler -->
        <div class="thumbs-up">
          <ThumbsUp :size="16" />
          <span>{{ forum.likes }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ThumbsUp } from 'lucide-vue-next'

const forums = ref([
  {
    title: 'General Discussion',
    description: 'Talk about anything related to the community.',
    likes: 4,
  },
  {
    title: 'Project Help',
    description: 'Get support with your ongoing projects.',
    likes: 12,
  },
])

// Todo: Implement reactive state for form inputs

const addForum = () => {
  // Todo: Add the new forum to the list
}

const likeForum = (idx) => {
  const forum = forums.value.find((f, index) => index === idx)

  // Todo: Increment the likes for the forum
}
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

.add-forum input {
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

.empty {
  text-align: center;
  color: #888;
  font-style: italic;
}
.thumbs-up {
  display: flex;
  gap: 5px;
  align-items: center;
  cursor: pointer;
  color: #007bff;
  margin-top: 10px;
}
</style>
