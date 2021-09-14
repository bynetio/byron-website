<template>
  <div id="home">
    <Hero/>
    <Community/>
  </div>
</template>

<script>
import Hero from "@/components/Hero.vue";
import Community from "@/components/Community.vue";

export default {
  name: 'Home',
  components: {
    Hero,
    Community
  }
}
</script>


<style lang="scss" scoped>
.home {

}

</style>