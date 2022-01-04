<template>
  <section id="hero-mobile">
    <div class="container">
      <div class="row align-items-center">
        <div class="col col-12 col-sm-12 col-md-7 text-md-left text-xs-center">
          <h1 class="no-margin-bottom title">
            Take control of your crypto with Byron wallet
          </h1>
        </div>
        <div class="col col-12 col-sm-12 col-md-5">
          <img class="hero-img img-fluid" alt="" src="../assets/phone-with-bg.png" />
        </div>
        <div class="col col-12 col-sm-12 col-md-7 text-md-left text-xs-center">
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
        <div class="contents">
          <div class="content-block leftmost">
            <div class="content-number">/01</div>
            <div class="spacer-0"/>
            <h2 class="content-title">Manage</h2>
            <div class="content-desc">Lorem ipsum dolor set amet</div>
          </div>
          <div class="content-block">
            <div class="content-number">/02</div>
            <div class="spacer-0"/>
            <h2 class="content-title">Track</h2>
            <div class="content-desc">Lorem ipsum dolor set amet</div>
          </div>
          <div class="content-block">
            <div class="content-number">/03</div>
            <div class="spacer-0"/>
            <h2 class="content-title">Trade</h2>
            <div class="content-desc">Lorem ipsum dolor set amet</div>
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
    padding-bottom: 100px;


    .hero-dapps{
      margin-top:  7rem!important;
    }
    background-image: url("../assets/cardano-hero-bckg.png"), url("../assets/dots.png"), url("../assets/dots.png");
    background-repeat: no-repeat;
    background-position: 0 75px, 0 875px, 100% 800px;

    h1 {
        font-size: 42px;
        text-align: left;
        margin-top: 50px;
    }

    .button {
      width: 180px;
      height: 50px;
      border: none;
      background: transparent;
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

    .no-margin { 
      margin-bottom: 0;
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

        padding: 0 5px;

        .tick-text {
          font-size: 12px;
          padding-left: 13px;
        }
      }
    }

    .contents {
      display: flex;
      justify-content: space-between;

      width: 100%;
      padding: 50px 20px;
      
      .content-block {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        .content-number {
          font-weight: bold;
          font-size: 15px;

          color: #225AFF;
        }

        .content-title {
          font-weight: 800;
          color: #000637;
        }

        .content-desc {
          font-weight: normal;
          font-size: 14px;

          color: #6D6F8D;
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

    @media (max-width: 768px) { 
      .hero-img {
          aspec-ratio: 550 / 600;
          width: 400px;
      }

      h1 {
        font-size: 36px;
      }
    }

    @media (max-width: 576px) {
      .button {
        aspect-ration: 180 / 50;
        width: 130px;
      }
      .hero-img {
        aspec-ratio: 550 / 600;
        width: 300px;
      }

      .title {
        padding: 0 20px;
      }

      .tick-container {
        justify-content: center;
        max-width: 100%;

      .tick {

        .tick-text {
          font-size: 10px;
        }

        .tick-img {
          aspect-ratio: 1 / 1;
          width: 18px;
        }
      }
    }

    .contents {
      display: flex;
      justify-content: center;

      width: 100%;
      padding: 50px 20px;
      
      .content-block {
        display: flex;
        flex-direction: column;
        align-items: center;

        padding: 5px;

        .content-title {
          font-size: 26px;
        }

        .content-number {
          font-size: 13px;
        }

        .content-desc {
          font-size: 12px;
        }
      }
    }

      h1 {
        font-size: 32px;
      }

      p {
        font-size: 14px;
      }
    }


    @media (max-width: 300px) {
      .button {
        aspect-ration: 180 / 50;
        width: 120px;
      }

      .hero-img {
        aspec-ratio: 550 / 600;
        width: 200px;
      }

      h1 {
        font-size: 26px;
      }
    }
  }
  
</style>
