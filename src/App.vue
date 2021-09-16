<template>
  <div id="app">
    <div id="nav" class="container d-flex flex-wrap align-items-center">
      <router-link class="nav-item main-item home float-left" to="/"><span class="home-logo"><img alt="" src="./assets/logo_byron.png"></span></router-link>
      <router-link class="nav-item p-2" to="/solutions"></router-link>
      <router-link class="nav-item p-2" to="/developers"></router-link>
      <router-link class="nav-item p-2" to="/use-case"></router-link>
      <router-link class="nav-item p-2" to="/about"></router-link>
      <a class="nav-item btn btn-outline-primary p-2" target="_blank" href="https://discord.gg/Vp3w43Wt">Contact Us (Discord)</a>
    </div>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Footer
  }
}
</script>


<style lang="scss">

#app {
  font-family: Mulish, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #F6F8FC
}

#nav {
  padding: 30px 0;

  .main-item {
    &:hover {
      text-decoration: none;
    }
      .home-logo {
        margin-right: 10px;
      }
    }

  .nav-item {
    color: #6D6F8D;
    font-size: 15px;
    font-weight: 500;
    margin-left: 60px;
    width: 80vw;
    margin: auto;

    &:hover {
      background: linear-gradient(90deg, rgba(172,218,252,1) 35%, rgba(187,209,250,1) 100%);
      text-decoration: none;
      background-repeat: no-repeat;
      background-size: 100% 50%;
      background-position: bottom;
    }

    &.home{
    font-weight: 700;
    }

  }

  .btn {
    padding: 15px 40px !important;
    border-radius: 12px;
    color: #225AFF;
    margin-left: 60px;

    &:hover {
      color: white;
    }
  }

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      font-weight: 700;
    }
  }

      @media (min-width: 768px) { 

        .nav-item {
          width: auto;
        }
    }


}
</style>
