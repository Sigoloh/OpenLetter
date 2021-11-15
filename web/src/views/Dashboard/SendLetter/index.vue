<template>
  <dashboard-nav/>
  <send-letter-body v-if="state.authenticated"/>
  <div v-else class="forbiden"><h1>403 - forbiden</h1></div>
  <global-footer/>
</template>

<script>
import axios from 'axios'
import GlobalFooter from '@/components/shared/GlobalFooter.vue'
import DashboardNav from '@/components/shared/DashboardNav.vue'
import SendLetterBody from './SendLetterBody.vue'
import { reactive } from '@vue/reactivity'
import { Cookies } from '../../../../utils/Cookies'
import { onBeforeMount } from '@vue/runtime-core'
const instance = axios.create({
  baseURL: 'http://localhost:3000'
})
export default {
  components: { GlobalFooter, DashboardNav, SendLetterBody },
  setup () {
    const state = reactive({
      authenticated: false
    })
    async function setAuthenticated () {
      const authorizationCookie = Cookies.get('Authorization')
      const { data } = await instance.get('/users/authenticate', { headers: { Authorization: authorizationCookie } })
      state.authenticated = data.authenticated
    }
    onBeforeMount(setAuthenticated())
    return { state }
  }
}
</script>

<style>
.forbiden {
  height: 80vh;
}
</style>
