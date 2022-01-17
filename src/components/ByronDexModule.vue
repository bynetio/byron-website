<template>
  <section
    id="byron-dex-module"
  >
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-7 order-1">
          <h1>
            DEX
          </h1>
          <p>
            ByronDex is a decentralized exchange on Cardano that uses Order Book
            Pattern. It includes professional trading options, such as limit,
            stop loss, stop market and many other types of orders. With a team
            of experienced developers and crypto traders we are going to deliver
            functionality that the community expects.
          </p>
          <div class="buttons d-flex">
            <a
              class="btn btn-primary p-2"
              target="_blank"
              href="https://discord.gg/8kWBQPXwAH"
              >Join us on Discord</a
            >
            <a
              class="btn btn-primary p-2"
              target="_blank"
              href="https://test.byron.network/"
              >View Front-end Mockup</a
            >
          </div>
        </div>
        <div class="col-sm-12 col-md-5 offset-background order-md-1" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ByronDexModule',
};
</script>

<style lang="scss" scoped>
#byron-dex-module {
  margin-top: 90px;
  padding: 0 15px 80px 15px;
  background-image: url('../assets/cardano-hero-bckg.png');
  background-repeat: no-repeat;

  .offset-background::before {
    content: '';
    background-image: url('../assets/mac_dex.png');
    background-repeat: no-repeat;
    background-position: top center;
    background-size: contain;
    width: 100%;
    height: 280px;
    display: block;
    position: absolute;
  }

  h1 {
    font-size: 42px;
    text-align: left;
    margin-top: 10px;
    word-break: break-word;
  }

  p {
    margin-top: 22px;
    text-align: left;
    color: #000;
    font-size: 1rem;
  }

  .buttons {
    .btn {
      padding: 15px 40px !important;
      border-radius: 12px;
      font-weight: 700;

      &:nth-child(2) {
        margin-left: 12px;
      }

      &:hover {
        color: white;
      }
    }
  }

  @media (max-width: 767px) {
    .offset-background {
      height: 300px;
      &::before {
        width: 95%;
        height: 100%;
      }
    }

    .buttons {
      justify-content: space-around;
      margin-bottom: 10px;
    }
  }

  @media (min-width: 1200px) {
    h1 {
      font-size: 58px;
    }
  }
}
</style>
