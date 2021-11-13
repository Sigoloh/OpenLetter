<template>
<div class="HomeStyle">
  <global-nav />
  <div class="AboutContent">
    <about/>
  </div>
   <global-footer />
</div>
</template>

<script>
import GlobalFooter from '@/components/shared/GlobalFooter.vue'
import GlobalNav from '@/components/shared/GlobalNav.vue'
import About from '@/views/Home/About.vue'
export default {
  components: { GlobalFooter, GlobalNav, About }

}
</script>

<style>
.HomeStyle{
    background: #e5e9f0;
}
.AboutContent{
    margin-left: 5vw;
    margin-right: 5vw;
    margin-top: 2vh;
    margin-bottom: 2vh;
}
</style>
