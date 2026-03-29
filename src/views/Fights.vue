<script setup>
import { fights } from '../data/fights'
</script>

<template>
  <div class="fights-page">
    <h1>Combates</h1>

    <div class="fights-list">
      <router-link
        v-for="fight in fights"
        :key="fight.id"
        :to="`/fights/${fight.id}`"
        class="fight-card"
      >
        <h2>{{ fight.fighter1 }} vs {{ fight.fighter2 }}</h2>
        <p class="fight-time">Hora: {{ fight.hora }}</p>
        <p class="fight-hook">{{ fight.gancho }}</p>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.fights-page {
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
}

.fights-page h1 {
  margin-bottom: 24px;
}

.fights-list {
  display: grid;
  gap: 16px;
}

.fight-card {
  display: block;
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease;
}

.fight-card:hover {
  transform: translateY(-2px);
}

.fight-card h2 {
  font-size: 20px;
  margin-bottom: 8px;
}

.fight-time {
  color: #555;
  margin-bottom: 8px;
}

.fight-hook {
  color: #222;
  line-height: 1.5;
}
</style>