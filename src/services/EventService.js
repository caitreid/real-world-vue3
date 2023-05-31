import axios from 'axios'

// single reusable axios call
const apiClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/Code-Pop/Real-World-Vue-3-New-Syntax/',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getEvents() {
        return apiClient.get('/events')
    },
    getEvent(id) {
        return apiClient.get('/events/' + id)
    },
}