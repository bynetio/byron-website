<template>
  <div id="wallet">
    <HeroMobile/>
    <GetByron/>
  </div>
</template>

<script>
import HeroMobile from "@/components/HeroMobile.vue";
import GetByron from "@/components/GetByron.vue";

export default {
  name: 'Wallet',
  components: {
    HeroMobile,
    GetByron,
  }
}
</script>


<style lang="scss" scoped>

</style>