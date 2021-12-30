<template>
  <section id="community">
    <div class="container">
      <h1>Join our community</h1>
      <p>Follow us on social media</p>
      <div class="row row-cols-1 row-cols-md-6 row-gap">
        <div class="col-md-4 col-xl-2">
          <div
            class="card"
            href="https://twitter.com/byron_cardano"
            target="_blank"
          >
            <img class="icon" alt="" src="../assets/icon-twitter.png" />
          </div>
        </div>

        <div class=" col-md-4 col-xl-2">
          <a
            class="card"
            href="https://t.me/byron_network_news"
            target="_blank"
          >
            <img class="icon" alt="" src="../assets/icon-telegram.png" />
          </a>
        </div>

        <div class=" col-md-4 col-xl-2">
          <a
            class="card"
            href="https://github.com/byron-network"
            target="_blank"
          >
            <img class="icon" alt="" src="../assets/icon-github.png" />
          </a>
        </div>

        <div class=" col-md-4 col-xl-2">
          <a
            class="card"
            href="https://discord.com/invite/8kWBQPXwAH"
            target="_blank"
          >
            <img class="icon" alt="" src="../assets/icon-discord.png" />
          </a>
        </div>

        <div class="col-md-4 col-xl-2">
          <a
            class="card"
            href="https://www.reddit.com/r/ByronNetwork/"
            target="_blank"
          >
            <img class="icon" alt="" src="../assets/icon-reddit.png" />
          </a>
        </div>

        <div class="col-md-4 col-xl-2">
          <a
            class="card"
            href="https://medium.com/@byron_network"
            target="_blank"
          >
            <img class="icon" alt="" src="../assets/icon-medium.png" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Community',
};
</script>

<style lang="scss" scoped>
#community {
  .row-gap {
    row-gap: 1rem;
  }

  h1 {
    padding-top: 100px;
    font-size: 46px;
  }

  .card {
    border: none;
    border-radius: 10px;
    min-width: 150px;
    height: 90px;
    z-index: 1;
    box-shadow: 0px 5px 32px 0px #d4d8e0;
    justify-content: center;
    align-items: center;

    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }

    .icon {
      width: 42px;
      height: 42px;
    }

    .follow {
      color: #4bdeec;
      font-weight: bold;
    }
  }
}
</style>
