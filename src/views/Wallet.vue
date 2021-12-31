<template>
  <div id="wallet">
    <HeroMobile/>
    <Roadmap/>
    <Financing/>
    <Community/>
  </div>
</template>

<script>
import HeroMobile from "@/components/HeroMobile.vue";
import Roadmap from "@/components/Roadmap.vue";
import Financing from "@/components/Financing.vue"
import Community from "@/components/Community.vue";

export default {
  name: 'Wallet',
  components: {
    HeroMobile,
    Roadmap,
    Financing,
    Community
  }
}
</script>


<style lang="scss" scoped>

</style>