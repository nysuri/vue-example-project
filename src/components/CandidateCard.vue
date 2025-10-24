<template>
  <div class="candidate-card">
    <div class="circle" :style="{ backgroundColor: color }">{{ candidate.position }}</div>
    <div>
      <h4>{{ candidate.name }}</h4>
      <p class="position">Position {{ candidate.position }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  candidate: Object,
  color: String,
})
</script>

<style scoped>
.candidate-card {
  background-color: #fff;
  border-radius: 8px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 10px;
}
.circle {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 0.9rem;
}
h4 {
  margin: 0;
}
.position {
  font-size: 0.8rem;
  color: #777;
}
</style>
