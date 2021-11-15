<template>
<dashboard-nav/>
<dashboard-body v-if="state.authenticated"/>
<div v-else class="forbidden"><h1>403 - Forbidden</h1></div>
<global-footer/>
</template>

<script>
import axios from 'axios'
import DashboardNav from '@/components/shared/DashboardNav.vue'
import DashboardBody from './DashboardBody.vue'
import GlobalFooter from '@/components/shared/GlobalFooter.vue'
import { onBeforeMount, reactive } from '@vue/runtime-core'
import { Cookies } from '../../../utils/Cookies'
const instance = axios.create({
  baseURL: 'http://localhost:3000'
})
export default {
  components: { DashboardBody, DashboardNav, GlobalFooter },
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
.forbidden {
  height: 80vh;
}
</style>
