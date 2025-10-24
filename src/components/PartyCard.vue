<template>
  <div class="party-card" @click="goToDetails">
    <div class="party-header">
      <div class="party-color" :style="{ backgroundColor: party.color }"></div>
      <div>
        <h2>{{ party.name }}</h2>
        <p class="subtitle">{{ party.fullName }}</p>
      </div>
    </div>

    <p class="description">{{ party.description }}</p>

    <div class="stats">
      <span>👥 {{ formattedVotes }} votes</span>
      <span>📊 {{ party.seats }} seats</span>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  party: Object,
})

const router = useRouter()

const goToDetails = () => {
  router.push(`/party/${props.party.id}`)
}

const formattedVotes = computed(() => props.party.votes.toLocaleString('en-US'))
</script>

<style scoped>
.party-card {
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 20px;
  transition: box-shadow 0.2s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
}
.party-card:hover {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
.party-header {
  display: flex;
  align-items: center;
  gap: 12px;
}
.party-color {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.subtitle {
  color: #666;
  font-size: 0.9rem;
}
.description {
  margin: 16px 0;
  color: #444;
  font-size: 0.9rem;
}
.stats {
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
  color: #555;
}
</style>
