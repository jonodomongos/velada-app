<script setup>
import { useRoute } from 'vue-router'
import { fights } from '../data/fights'

const route = useRoute()
const fightId = Number(route.params.id)

const fight = fights.find(f => f.id === fightId)
</script>

<template>
  <div class="detail-page">
    <div v-if="fight" class="detail-card">
      <h1>Detalle del combate</h1>
      <p><strong>Luchador 1:</strong> {{ fight.fighter1 }}</p>
      <p><strong>Luchador 2:</strong> {{ fight.fighter2 }}</p>
      <p><strong>Hora:</strong> {{ fight.hora }}</p>
      <p><strong>Peso pactado:</strong> {{ fight.peso }}</p>
      <p><strong>Lugar:</strong> {{ fight.lugar }}</p>
      <p><strong>Descripción:</strong> {{ fight.descripcion }}</p>
      <p><strong>Ganador:</strong> {{ fight.ganador ?? 'Pendiente' }}</p>

      <router-link to="/fights" class="back-link">← Volver a combates</router-link>
    </div>

    <div v-else class="detail-card">
      <h1>Combate no encontrado</h1>
      <router-link to="/fights" class="back-link">← Volver a combates</router-link>
    </div>
  </div>
</template>

<style scoped>
.detail-page {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.detail-card {
  background: white;
  padding: 32px;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  width: 100%;
  max-width: 600px;
}

.detail-card h1 {
  margin-bottom: 24px;
}

.detail-card p {
  margin-bottom: 12px;
}

.back-link {
  display: inline-block;
  margin-top: 20px;
  color: black;
  font-weight: bold;
}

.detail-card p strong {
  color: #111;
}

.detail-card p {
  line-height: 1.5;
  color: #333;
}
</style>