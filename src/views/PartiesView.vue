<template>
  <div class="container">
    <h1>Dutch Political Parties</h1>
    <p class="intro">
      Explore the major parties in the Dutch parliament. Click on any party to see detailed
      information.
    </p>

    <div class="grid">
      <PartyCard v-for="party in parties" :key="party.id" :party="party" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { parties as partyData } from '@/data/parties'
import PartyCard from '@/components/PartyCard.vue'

const parties = ref(partyData)
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
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}
</style>
