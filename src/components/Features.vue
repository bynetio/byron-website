<template>
  <div
    id="features"

  >
    <div class="container">
      <div class="row">
        <div class="col-sm-6 col-xl-3">
          <div class="feature-item">
            <div class="feature-icon">
              <img src="../assets/tradevolume.png" />
            </div>
            <h4>Trading options</h4>
            <h5>based on the pro traders experience</h5>
          </div>
        </div>
        <div class="col-sm-6 col-xl-3">
          <div class="feature-item">
            <div class="feature-icon">
              <img src="../assets/union.png" />
            </div>
            <h4>Economic incentives</h4>
            <h5>rewards as a Performer or a Liquidity Provider</h5>
          </div>
        </div>
        <div class="col-sm-6 col-xl-3">
          <div class="feature-item">
            <div class="feature-icon">
              <img src="../assets/money.png" />
            </div>
            <h4>Order Book Pattern</h4>
            <h5>resistant to price manipulation</h5>
          </div>
        </div>
        <div class="col-sm-6 col-xl-3">
          <div class="feature-item">
            <div class="feature-icon">
              <img src="../assets/line.png" />
            </div>
            <h4>Set of DApps</h4>
            <h5>ecosystem of Cardano-focused DApps</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Features',
};
</script>

<style lang="scss" scoped>
#features {
  padding: 0 15px;

  .row {
    margin-top: 90px;
    row-gap: 1.8rem;
  }

  .feature-item {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 20px 10px;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border-radius: 10px;
    z-index: 1;
    box-shadow: 0px 5px 32px 0px #d4d8e0;
    justify-content: center;
    align-items: center;

    .feature-icon {
      height: 52px;
      margin-bottom: 30px;
    }

    h4 {
      font-weight: 800;
      font-size: 26px;
      color: #000637;
      margin-bottom: 20px;
      height: 64px;
    }

    h5 {
      font-weight: normal;
      font-size: 14px;
      color: #6d6f8d;
    }
  }
}
</style>
