<script setup>
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService.js'
import { ref, onMounted } from 'vue'

const events = ref(null)

onMounted(()=> {
  EventService.getEvents()
  .then((response) => {
    // console.log('events:', response.data)
    events.value = response.data
  })
  .catch((error) => {
    console.log(error)
  })
})

</script>


<template>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>