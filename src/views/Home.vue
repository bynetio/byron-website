<template>
  <div id="home">
    <Hero />
    <ByronDexModule />
    <ByronWalletModule />
    <Roadmap />
    <Financing />
    <Team />
    <Community />
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue';
import Roadmap from '@/components/Roadmap.vue';
import Financing from '@/components/Financing.vue';
import Community from '@/components/Community.vue';
import ByronDexModule from '@/components/ByronDexModule.vue';
import ByronWalletModule from '@/components/ByronWalletModule.vue';
import Team from '@/components/Team.vue';

export default {
  name: 'Home',
  components: {
    Hero,
    ByronDexModule,
    ByronWalletModule,
    Roadmap,
    Financing,
    Team,
    Community,
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
