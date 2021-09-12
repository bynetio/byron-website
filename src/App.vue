<template>
  <div id="app">
    <div id="nav" class="container text-left">
      <router-link class="nav-item home " to="/"><span class=""><img alt="" src="./assets/byron.png"></span>Byron Network</router-link>
      <!-- <router-link class="nav-item" to="/solutions">Solutions</router-link>
      <router-link class="nav-item" to="/developers">Developers</router-link>
      <router-link class="nav-item" to="/use-case">Use Case</router-link>
      <router-link class="nav-item" to="/about">About</router-link>
      <router-link class="nav-item" to="/contact">Contact Us</router-link> -->
    </div>
    <router-view/>
  </div>
</template>

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

  .nav-item {
    color: #6D6F8D;
    font-size: 15px;
    font-weight: 500;

    &:hover {
      background: linear-gradient(90deg, rgba(172,218,252,1) 35%, rgba(187,209,250,1) 100%);
      text-decoration: none;
    }

    &.home{
    font-weight: 700;
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
