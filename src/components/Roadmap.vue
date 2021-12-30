<template>
  <section id="roadmap" class="container">
    <h1>Roadmap</h1>
    <div class="container mt-5 mb-5">
      <div class="row">
        <div class="col-md-6 col-xl-3">
          <br />
          <div class="wrapper">
            <h3>Q3 2021</h3>
          </div>
          <ul class="timeline">
            <li class="done"><p>Market research</p></li>
            <li class="done"><p>Participation in <a href="https://iohk.io/en/blog/posts/2021/05/12/developers-add-muscle-to-plutus-smart-contracts-on-cardano-for-defi/" target="_blank">Plutus Partnership Program</a> as <a href="https://binarapps.com" target="_blank">BinarApps</a></p></li>
            <li class="done"><p>Simulator setup (<a href="https://www.youtube.com/watch?v=iVWOp11PDzU" target="_blank">demo</a> during Cardano Summit)</p></li>
            <li class="done">
              <p>Create <a href="https://www.figma.com/file/tVpIB7vC3UzdzXoGDp44nC/Byron_website_official" target="_blank">web and swap design</a></p>
            </li>
            <li class="done"><p>Recruitment (3 haskell devs)</p></li>
            <li class="done"><p>Social media launch</p></li>
          </ul>
        </div>
        <div class="col-md-6 col-xl-3">
          <br />
          <div class="wrapper">
            <h3>Q4 2021</h3>
          </div>
          <ul class="timeline">
            <li class="done">
              <p>Code optimization and testing</p>
            </li>
            <li class="done">
              <p>Create design of <a href="https://www.figma.com/file/O1K3ASY5FUMLOtqeBh6b2L/Trading-page-Byron-official" target="_blank">DEX trading web</a> and <a href="https://www.figma.com/file/yBRBk0tZK8lN4ihnjtBpJV/Byron_wallet_official" target="_blank">HD mobile wallet</a></p>
            </li>
            
            <li class="done">
              <p>UX audit</p>
            </li>
             <li class="done">
              <p>HD mobile wallet <a href="https://twitter.com/byron_cardano/status/1455627048840536067" target="_blank">UI implementation</a> (React Native)</p>
            </li>
            <li class="done">
              <p><a href="https://byron.network/static/byron-network-lightpaper.pdf" target="_blank">Lightpaper</a> and <a href="https://byron.network/static/byron-network-presentation.pdf" target="_blank">presentation</a></p>
            </li>
            <li class="done">
              <p><a href="https://byron.network/static/byron-network-whitepaper.pdf" target="_blank">Whitepaper</a></p>
            </li>
            <li class="done">
              <p>Mobile wallet demo</p>
            </li>
            <li class="inprogress">
              <p>Mobile wallet on testnet</p>
            </li>
            
          </ul>
        </div>
        <div class="col-md-6 col-xl-3">
          <br />
          <div class="wrapper">
            <h3>Q1 2022</h3>
          </div>
          <ul class="timeline">
            <li>
              <p>Security audits</p>
            </li>
            <li>
              <p>DEX integration with Nami Wallet</p>
            </li>
            <li>
              <p>DEX on testnet</p>
            </li>
            <li>
              <p>Byron token creation</p>
            </li>
            <li>
              <p>Seed sale and private sale</p>
            </li>
            <li>
              <p>IDO</p>
            </li>
            <li>
              <p>Public sale</p>
            </li>
            <li>
              <p>HD mobile wallet public release</p>
            </li>
            <li>
              <p>Byron DEX mainnet release</p>
            </li>
            <li>
              <p>Wallet - DEX integration</p>
            </li>
          </ul>
        </div>
        <div class="col-md-6 col-xl-3">
          <br />
          <div class="wrapper">
            <h3>Q2 2022</h3>
          </div>
          <ul class="timeline">
            <li>
              <p>Partnerships</p>
            </li>
            <li>
              <p>Stop limit and stop loss on DEX</p>
            </li>
            <li>
              <p>Buy with FIAT (mobile wallet)</p>
            </li>
            <li>
              <p>Trading API initialization</p>
            </li>
            <li>
              <p>Performers' bots materials</p>
            </li>
            <li>
              <p>Advanced security measure on Byron Wallet</p>
            </li>
            <li>
              <p>Advanced security measure on Byron Wallet</p>
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
  }

  ul.timeline {
    list-style-type: none;
    position: relative;
    line-height: 1rem;
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
  ul.timeline > li.inprogress:before{
    background: pink;
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