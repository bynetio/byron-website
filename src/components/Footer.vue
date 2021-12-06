<template>
  <section id="footer">
    <div class="container">
    <hr>
    <div class="row icons-row">
      <a href="#" class="col-12 col-md-6 main-logo text-left" target="_blank"><img alt="ellipse" src="../assets/logo_byron.png"></a>
      <div class="icons-collection col-12 col-md-6 text-right">
        <a href="https://github.com/byron-network/" class="card-link" target="_blank"><img alt="ellipse" src="../assets/path-github.png"></a>
        <a href="https://discord.gg/Vp3w43Wt" class="card-link" target="_blank"><img alt="ellipse" src="../assets/path-discord.png"></a>
        <a href="https://twitter.com/byron_cardano" class="card-link" target="_blank"><img alt="ellipse" src="../assets/path-twitter.png"></a>
        <a href="https://www.reddit.com/r/ByronNetwork/" class="card-link" target="_blank"><img alt="ellipse" src="../assets/path-reddit.png"></a>
        <a href="https://t.me/byron_network" class="card-link" target="_blank"><img alt="ellipse" src="../assets/path-telegram.png"></a>
      </div>
    </div>
    <dic class="row text-right small">
      Supported with ❤️ <a href="https://binarapps.com" target="_blank">BinarApps</a>
    </dic>
<!--     <div class="row text-left">
      <ul class="col-6 col-md-6 col-lg-3"> 
        <li><a href="#" class="main-category" target="_blank">Platform</a></li>
        <li><a href="#" class="footer-link" target="_blank">Products</a></li>
        <li><a href="#" class="footer-link" target="_blank">Use Cases</a></li>
        <li><a href="#" class="footer-link" target="_blank">FAQ</a></li>
      </ul>
      <ul class="col-6 col-md-6 col-lg-3"> 
        <li><a href="#" class="main-category" target="_blank">For Developers</a></li>
        <li><a href="#" class="footer-link" target="_blank">Introduction</a></li>
        <li><a href="#" class="footer-link" target="_blank">API References</a></li>
        <li><a href="#" class="footer-link" target="_blank">Lorem Ipsum</a></li>
      </ul>
      <ul class="col-6 col-md-6 col-lg-3"> 
        <li><a href="#" class="main-category" target="_blank">About Byron</a></li>
        <li><a href="#" class="footer-link" target="_blank">About us</a></li>
        <li><a href="#" class="footer-link" target="_blank">Career</a></li>
        <li><a href="#" class="footer-link" target="_blank">Lorem Ipsum</a></li>
      </ul>
      <ul class="col-6 col-md-6 col-lg-3"> 
        <li><a href="#" class="main-category" target="_blank">Legal</a></li>
        <li><a href="#" class="footer-link" target="_blank">Terms&Condidtions</a></li>
        <li><a href="#" class="footer-link" target="_blank">Privacy Policy</a></li>
        <li><a href="#" class="footer-link" target="_blank">Lorem Ipsum</a></li>
      </ul>
      <hr>
    </div> -->
    </div>
  </section>
</template>

<script>

export default {
  name: 'Footer',
  components: {
    
  }
}
</script>

<style lang="scss" scoped>
 #footer {
      background-image: url("../assets/Vector4.png");
      background-repeat: no-repeat;
      background-position: top left;
      padding-top: 30px;
      padding-bottom: 30px;

        .icons-row {
          margin-top: 58px;

          .main-logo {
            font-size: 25px;
            font-weight: bold;
            color: black;
            img {
              max-height: 55px;
              margin-right: 10px;
            }
          }
          .icons-collection {
            margin-top: 20px;
            margin-bottom: 20px;
          }
        }

        .main-category {
        font-size: 15px;
        color: #225AFF;
        font-weight: bold;
        }
        ul {
          margin-top: 10px;
        li {
          list-style-type:none;
          font-size: 15px;
          margin-bottom: 10px;
        }
        .footer-link {
          color: black;
        }
      }
  

    @media (min-width: 768px) { 

      .row {
        padding-left: 90px;
      }
      
    }

    @media (min-width: 1200px) { 

      padding-bottom: 100px;

        .icons-row {
          margin-top: 58px;

        .main-logo {
          font-size: 15px;
          font-weight: bold;
          color: black;
          img {
            max-height: 40px;
            margin-right: 10px;
          }
        }
        }

        .main-category {
        font-size: 15px;
        color: #225AFF;
        font-weight: bold;
        }
        ul {
          margin-top: 74px;
          margin-bottom: 50px;
        li {
          list-style-type:none;
          font-size: 15px;
          margin-bottom: 30px;
        }
        .footer-link {
          color: black;
        }
      }
    }
  }

</style>