<script setup>

defineProps({
  event: {
    type: Object,
    required: true
  }
})

</script>

<template>
    <div class="event-card">
        <h2>{{ event.title }}</h2>
        <span>@{{ event.time }} on {{ event.date }}</span>
    </div>
</template>

<style scoped>
.event-card {
    padding: 2rem;
    width: 250px;
    cursor: pointer;
    border: 1px solid black;
    margin-bottom: 2rem;
}
.event-card:hover {
    transform: scale(1.01);
    box-shadow: 0 3px 12px 0 rgba(0,0,0,0.2)
}
</style>
