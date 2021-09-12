<template>
  <section id="tokenomics">
    <div class="container">
    <h1>Tokenomics</h1>
    <p>Chart</p>
     <div class="img-wrapper">
        <img class="hero-img img-fluid" alt="" src="../assets/chart.png">
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Tokenomics',
  components: {
  }
}
</script>

<style lang="scss" scoped>

 #tokenomics {
  background-image: url("../assets/cardano2.png");
  background-repeat: no-repeat;
  background-position: top 50px right 0px;

   h1 {
     font-size: 46px;
     font-weight: 900;
    }
    p {
      margin:30px 0 50px 0;
    }

    .img-wrapper {
      width:60%;
      margin: auto;
    }
  }


</style>