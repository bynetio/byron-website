<template>
  <div id="home">
    <Hero/>
    <Roadmap/>
    <Tokenomics/>
    <Community/>
  </div>
</template>

<script>
import Hero from "@/components/Hero.vue";
import Roadmap from "@/components/Roadmap.vue";
import Tokenomics from "@/components/Tokenomics.vue"
import Community from "@/components/Community.vue";

export default {
  name: 'Home',
  components: {
    Hero,
    Roadmap,
    Tokenomics,
    Community
  }
}
</script>


<style lang="scss" scoped>
.home {

}

</style>