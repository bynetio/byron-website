<template>
  <section id="hero-mobile">
    <div class="container">
      <div class="row align-items-center">
        <div class="col col-12 col-sm-12 col-md-7 text-left">
          <h1>
            Take control of your crypto with Byron wallet
          </h1>
          <div class="spacer-2"/>
          <p class="text-muted no-margin">Official Byron wallet app</p>
          <div class="spacer-0"/>
          <div>
            <button class="button"><img class="img-fluid" alt="" src="../assets/appstore.png"/></button>
            <button class="button"><img class="img-fluid" alt="" src="../assets/googleplay.png"/></button>
          </div>
          <div class="spacer-1"/>
          <div class="tick-container">
            <div class="tick"><img class="tick-img img-fluid" alt="" src="../assets/icon_tick.png"/><div class="tick-text">No hidden fees</div></div>
            <div class="tick"><img class="tick-img img-fluid" alt="" src="../assets/icon_tick.png"/><div class="tick-text">100% security-Leverage multi-sig security</div></div>
          </div>
        </div>
        <div class="col col-12 col-sm-12 col-md-5">
          <div class="img-wrapper bg-img">
            <img class="hero-img img-fluid" alt="" src="../assets/hero-desktop-mobile.png" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HeroMobile',
  components: {
  }
}
</script>

<style lang="scss" scoped>

  #hero-mobile {

    
    .hero-dapps{
      margin-top:  7rem!important;
    }
    background-image: url("../assets/cardano-hero-bckg.png");
    background-repeat: no-repeat;
    background-position: 0 75px;

    h1 {
        font-size: 42px;
        text-align: left;
        margin-top: 50px;
    }

    .button {
      width: 180px;
      height: 50px;
      border: none;
    }

    .bg-img {
      background-image: url("../assets/bg-under-phone.png");
      background-repeat: no-repeat;
      background-size: 500px 500px;
      background-position: -50px 0;

    }

    .hero-img {
      min-width: 100px;
      max-width: 550px;
      max-height: 600px;
    }

    .spacer-0 {
      height: 30px
    }

    .spacer-1 {
      height: 50px
    }

    .spacer-2 {
      height: 15px
    }

    .no-margin { 
      margin: 0;
    }

    .tick-container {
      display: flex;
      justify-content: space-between;
      align-items: center;


      max-width: 500px;

      .tick {
        display: flex;
        justify-content: space-between;
        align-items: center;

        // max-width: 350px;

        padding: 0 5px;

        .tick-text {
          font-size: 12px;
          padding-left: 13px;
        }
      }
    }

    @media (min-width: 1200px) { 

      h1 {
        font-size: 58px;
        text-align: left;
        margin-top: 80px;
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
