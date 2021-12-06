<template>
  <div id="home">
    <Hero/>
    <Roadmap/>
    <Financing/>
    <Community/>
  </div>
</template>

<script>
import Hero from "@/components/Hero.vue";
import Roadmap from "@/components/Roadmap.vue";
import Financing from "@/components/Financing.vue"
import Community from "@/components/Community.vue";

export default {
  name: 'Home',
  components: {
    Hero,
    Roadmap,
    Financing,
    Community
  }
}
</script>


<style lang="scss" scoped>
.home {

}

</style>