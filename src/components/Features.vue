<template>
 <div class="features">
   <div class="container">
      <div class="row">
        <div class="col">
          <div class="features-img"><img alt="" src="../assets/Group5.png"></div>
          <div class="features-numbers">$342B</div>
          <div class="features-numbers-desc">Trade Volume</div>
        </div>
        <div class="col">
          <div class="features-img"><img alt="" src="../assets/Vector.png"></div>
          <div class="features-numbers">+2M</div>
          <div class="features-numbers-desc">Active users</div>
        </div>
        <div class="col">
          <div class="features-img"><img alt="" src="../assets/money.png"></div>
          <div class="features-numbers">53,324,233</div>
          <div class="features-numbers-desc">All time trades</div>
        </div>
        <div class="col">
          <div class="features-img"><img alt="" src="../assets/line.png"></div>
          <div class="features-numbers">+200</div>
          <div class="features-numbers-desc">Financial instruments</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Features',
  components: {
  }
}
</script>

<style lang="scss" scoped>
    .features {
      padding-top: 80px;
      padding-bottom: 120px;
      background-image: url("../assets/cardano-features.png");
      background-repeat: no-repeat;
      background-position: 0 0px;

      .features-img {
        min-height: 54px;
      }

      .features-numbers {
        font-size: 30px;
        font-weight: 900;
        margin: 35px 0 25px 0;
      }

       .features-numbers-desc {
        font-size: 14px;
        
      }
  }

</style>
