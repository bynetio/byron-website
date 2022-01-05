<template>
  <div id="wallet">
    <HeroMobile/>
    <Market/>
    <GetByron/>
    <GetByronBlue/>
  </div>
</template>

<script>
import HeroMobile from "@/components/HeroMobile.vue";
import GetByron from "@/components/GetByron.vue";
import GetByronBlue from "@/components/GetByronBlue.vue"
import Market from "@/components/Market.vue";

export default {
  name: 'Wallet',
  components: {
    HeroMobile,
    Market,
    GetByron,
    GetByronBlue
  }
}
</script>


<style lang="scss" scoped>

</style>