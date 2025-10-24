<template>
  <div class="container" v-if="party">
    <button class="back" @click="goBack">← Back to Parties</button>

    <div class="header">
      <div class="party-color" :style="{ backgroundColor: party.color }"></div>
      <div>
        <h1>{{ party.name }}</h1>
        <p class="subtitle">{{ party.fullName }}</p>
      </div>
    </div>

    <p class="description">{{ party.description }}</p>

    <div class="tags">
      <span class="tag">👥 {{ formattedVotes }} votes</span>
      <span class="tag">📊 {{ party.seats }} seats</span>
    </div>

    <h2>Top Candidates</h2>
    <div class="candidates">
      <CandidateCard
        v-for="candidate in party.candidates"
        :key="candidate.position"
        :candidate="candidate"
        :color="party.color"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { parties } from '@/data/parties'
import CandidateCard from '@/components/CandidateCard.vue'

const route = useRoute()
const router = useRouter()

const party = ref(null)

onMounted(() => {
  const id = parseInt(route.params.id)
  party.value = parties.find((p) => p.id === id)
})

const formattedVotes = computed(() =>
  party.value ? party.value.votes.toLocaleString('en-US') : '',
)

const goBack = () => {
  router.push('/parties')
}
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 40px auto;
  padding: 0 20px;
}
.back {
  background: none;
  border: none;
  color: #555;
  cursor: pointer;
  font-size: 0.9rem;
  margin-bottom: 20px;
}
.header {
  display: flex;
  align-items: center;
  gap: 15px;
}
.party-color {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.subtitle {
  color: #666;
}
.description {
  margin: 20px 0;
  color: #444;
}
.tags {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}
.tag {
  background-color: #ffe8d6;
  color: #d9781e;
  border-radius: 16px;
  padding: 6px 12px;
  font-size: 0.9rem;
  font-weight: 500;
}
.candidates {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 2vh;
}
</style>
