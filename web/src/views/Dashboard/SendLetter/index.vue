<template>
  <dashboard-nav/>
  <send-letter-body/>
  <global-footer/>
</template>

<script>
import GlobalFooter from '@/components/shared/GlobalFooter.vue'
import DashboardNav from '@/components/shared/DashboardNav.vue'
import SendLetterBody from './SendLetterBody.vue'
export default {
  components: { GlobalFooter, DashboardNav, SendLetterBody }

}
</script>

<style>

</style>
