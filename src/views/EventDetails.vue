<script setup>
import { onMounted, ref } from 'vue'
import EventService from '../services/EventService.js'

const props = defineProps({
    id: {
        required: true
    },
})

const event = ref(null)

onMounted(()=>{
    // fetch event by ID
  EventService.getEvent(props.id)
  .then((response) => {
    // console.log('events:', response.data)
    // console.log('id:', id)
    event.value = response.data
  })
  .catch((error) => {
    console.log(error)
  })
})
</script>

<template>
    <div v-if="event">
        <h1>{{ event.title }}</h1>
        <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
        <p>{{ event.description }}</p>
    </div>
</template>