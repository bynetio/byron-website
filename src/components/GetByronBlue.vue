<template>
  <section
    id="get-byron-blue"
    data-aos="fade"
    data-aos-duration="800"
    data-aos-delay="300"
  >
    <div class="container">
      <div class="row align-items-end">
        <div
          class="col col-12 col-sm-12 col-md-7 text-md-left text-xs-center button-container"
        >
          <div class="arrow-container">
            <h2 class="white">Get the Byron Wallet app</h2>
            <img
              class="arrow img-fluid"
              alt=""
              src="../assets/spiral-arrow.png"
            />
          </div>
          <button @click="openBetaTestingModal" class="button">
            <img class="img-fluid" alt="" src="../assets/appstore.png" />
          </button>
          <button @click="openBetaTestingModal" class="button">
            <img class="img-fluid" alt="" src="../assets/googleplay.png" />
          </button>
        </div>
        <div class="col col-12 col-sm-12 col-md-3 text-md-left text-xs-center ">
          <img
            class="phone img-fluid"
            alt=""
            src="../assets/iphone_wallet.png"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { $vfm } from 'vue-final-modal';
import BetaTestingModal from '@/components/BetaTestingModal.vue';

export default {
  name: 'GetByronBlue',
  methods: {
    openBetaTestingModal() {
      $vfm.show({
        component: BetaTestingModal,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
#get-byron-blue {
  background: linear-gradient(133.6deg, #225aff -17.28%, #06247c 104.73%);

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

    color: #6d6f8d;
  }

  .blue {
    width: 100%;
    background: linear-gradient(133.6deg, #225aff -17.28%, #06247c 104.73%);
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
      width: 120px;
    }
  }
}
</style>
