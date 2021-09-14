<template>
  <section id="community">
    <div class="container">
      <h1>Join our community</h1>
      <p>Follow us on social media</p>
      <div class="row">
        <div class="card sm-col-12 md-col-3" style="width: 18rem;">
          <div class="card-body text-left">
            <img class="icon" alt="" src="../assets/icon-twitter.png">
            <h5 class="card-title mb-4">Twitter</h5>
            <h6 class="card-subtitle mb-5 text-muted">Stay up to date with <a class="follow" href="https://twitter.com/byron_cardano" target="_blank">@ByronNetwork</a> updates on our Twitter </h6>
            <a href="https://twitter.com/byron_cardano" class="card-link" target="_blank">Byron Network on Twitter <img alt="" src="../assets/icon.png"></a>
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

      .card-body {
      margin: 24px 30px;
      .card-subtitle {
        line-height: 1.6;
      }
      .icon {
        margin-bottom: 30px;
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