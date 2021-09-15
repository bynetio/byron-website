<template>
  <section id="roadmap" class="container">
    <h1>Products Roadmap</h1>
    <div class="container mt-5 mb-5">
      <div class="row">
        <div class="col-md-3">
          <div class="wrapper">
            <p class=""><img class="icon mr-3" alt="" src="../assets/swap2.png">Byron DEX</p>
            <p class="small">Decentralized exchange app</p>
          </div>
          <ul class="timeline">
            <li class="done">
              <p>Create design</p>
              <p class="small">11 Aug, 2021</p>
            </li>
            <li class="done">
              <p>Direct swaps</p>
            </li>
            <li class="done">
              <p>Indirect swaps</p>
            </li>
            <li class="done">
              <p>Slippage</p>
            </li>
            <li class="done">
              <p>Liquidity pools</p>
            </li>
            <li>
              <p>Concurrency solution</p>
            </li>
            <li>
              <p>Design implementation</p>
            </li>
            <li>
              <p>Deployment on testnet</p>
            </li>
            <li>
              <p>Test and audits</p>
            </li>
            <li>
              <p>Deployment on mainnet</p>
            </li>
          </ul>
        </div>
        <div class="col-md-3">
          <div class="wrapper">
            <p class=""><img class="icon mr-3" alt="" src="../assets/wallet2.png">Byron Wallet</p>
            <p class="small">Mobile wallet for Cardano</p>
          </div>
          <ul class="timeline">
            <li>
              <p>Create design</p>
            </li>
            <li>
              <p>Implement design (native movile apps)</p>
            </li>
            <li>
              <p>Tests and audits on testnet</p>
            </li>
            <li>
              <p>Publish apps on stores</p>
            </li>
          </ul>
        </div>
        <div class="col-md-3">
          <div class="wrapper">
            <p class=""><img class="icon mr-3" alt="" src="../assets/cardanoshield1.png">Byron Launchpad</p>
            <p class="small">The dapp to create tokens</p>
          </div>
          <ul class="timeline">
            <li>
              <p>Create design</p>
            </li>
            <li>
              <p>Smart contracts</p>
            </li>
            <li>
              <p>Dashboard frontend implementation</p>
            </li>
            <li>
              <p>Deployment on testnet</p>
            </li>
            <li>
              <p>Tests and audits</p>
            </li>
            <li>
              <p>Deployment on mainnet</p>
            </li>
          </ul>
        </div>
        <div class="col-md-3">
          <div class="wrapper">
            <p class=""><img class="icon mr-3" alt="" src="../assets/coin1.png">Byron NFTs</p>
            <p class="small">Minting, sending, receiving nfts</p>
          </div>
          <ul class="timeline">
            <li>
              <p>Create design</p>
            </li>
            <li>
              <p>Smart contracts</p>
            </li>
            <li>
              <p>Deployment on testnet</p>
            </li>
            <li>
              <p>Tests and audits</p>
            </li>
            <li>
              <p>Deployment on mainnet</p>
            </li>
          </ul>
        </div>
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
  padding-top: 40px;

  h1 {
    font-size: 46px;
    font-weight: 900;
  }

  ul.timeline {
    list-style-type: none;
    position: relative;
    line-height: 1.2;
  }
  ul.timeline:before {
      content: ' ';
      background: #d4d9df;
      display: inline-block;
      position: absolute;
      left: 29px;
      width: 2px;
      height: 100%;
      z-index: 400;
  }
  ul.timeline > li {
      margin: 20px 0;
      padding-left: 20px;
      text-align: left;
      p.small {
        margin-top: -15px;
        color: gray;
      }
  }
  ul.timeline > li:before {
      content: ' ';
      background: white;
      display: inline-block;
      position: absolute;
      border-radius: 50%;
      border: 3px solid #007bff;
      left: 20px;
      width: 20px;
      height: 20px;
      z-index: 400;
  }

  ul.timeline > li.done:before{
    background: #007bff;
  }

  .wrapper {
      width: auto;
      width: 80%;
      padding: 0;
      margin-bottom: 30px;
      .small{
        margin-top: -15px;
      }
    }

    @media (min-width: 768px) { 

         .graph:nth-child(2), .graph:nth-child(4)   {
          display: unset   !important;
      }
    }
}


</style>