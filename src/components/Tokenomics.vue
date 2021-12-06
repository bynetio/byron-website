import Roadmap from '@/components/Roadmap.vue';
<template>
  <section id="tokenomics">
    <div class="container">
      <h1>Tokenomics</h1>
      <div class="img-wrapper circle">
        <ul class="menu">
          <li>
            <img src="../assets/rocket.png" />
              <div class="center-right">
                <div><big><b>Treasury</b></big></div>
                <div><small>10%</small></div>
              </div>
          </li>
          <li>
            <img src="../assets/atom.png" />
            <div class="bottom-center">
              <div><big><b>Marketing, Ecosystem, Partnerships</b></big></div>
              <div><small>15%</small></div>
            </div>
          </li>
          <li>
            <img src="../assets/lightbulb.png" />
            <div class="center-right">
              <div><big><b>Private sell</b></big></div>
              <div><small>6%</small></div>
            </div>
          </li>
          <li>
            <img src="../assets/investor.png" />
            <div class="center-left">
              <div><big><b>Team & Advisors</b></big></div>
              <div><small>8%</small></div>
            </div>
          </li>
          <li>
            <img src="../assets/public.png" />
            <div class="top-center">
              <div><big><b>Public</b></big></div>
              <div><small>61%</small></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Tokenomics",
  components: {},
};
</script>

<style lang="scss" scoped>
#tokenomics {
  background-image: url("../assets/cardano2.png");
  background-repeat: no-repeat;
  background-position: top 50px right 0px;

  h1 {
    font-size: 46px;
  }
  p {
    margin: 30px 0 50px 0;
  }

  .img-wrapper {
    margin: auto;
  }

  .circle {
    background-image: url("../assets/chart.png");
    background-repeat: no-repeat;
    background-position: top 10px left -10px;
    background-size: 800px;
    width: 780px;
    height: 780px;
    display: flex;
  }

  .menu {
    list-style-type: none;
    padding: 0;
    display: grid; /* use grid */
    margin: auto; /* center the menu with all the items */
  }

  .menu li {
    --d: 270px; /* distance from the center */
    grid-area: 1/1; /* all of them at the same position (they overlap) */
    /* we rotate then translate to the edge then rotate again using the opposite rotation */
    transform: rotate(var(--r)) translateX(var(--d)) rotate(calc(-1 * var(--r)));

    .center-right {
      position: relative;
      top: -50px;
      right: -80px;
    }

    .bottom-center {
      position: relative;
      top: 0px;
      right: 0px;
    }

    .center-left {
      position: relative;
      top: -60px;
      right: 100px;

    }

    .top-center {
      position: relative;
      top: -120px;
      right: 0px;

    }

    img {
      background-color: white;
      padding: 20px;
      border-radius: 10px;
    }
  }

  /* adjust the angle for each icon */
  .menu li:nth-child(1) {
    --r: 0deg;
  }
  .menu li:nth-child(2) {
    --r: 90deg;
  }
  .menu li:nth-child(3) {
    --r: 50deg;
  }
  .menu li:nth-child(4) {
    --r: -180deg;
  }
  .menu li:nth-child(5) {
    --r: -90deg;
  }

  .menu li a {
    display: block;
  }
  .menu li a img {
    width: 50px;
  }
}
</style>
