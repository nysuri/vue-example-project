<template>
  <div class="container">
    <h1>Dutch Political Parties</h1>
    <p class="intro">
      Explore the major parties in the Dutch parliament. Use the search to filter parties by name.
    </p>

    <div class="filter">
      <LucideSearch class="icon" />
      <input
        v-model="filterText"
        type="text"
        placeholder="Search parties... (see console for lifecycle hook changes)"
      />
    </div>

    <div v-if="loading">Loading...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else class="grid">
      <PartyCard v-for="party in filteredParties" :key="party.id" :party="party" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUpdated, onUnmounted } from 'vue'
import PartyCard from '@/components/PartyCard.vue'
import { useParties } from '@/composables/useParties'
import { LucideSearch } from 'lucide-vue-next'

const { parties, loading, error, loadParties } = useParties()
const filterText = ref('')

// Filter parties by text (includes, case-insensitive)
const filteredParties = computed(() => {
  if (!filterText.value) return parties.value
  return parties.value.filter((p) => p.name.toLowerCase().includes(filterText.value.toLowerCase()))
})

// Lifecycle hooks
onMounted(() => {
  loadParties()
  console.log('✅ Parties page mounted')
})

onUpdated(() => {
  console.log(`🔄 Parties page updated — filter: "${filterText.value}"`)
})

onUnmounted(() => {
  console.log('💥 Parties page unmounted — cleanup if necessary')
})
</script>

<style scoped>
.container {
  max-width: 1100px;
  margin: 40px auto;
  padding: 0 20px;
}
h1 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 8px;
}
.intro {
  color: #666;
  margin-bottom: 24px;
}
.filter {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
  max-width: 500px;
  border: 1px solid #ddd;
  padding: 6px 10px;
  border-radius: 8px;
  background-color: #f9f9f9;
  transition: border-color 0.2s;
}
.filter:focus-within {
  border-color: #3b82f6;
}
.filter input {
  flex: 1;
  border: none;
  outline: none;
  font-size: 1rem;
  background: transparent;
}
.filter .icon {
  width: 20px;
  height: 20px;
  color: #999;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}
</style>
