<template>
  <section id="get-byron">
    <div class="container">
      <div class="row align-items-center">
        <div class="col col-12 col-sm-12 col-md-5 text-md-left text-xs-center">
          <h2 class="no-margin-bottom title">
            Convenient way to receive money
          </h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies feugiat non volutpat, curabitur imperdiet imperdiet habitant. Ante etiam elit ac nibh molestie enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies feugiat non volutpat, curabitur imperdiet imperdiet habitant. Ante etiam elit ac nibh molestie enim.</p>
        </div>
        <div class="col col-12 col-sm-12 col-md-7">
          <img class="img-fluid" alt="" src="../assets/mockup-get-byron-full.png" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'GetByron',
  components: {
  }
}
</script>

<style lang="scss" scoped>

  #get-byron {  

    h2 {
        font-size: 46px;
        font-weight: 800;

        text-align: left;
        margin-top: 50px;

        line-height: 60px;

        color: #000637;
    }

    p {
        font-size: 15px;
        font-weight: 400;
        line-height: 34px;

        color: #6D6F8D;
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
        padding: 0 20px;
      }
    
      h2 {
        font-size: 32px;
      }

      p {
        font-size: 14px;
      }
    }


    @media (max-width: 300px) {
      h1 {
        font-size: 26px;
      }
    }
  }
  
</style>
