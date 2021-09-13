<template>
  <div id="app">
    <div id="nav" class="container d-flex align-items-center">
      <router-link class="main-item home mr-auto p-2" to="/"><span class="home-logo"><img alt="" src="./assets/byron.png"></span>Byron Network</router-link>
      <router-link class="nav-item p-2" to="/solutions">Solutions</router-link>
      <router-link class="nav-item p-2" to="/developers">Developers</router-link>
      <router-link class="nav-item p-2" to="/use-case">Use Case</router-link>
      <router-link class="nav-item p-2" to="/about">About</router-link>
      <router-link class="btn btn-outline-primary p-2" to="/contact">Contact Us</router-link>
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
      color: #6D6F8D;
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
}
</style>
