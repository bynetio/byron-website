<template>
  <section id="get-byron-blue">
    <div class="container">
      <div class="row align-items-center">
        <div class="col col-12 col-sm-12 col-md-5 text-md-left text-xs-center">
            <h2 class="white">Get the Byron Wallet app</h2>
        </div>
        <div class="col col-12 col-sm-12 col-md-5 text-md-left text-xs-center">
            <img class="hero-img img-fluid" alt="" src="../assets/spiral-arrow.png" />
        </div>
        <div class="col col-12 col-sm-12 col-md-2 text-md-left text-xs-center">
            <img class="hero-img img-fluid" alt="" src="../assets/phone-with-bg.png" />
        </div>
      </div>
      <div class="row align-items-center">
        <div>
            <button class="button"><img class="img-fluid" alt="" src="../assets/appstore.png"/></button>
            <button class="button"><img class="img-fluid" alt="" src="../assets/googleplay.png"/></button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'GetByronBlue',
  components: {
  }
}
</script>


<style lang="scss" scoped>

  #get-byron-blue {  

    background: linear-gradient(133.6deg, #225AFF -17.28%, #06247C 104.73%);
    
    h2 {
        font-size: 46px;
        font-weight: 800;

        text-align: left;
        margin-top: 50px;


        color: #000637;
    }

    p {
        font-size: 15px;
        font-weight: 400;
        line-height: 34px;

        color: #6D6F8D;
    }

    .blue {
        width: 100%;
        background: linear-gradient(133.6deg, #225AFF -17.28%, #06247C 104.73%);
    }

    .white {
        max-width: 450px;
        color: white;
    }

    .button {
      width: 180px;
      height: 50px;
      border: none;
      background: transparent;
    }
    
    @media (min-width: 1200px) { 

      h2 {
        text-align: left;
        margin-top: 80px;
      }

      p {
        margin-top: 22px;
        text-align: left;
      }
    }

    @media (max-width: 768px) { 
      h2 {
        font-size: 36px;
      }
    }

    @media (max-width: 576px) {
      .title {
        text-align: center;
      }
    
      h2 {
        font-size: 32px;
      }

      p {
        font-size: 14px;
        line-height: 28px;
      }
    }


    @media (max-width: 300px) {
      h2 {
        font-size: 26px;
      }
      p {
        font-size: 12px;
        line-height: auto;
      }
    }
  }
  
</style>
