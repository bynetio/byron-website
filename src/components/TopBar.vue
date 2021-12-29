<template>
  <nav id="nav" class="navbar container d-flex flex-wrap ">
    <router-link class="nav-item main-item home float-left" to="/"
      ><span class="home-logo"><img alt="" src="../assets/logo_byron.png"/></span
    ></router-link>
    <router-link class="nav-item p-2" to="/solutions"></router-link>
    <router-link class="nav-item p-2" to="/developers"></router-link>
    <router-link class="nav-item p-2" to="/use-case"></router-link>
    <router-link class="nav-item p-2" to="/about"></router-link>
    <a
      class="btn btn-outline-primary p-2"
      target="_blank"
      href="/static/byron-network-lightpaper.pdf"
      >Lightpaper</a
    >
    <a
      class="btn btn-outline-primary p-2"
      target="_blank"
      href="/static/byron-network-whitepaper.pdf"
      >Whitepaper</a
    >
  </nav>
</template>

<script>
export default {
  name: 'TopBar',
  components: {},
};
</script>

<style lang="scss">
#nav {
  padding: 30px 0;

  .main-item {
    &:hover {
      text-decoration: none;
      background: transparent;
    }
    .home-logo {
      margin-right: 10px;
    }
  }

  .nav-item {
    color: #6d6f8d;
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

    &.home {
      font-weight: 700;
    }
  }

  .btn {
    padding: 15px 40px !important;
    border-radius: 12px;
    color: #225aff;
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
