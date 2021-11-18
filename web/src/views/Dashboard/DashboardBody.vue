<template #default>
  <div class="dashboardMain">
    <h1>Welcome back, {{state.userName}}</h1>
    <hr/>
    <h3>Overview</h3>
    <h5>Subscribers: {{state.subscribers.length}}</h5>
    <h5>Letters sent: to be implemented</h5>
    <h5>Write your subscribe page message!</h5>
</div>
</template>

<script>
import axios from 'axios'
import { Cookies } from '../../../utils/Cookies'
import { onBeforeMount, reactive } from '@vue/runtime-core'
const instance = axios.create({
  baseURL: 'http://localhost:3000'
})
export default {
  setup () {
    const state = reactive({
      userName: '',
      subscribers: [],
      authenticated: false
    })
    async function setAuthenticated () {
      const authorizationCookie = Cookies.get('Authorization')
      const { data } = await instance.get('/users/authenticate', { headers: { Authorization: authorizationCookie } })
      state.authenticated = data.authenticated
    }
    async function getUserData () {
      const authorizationCookie = Cookies.get('Authorization')
      const { data } = await instance.get('/users/get', { headers: { Authorization: authorizationCookie } })
      state.userName = data.name
      state.subscribers = data.subscribers
    }

    onBeforeMount(setAuthenticated())
    onBeforeMount(getUserData())

    return { state }
  }
}

</script>

<style>
body{
  background-color: #e5e9f0;
}
.dashboardMain{
  margin: 2vw 5vw 2vw 5vw;
  height: 80vh;
  background-color:#e5e9f0;
}

.dashboardMain h1{
  text-align: center;
}
</style>
