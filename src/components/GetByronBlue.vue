<template>
  <section id="get-byron-blue">
    <div class="container">
      <div class="row align-items-end">
        <div class="col col-12 col-sm-12 col-md-7 text-md-left text-xs-center button-container">
        <div class="arrow-container">
            <h2 class="white">Get the Byron Wallet app</h2>
            <img class="arrow img-fluid" alt="" src="../assets/spiral-arrow.png" />
        </div>
            <button class="button"><img class="img-fluid" alt="" src="../assets/appstore.png"/></button>
            <button class="button"><img class="img-fluid" alt="" src="../assets/googleplay.png"/></button>
        </div>
        <div class="col col-12 col-sm-12 col-md-3 text-md-left text-xs-center ">
            <img class="phone img-fluid" alt="" src="../assets/phone.png" />
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

    .arrow-container {
      display: flex;
      flex-direction: row;
    }

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
        max-width: 400px;
        color: white;

        padding-bottom: 20px;
        margin: 0;
    }

    .button {
      width: 180px;
      height: 50px;
      border: none;
      background: transparent;
    }
    
    .arrow {
      width: 140px;
      height: 100px;
    }

    .phone {
      height: 225px;
    }

    .button-container {
      padding: 40px 20px;
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

    @media (max-width: 990px) {
      .arrow { 
        display: none;
      }
    }

    @media (max-width: 768px) { 

      .arrow-container {
        justify-content: center;
      }

      h2 {
        text-align: center;
        font-size: 36px;
      }
    }

    @media (max-width: 576px) {

      .button {
        aspect-ration: 180 / 50;
        width: 130px;
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

      .button {
        aspect-ration: 180 / 50;
        width: 120px;
      }
    }
  }
  
</style>
