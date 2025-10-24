<script setup>
const routes = [
  { name: 'parties', to: '/parties' },
  { name: 'forum', to: '/forum' },
]
</script>

<template>
  <nav class="navbar">
    <h1 class="logo">VueJS Workshop</h1>
    <div class="links">
      <router-link v-for="route in routes" :to="route.to" :key="route.to">
        {{ route.name }}
      </router-link>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 24px;
  border-bottom: 1px solid #ddd;
  background-color: #fff;
}
.logo {
  color: #0074ff;
  font-size: 1.2rem;
  font-weight: 700;
}
.links a {
  color: #555;
  margin-left: 20px;
  text-decoration: none;
}
.links a.router-link-active {
  color: #0074ff;
  font-weight: bold;
}
</style>
