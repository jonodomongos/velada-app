<template>
  <div class="home">
    <div class="home-card">
      <h1>La Velada VI</h1>
      <p>
      Consulta los combates programados, horarios y detalles principales
      del evento en esta mini aplicación creada con Vue.
      </p>
      <router-link to="/fights" class="button-link">Ver combates</router-link>
    </div>
  </div>
</template>

<style scoped>
.home {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.home-card {
  background: white;
  padding: 32px;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  text-align: center;
  max-width: 500px;
  width: 100%;
}

.home-card h1 {
  margin-bottom: 16px;
}

.home-card p {
  margin-bottom: 24px;
  color: #555;
}

.button-link {
  display: inline-block;
  background: black;
  color: white;
  padding: 12px 20px;
  border-radius: 8px;
}
</style>