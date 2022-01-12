<template>
  <div id="app">
    <TopBar />
    <main><router-view /></main>
    <Footer />
    <modals-container></modals-container>
  </div>
</template>

<script>
import TopBar from '@/components/TopBar.vue';
import Footer from '@/components/Footer.vue';
import { ModalsContainer } from 'vue-final-modal';

export default {
  components: {
    TopBar,
    Footer,
    ModalsContainer,
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f6f8fc;
  min-height: 100vh;
  display: flex;
  flex-flow: column;

  main {
    flex-grow: 1;
  }
}
</style>
