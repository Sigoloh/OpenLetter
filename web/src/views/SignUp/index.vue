<template>
  <global-nav/>
  <sign-up-form/>
  <global-footer/>
</template>

<script>
import GlobalFooter from '@/components/shared/GlobalFooter.vue'
import GlobalNav from '@/components/shared/GlobalNav.vue'
import SignUpForm from '@/views/SignUp/SignUpForm.vue'
export default {
  components: { GlobalFooter, GlobalNav, SignUpForm }

}
</script>

<style>

</style>
