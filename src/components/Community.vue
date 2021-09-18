<template>
  <section id="community">
    <div class="container">
      <h1>Join our community</h1>
      <p>Follow us on social media</p>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">

      <div class="col ">
        <div class="card">
          <div class="card-body text-left">
            <a href="https://twitter.com/byron_cardano" class="card-link" target="_blank"><img class="icon" alt="" src="../assets/icon-twitter.png"></a>
            <a href="https://twitter.com/byron_cardano" class="card-link" target="_blank"><h5 class="card-title mb-4">Twitter</h5></a>
            <h6 class="card-subtitle mb-5 text-muted">Stay up to date with <a class="follow" href="https://twitter.com/byron_cardano" target="_blank">@ByronNetwork</a> updates on our Twitter </h6>
            <a href="https://twitter.com/byron_cardano" class="card-link" target="_blank">Visit our Twitter</a>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card">
          <div class="card-body text-left">
            <a href="https://github.com/byron-network" class="card-link" target="_blank"><img class="icon" alt="" src="../assets/icon-github.png"></a>
            <a href="https://github.com/byron-network" class="card-link" target="_blank"><h5 class="card-title mb-4">GitHub</h5></a>
            <h6 class="card-subtitle mb-5 text-muted">Stay up to date with <a class="follow" href="https://github.com/byron-network" target="_blank">@ByronNetwork</a> updates on our GitHub </h6>
            <a href="https://github.com/byron-network" class="card-link" target="_blank">Visit our GitHub</a>
          </div>
        </div>
      </div>


      <div class="col">
        <div class="card">
          <div class="card-body text-left">
            <a href="https://discord.com/invite/8kWBQPXwAH" class="card-link" target="_blank"><img class="icon" alt="" src="../assets/icon-discord.png"></a>
            <a href="https://discord.com/invite/8kWBQPXwAH" class="card-link" target="_blank"><h5 class="card-title mb-4">Discord</h5></a>
            <h6 class="card-subtitle mb-5 text-muted">Stay up to date with <a class="follow" href="https://discord.com/invite/8kWBQPXwAH" target="_blank">@ByronNetwork</a> updates on our Discord</h6>
            <a href="https://discord.com/invite/8kWBQPXwAH" class="card-link" target="_blank">Visit our Discord</a>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card">
          <div class="card-body text-left">
            <a href="https://www.reddit.com/r/ByronNetwork/" class="card-link" target="_blank"><img class="icon" alt="" src="../assets/icon-reddit.png"></a>
            <a href="https://www.reddit.com/r/ByronNetwork/" class="card-link" target="_blank"><h5 class="card-title mb-4">Reddit</h5></a>
            <h6 class="card-subtitle mb-5 text-muted">Stay up to date with <a class="follow" href="https://www.reddit.com/r/ByronNetwork/" target="_blank">@ByronNetwork</a> updates on our Reddit </h6>
            <a href="https://www.reddit.com/r/ByronNetwork/" class="card-link" target="_blank">Visit our Reddit</a>
          </div>
        </div>
      </div>


      </div>
    </div>
  </section>
</template>
<script>
// @ is an alias to /src

export default {
  name: 'Community',
  components: {
  }
}
</script>

<style lang="scss" scoped>
#community {
    background-image: url("../assets/cardano3.png");
    background-repeat: no-repeat;
    background-position: top right;

     h1 {
      padding-top: 100px;
      font-size: 46px;
      font-weight: 900;
    }
    .card {
      border: none;
      border-radius: 10px;
      margin: 5px;
      z-index: 1;
      width: auto !important;
      box-shadow: 0px 5px 32px 0px #D4D8E0;

      .card-body {
      margin: 24px 30px;
      padding: 0;
      .card-subtitle {
        line-height: 1.6;
      }
      .icon {
        margin-bottom: 30px;
        max-height: 40px;
        }
      }


      .follow {
        color: #4BDEEC;
        font-weight: bold;
      }


      .card-link {
        color: #FF6B93;
        font-size: 15px;
        font-weight: bold;
      }
    }
  }

</style>