<template>
  <section id="hero">
    <div class="container">
      <div class="row align-items-center">
        <div class="col col-sm-12 col-md-7 text-left">
          <h1>
            Decentralized apps for the Cardano Blockchain
          </h1>
          <p>Byron Network aims to bring the cutting edge solution for traders, hodlers and blockchain lovers. HD Mobile Wallet and a decentralized exchange on Cardano Blockchain is only the first step in the development of the Byron ecosystem. Our goal is to deliver investment tools and a cryptocurrency gateway for multichain investing for any blockchain enthusiast. Great experience with profound UX, thoughtful components and ability to integrate advantageous API is our top priority.</p>
          <a href="https://github.com/byron-network/byron-whitepaper" target="_blank" class="btn btn-outline-primary">Read Whitepaper</a>
        </div>
        <div class="col col-sm-12 col-md-5">
          <div class="img-wrapper">
            <img class="hero-img img-fluid" alt="" src="../assets/Hero.png">
          </div>
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
    .hero-dapps{
      margin-top:  7rem!important;
    }
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

      a.btn {
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
          color: #000;
          font-size: 1rem;
        }
      
    }
  }
  




</style>
