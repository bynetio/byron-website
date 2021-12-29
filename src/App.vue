<template>
  <div id="app">
    <TopBar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import TopBar from '@/components/TopBar.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    TopBar,
    Footer
  },
};
</script>

<style lang="scss">
#app {
  font-family: Mulish, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f6f8fc;
}
</style>
