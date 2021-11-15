<template>
    <global-nav/>
    <login-form/>
    <global-footer/>
</template>

<script>
import GlobalFooter from '@/components/shared/GlobalFooter.vue'
import GlobalNav from '@/components/shared/GlobalNav.vue'
import LoginForm from '@/views/Login/LoginForm.vue'

export default {
  components: { GlobalFooter, GlobalNav, LoginForm }
}
</script>

<style>
footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
}
</style>
