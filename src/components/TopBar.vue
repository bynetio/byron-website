<template>
  <nav id="nav" class="navbar container">
    <router-link class="nav-item main-item home float-left" to="/"
      ><span class="home-logo"
        ><img alt="" height="60px" src="../assets/logo_byron.svg"/></span
    ></router-link>
    <form class="form-inline">
        <a
              class="btn btn-primary form-control mr-sm-2"
              target="_blank"
              @click="$router.push('wallet')"
              >Byron Wallet</a
            >
            <a
              class="btn btn-primary form-control my-2 my-sm-0"
              target="_blank"
              href="https://test.byron.network/"
              >ByronDex preview</a
            >
    </form>
  </nav>
</template>

<script>
export default {
  name: 'TopBar',
};
</script>

<style lang="scss">
#nav {
  padding: 30px 15px 0;

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
    width: 100vw;

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
    color: #ffffff;
    line-height:5px;

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
  @media (max-width: 992px) {
.btn {
display: none;
}
}
}
</style>
