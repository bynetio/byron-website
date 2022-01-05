<template>
  <section id="market">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-6 col-lg-5 gray">
          <h1>
            Trade<span>&#8228;</span> Anywhere<span>&#8228;</span>
            Comfortable<span>&#8228;</span>
          </h1>
          <div>
            <div class="item">
              <div class="avatar"><img src="../assets/key.png" /></div>
              <div class="texts">
                <h4>HD Wallet</h4>
                <h5>
                  Improving security by generating a new pair of keys from a
                  master key pair.
                </h5>
              </div>
            </div>
            <div class="item">
              <div class="avatar">
                <img src="../assets/presentatnion.png" />
              </div>
              <div class="texts">
                <h4>Flexible finance</h4>
                <h5>
                  Mobile application allows you to trade comfortably within
                  hand's reach.
                </h5>
              </div>
            </div>
            <div class="item">
              <div class="avatar"><img src="../assets/layers.png" /></div>
              <div class="texts">
                <h4>Necessary functionality</h4>
                <h5>
                  Use Byron Wallet with built in functions that ensure best
                  user-experience.
                </h5>
              </div>
            </div>
            <div class="item">
              <div class="avatar"><img src="../assets/swap.png" /></div>
              <div class="texts">
                <h4>Swap & trade</h4>
                <h5>
                  Integration with ByronDex, decentralized exchange, makes
                  trading seamless and effortless.
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-7 blue">
          <div class="phone"><img src="../assets/market.png" /></div>
          <div class="vectors" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Market',
};
</script>

<style lang="scss" scoped>
#market {
  padding: 0 15px;
  position: relative;

  .gray {
    position: unset;

    & > * {
      position: relative;
      z-index: 10;
    }

    &::before {
      content: '';
      background: radial-gradient(
        96.09% 220.84% at 50% 50%,
        #ffffff 0%,
        #d3dce6 48.96%,
        #dde7f2 100%
      );
      opacity: 0.3;
      width: 50%;
      height: calc(100% - 70px);
      position: absolute;
      top: 70px;
      left: 0;
    }

    h1 {
      font-size: 42px;
      text-align: left;
      font-weight: 800;
      margin: 140px 0 69px;

      span:nth-child(1) {
        color: #ff6b93;
      }

      span:nth-child(2) {
        color: #00deec;
      }

      span:nth-child(3) {
        color: #225aff;
      }
    }

    .item {
      display: flex;
      padding-right: 60px;
      text-align: left;

      & {
        margin-bottom: 67px;
      }

      .avatar {
        background: #ffffff;
        box-shadow: 0px 5px 32px 0px #d4d8e0;
        border-radius: 50%;
        min-width: 60px;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 33px;
      }

      h4 {
        font-weight: bold;
        font-size: 15px;
        line-height: 26px;
      }

      h5 {
        font-weight: normal;
        font-size: 14px;
        line-height: 17px;
      }
    }
  }

  .blue {
    position: unset;

    &::after {
      content: '';
      background-image: url('../assets/dots.png');
      background-repeat: no-repeat;
      background-position: right 53px;
      width: calc(50% + 100px);
      height: calc(100% - 14px);
      position: absolute;
      top: 0;
      right: 0;
      z-index: 4;
      opacity: 0.1;
    }

    .phone {
      img {
        display: none;
      }

      &::after {
        content: '';
        background-image: url('../assets/market.png');
        background-repeat: no-repeat;
        background-position: top center;
        width: calc(100% - 100px);
        background-size: contain;
        position: absolute;
        left: 100px;
        z-index: 4;
      }

      &::before {
        content: '';
        background: linear-gradient(133.6deg, #225aff -17.28%, #06247c 104.73%);
        width: calc(50% + 100px);
        height: calc(100% - 14px);
        position: absolute;
        top: 0;
        right: 0;
        z-index: 1;
      }
    }

    .vectors::after {
      content: '';
      background-image: url('../assets/vector_lines.png');
      background-repeat: no-repeat;
      background-position: top right;
      background-size: contain;
      width: 100%;
      position: absolute;
      left: 0;
      z-index: 3;
    }
  }

  @media (max-width: 768px) {
    .gray {
      &::before {
        width: 100%;
        height: 100%;
        top: 0;
      }

      h1 {
        margin: 69px 0;
        font-size: 2rem;
      }

      .item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        align-content: center;
        row-gap: 1rem;
        padding-right: 0;

        .texts {
          width: 100%;
        }
      }
    }

    .blue .phone {
      img {
        display: block;
        width: 100%;
        z-index: 10;
        position: relative;
      }
      &::after,
      &::before {
        content: none;
      }
    }
  }

  @media (min-width: 768px) {
    .blue .phone::after {
      height: 506px;
      top: 200px;
    }

    .blue .vectors::after {
      height: 276px;
      top: 756px;
    }
  }

  @media (max-width: 992px) {
    .blue .phone::before {
      width: calc(50% + 40px);
    }
  }

  @media (min-width: 992px) {
    .blue .phone::after {
      height: 676px;
      top: -70px;
    }

    .blue .vectors::after {
      height: 360px;
      top: 614px;
    }
  }

  @media (min-width: 1200px) {
    h1 {
      font-size: 46px;
      margin: 140px 0 69px;
    }

    .blue .phone::after {
      background-size: auto;
      height: 756px;
    }

    .blue .vectors::after {
      height: 434px;
      top: 498px;
    }
  }
}
</style>
