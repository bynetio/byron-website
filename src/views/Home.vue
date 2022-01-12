<template>
  <div id="home">
    <Hero />
    <Features />
    <ByronDexModule />
    <ByronWalletModule />
    <Roadmap />
    <Financing />
    <Team />
    <Community />
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    Hero: () => import('../components/Hero.vue'),
    Features: () => import('../components/Features.vue'),
    ByronDexModule: () => import('../components/ByronDexModule.vue'),
    ByronWalletModule: () => import('../components/ByronWalletModule.vue'),
    Roadmap: () => import('../components/Roadmap.vue'),
    Financing: () => import('../components/Financing.vue'),
    Team: () => import('../components/Team.vue'),
    Community: import('../components/Community.vue'),
  },
};
</script>

<style lang="scss" scoped>
#home {
  background-image: url('../assets/cardano3.png');
  background-repeat: no-repeat;
  background-position: bottom right;
}
</style>
