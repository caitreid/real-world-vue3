<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <div id="layout">
    <header>
      <div class="wrapper">
        <nav>
          <RouterLink :to="{ name: 'event-list'}">Events</RouterLink> |
          <RouterLink :to="{name: 'about'}">About</RouterLink>
        </nav>
      </div>
    </header>
    <h1>Events For Good</h1>
    <RouterView />
  </div>
</template>

<style scoped>
#layout{
  color: rgb(87, 80, 81);
  text-align: center;
  font-family: Arial;
}
nav {
  padding: 30px;
}
nav a {
  font-weight: bold;
}
nav a:hover {
  color:rgb(112, 188, 255);
}
</style>
