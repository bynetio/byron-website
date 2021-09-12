<template>
  <section id="roadmap" class="container">
    <h1>Product Roadmap</h1>
    <p>Get the Scoop</p>
    <div class="d-flex align-items-baseline justify-content-around">
      <div class="align-self-end"><img alt="" class="white-bckg" src="../assets/cardano-mini.png"><div class="timestamp">Q2 2021</div></div>
      <div class="align-self-end"><img alt="" src="../assets/path.png"></div>
      <div class="align-self-end"><img alt="" class="white-bckg" src="../assets/cardano-mini.png"><div class="timestamp">Q3 2021</div></div>
      <div class="align-self-center "><img alt="" src="../assets/arrow.png"></div>
      <div class="align-self-end"><img alt="" class="white-bckg" src="../assets/cardano-mini.png"><div class="timestamp">Q4 2021</div></div>
    </div>
    <div class="achievements text-left"> 
    <div class="d-flex lign-items-baseline justify-content-between">
      <ul class="">
        <li class=""><img class="tick" alt="" src="../assets/icon_tick.png">Public White Paper</li>
        <li class=""><img class="tick" alt="" src="../assets/icon_tick.png">Education Campaign</li>
        <li class=""><img class="tick" alt="" src="../assets/icon_tick.png">Marketing Campaign</li>
        <li class=""><img class="tick" alt="" src="../assets/icon_tick.png">Tokenomics Finalized</li>
      </ul>
      <ul class="">
        <li class=""><img class="tick" alt="" src="../assets/icon_tick.png">Public White Paper</li>
        <li class=""><img class="tick" alt="" src="../assets/icon_tick.png">Education Campaign</li>
        <li class=""><img class="tick" alt="" src="../assets/icon_tick.png">Marketing Campaign</li>
        <li class=""><img class="tick" alt="" src="../assets/icon_tick.png">Tokenomics Finalized</li>
      </ul>
      <ul class="">
        <li class=""><img class="tick" alt="" src="../assets/icon_tick.png">Public White Paper</li>
        <li class=""><img class="tick" alt="" src="../assets/icon_tick.png">Education Campaign</li>
        <li class=""><img class="tick" alt="" src="../assets/icon_tick.png">Marketing Campaign</li>
        <li class=""><img class="tick" alt="" src="../assets/icon_tick.png">Tokenomics Finalized</li>
      </ul>
    </div>
    </div>
  </section>
</template>


<script>
// @ is an alias to /src

export default {
  name: 'Roadmap',
  components: {
  }
}
</script>

<style lang="scss" scoped>

#roadmap {

  h1 {
    font-size: 46px;
    font-weight: 900;
  }

  .d-flex {
    padding-bottom: 64px;

  .white-bckg {
    background-color: white;
    border-radius: 10px;
    padding: 22px;
    margin-bottom: 27px;
    }
      
      .timestamp {
      background-color: white;
      color: #07D2DF;
      font-weight: bold;
      margin: 16 25px;
      border-radius: 45px;
      box-shadow: 0px 9px 10px 0px rgba(7,210,223,0.1);
      }
  }
  .achievements {

    li {
      list-style: none;
      font-size: 15px;
      color: #6D6F8D;
      padding-bottom:20px;

      .tick {
        margin-right: 16px;
      }
    }
  }
}


</style>