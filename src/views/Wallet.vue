<template>
  <div id="wallet">
    <HeroMobile/>
    <GetByron/>
    <GetByronBlue/>
  </div>
</template>

<script>
import HeroMobile from "@/components/HeroMobile.vue";
import GetByron from "@/components/GetByron.vue";
import GetByronBlue from "@/components/GetByronBlue.vue"

export default {
  name: 'Wallet',
  components: {
    HeroMobile,
    GetByron,
    GetByronBlue
  }
}
</script>


<style lang="scss" scoped>

</style>