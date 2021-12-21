<template>
  <div id="app">
    <nav id="nav" class="navbar container d-flex flex-wrap ">
      <router-link class="nav-item main-item home float-left" to="/"><span class="home-logo"><img alt="" src="./assets/logo_byron.png"></span></router-link>
      <router-link class="nav-item p-2" to="/solutions"></router-link>
      <router-link class="nav-item p-2" to="/developers"></router-link>
      <router-link class="nav-item p-2" to="/use-case"></router-link>
      <router-link class="nav-item p-2" to="/about"></router-link>
      <a class="btn btn-outline-primary p-2" target="_blank" href="/static/byron-network-lightpaper.pdf">Lightpaper</a>
      <a class="btn btn-outline-primary p-2" target="_blank" href="/static/byron-network-whitepaper.pdf">Whitepapaer</a>
      <a class="btn btn-outline-primary" target="_blank" href="https://discord.gg/Vp3w43Wt">Contact Us (Discord)</a>
    </nav>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";


export default {
  components: {
    Footer,
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
      background: transparent
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
