<template>
  <div id="wallet">
    <HeroMobile/>
    <Market/>
  </div>
</template>

<script>
import HeroMobile from "@/components/HeroMobile.vue";
import Market from "@/components/Market.vue";

export default {
  name: 'Wallet',
  components: {
    HeroMobile,
    Market,
  }
}
</script>


<style lang="scss" scoped>

</style>