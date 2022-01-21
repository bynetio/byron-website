<template>
  <div id="wallet">
    <HeroMobile />
    <Market />
    <GetByron />
    <GetByronBlue />
  </div>
</template>

<script>
export default {
  name: 'Wallet',
  components: {
    HeroMobile: () => import('../components/HeroMobile.vue'),
    Market: () => import('../components/Market.vue'),
    GetByron: () => import('../components/GetByron.vue'),
    //GetByronBlue: () => import('../components/GetByronBlue.vue'),
  },
};
</script>
