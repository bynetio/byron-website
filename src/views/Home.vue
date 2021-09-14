<template>
  <div id="home">
    <Hero/>
    <!-- <Features/>
    <Roadmap/> -->
    <!-- <Tokenomics/> -->
    <Community/>
  </div>
</template>

<script>
import Hero from "@/components/Hero.vue";
import Features from "@/components/Features.vue";
import Roadmap from "@/components/Roadmap.vue";
import Tokenomics from "@/components/Tokenomics.vue";
import Community from "@/components/Community.vue";

export default {
  name: 'Home',
  components: {
    Hero,
    Features,
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