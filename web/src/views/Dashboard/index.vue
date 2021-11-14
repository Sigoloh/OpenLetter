<template>
<dashboard-nav/>
<dashboard-body/>
<global-footer/>
</template>

<script>
import DashboardNav from '@/components/shared/DashboardNav.vue'
import DashboardBody from './DashboardBody.vue'
import GlobalFooter from '@/components/shared/GlobalFooter.vue'
export default {
  components: { DashboardBody, DashboardNav, GlobalFooter }

}
</script>

<style>

</style>
