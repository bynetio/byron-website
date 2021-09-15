<template>
  <section id="hero">
    <div class="container">
      <div class="row align-items-center">
        <div class="col col-sm-12 col-md-7 text-left">
          <h1>
            Decentralized apps for the Cardano Blockchain
          </h1>
          <p>We are team of passionates, Haskell and Plutus fans, Cardano Community members, DApps builders</p>
          <button class="btn btn-outline-primary">Read More</button>
        </div>
        <div class="col col-sm-12 col-md-5">
          <div class="img-wrapper">
            <img class="hero-img img-fluid" alt="" src="../assets/Hero.png">
          </div>
        </div>
      </div>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 mt-5 text-left">
          <div class="col">
            <div class="wrapper">
              <div class=""><img class="icon mr-3" alt="" src="../assets/swap2.png">Byron Swap</div>
              <p class="">Decentralized exchange app</p>
            </div>
          </div>
           <div class="col">
            <div class="wrapper">
              <div class=""><img class="icon mr-3" alt="" src="../assets/wallet2.png">Byron Wallet</div>
              <p>Mobile wallet for Cardano</p>
            </div>
          </div>
           <div class="col">
            <div class="wrapper">
              <div class=""><img class="icon mr-3" alt="" src="../assets/cardanoshield1.png">Byron Launch</div>
              <p>The dapp to creating tokens</p>
            </div>
          </div>
          <div class="col">
            <div class=""><img class="icon mr-3" alt="" src="../assets/coin1.png">Byron NFTs</div>
            <p>Minting, sending, receiving nfts</p>
          </div>
        </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Hero',
  components: {
  }
}
</script>

<style lang="scss" scoped>

  #hero {
    background-image: url("../assets/cardano-hero-bckg.png");
    background-repeat: no-repeat;
    background-position: 0 250px;

    h1 {
        font-size: 42px;
        font-weight: bold;
        text-align: left;
        margin-top: 150px;
      }

    .hero-img {
      min-width: 80px;
    }

    @media (min-width: 1200px) { 

      h1 {
        font-size: 64px;
        font-weight: bold;
        text-align: left;
        margin-top: 150px;
      }

      p {
        margin-top: 22px;
        text-align: left;

      }

      button {
        margin-top: 67px;
        padding: 16px 32px;
        border-radius: 12px;
        margin-right: 14px;
      }

      .wrapper {
        width: auto;
        width: 80%;
        padding: 0;
        border-right: 1px solid #E2E3F4;
      }
        p {
          font-size: 10px;
          text-transform: uppercase;
        }
      
    }
  }
  




</style>
