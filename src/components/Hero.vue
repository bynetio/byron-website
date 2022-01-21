<template>
  <section
    id="hero"
  >
    <div class="container">
      <div class="row baseline">
        <div class="col-sm-12 col-md-7">
          <h1>
            Decentralized apps for the Cardano Blockchain
          </h1>
          <p>
            Building an ecosystem that combines top-notch blockchain-based
            products. Delivering as a team backed up with blockchain experience
            to guarantee best usability.
          </p>
          <div class="buttons d-flex">
            <a
              class="btn btn-outline-primary"
              target="_blank"
              href="/static/byron-network-lightpaper.pdf"
              >Litepaper</a
            >
            <a
              class="btn btn-outline-primary"
              target="_blank"
              href="/static/byron-network-whitepaper.pdf"
              >Whitepaper</a
            >
          </div>
        </div>
        <div class="col-sm-12 col-md-5 offset-background" />
      </div>
      <div class="row parts">
        <div class="col-sm-4 ">
          <div class="part-item">
            <div class="part-heading">
              <img class="part-icon" src="../assets/swap2.png" />
              <h4>ByronDex</h4>
            </div>
          </div>
        </div>
        <div class="col-sm-4 ">
          <div class="part-item">
            <div class="part-heading">
              <img class="part-icon" src="../assets/wallet2.png" />
              <h4>Byron Wallet</h4>
            </div>
          </div>
        </div>
        <div class="col-sm-4 ">
          <div class="part-item">
            <div class="part-heading">
              <img class="part-icon" src="../assets/coin1.png" />
              <h4>Byron Launchpad Toolset</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
  components: {},
};
</script>

<style lang="scss" scoped>
#hero {
  background-image: url('../assets/cardano-hero-bckg.png');
  background-repeat: no-repeat;
  background-position: 0 75px;
  padding: 0 15px;

  .offset-background::before {
    content: '';
    background-image: url('../assets/IOHK.png');
    background-repeat: no-repeat;
    background-position: top center;
    background-size: contain;
    width: 100%;
    height: 600px;
    display: block;
    position: absolute;
  }

  h1 {
    font-size: 42px;
    text-align: left;
    margin-top: 60px;
    word-break: break-word;
    font-weight:600;
  }

  p {
    margin-top: 22px;
    text-align: left;
    color: #000;
    font-size: 1rem;
  }

  .buttons {
    flex-wrap: wrap;

    .btn {
      padding: 15px 40px !important;
      border-radius: 12px;
      font-weight: 700;

      &:hover {
        color: white;
      }
    }
  }

  .parts {
    margin-top: 80px;
    row-gap: 1rem;

    .part-item {
      width: fit-content;
      margin: auto;

      .part-heading {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 45px;

        .part-icon {
          margin-right: 12px;
        }

        h4 {
          font-weight: bold;
          font-size: 15px;
          line-height: 26px;
          color: #000637;
          margin: 0;
        }
      }

      h5 {
        font-weight: normal;
        font-size: 10px;
        line-height: 26px;
        color: #8789a8;
        text-transform: uppercase;
        letter-spacing: 0.1425em;
        float: left;
        margin: 0;
      }
    }
  }

  @media (max-width: 767px) {
    .offset-background {
      height: 300px;
      &::before {
        width: 95%;
        height: 100%;
      }
    }

    .buttons {
      justify-content: space-around;
      margin-bottom: 10px;
    }
  }

  @media (max-width: 991px) {
    .baseline {
      align-items: baseline;
    }
  }

  @media (min-width: 1200px) {
    h1 {
      font-size: 58px;
      margin-top: 80px;
    }

    .parts {
      & > * {
        &:not(:first-child)::before {
          content: '';
          height: 35px;
          width: 1px;
          background: #e2e3f4;
          left: 0%;
          bottom: 5px;
          position: absolute;
        }
      }
    }
  }

  @media (min-width: 768px) {
    .buttons {
      & > *:nth-child(2) {
        margin-left: 12px;
      }
    }

    .parts {
      & > * {
        &:not(:nth-child(odd))::before {
          content: '';
          height: 35px;
          width: 1px;
          background: #e2e3f4;
          left: 0%;
          bottom: 5px;
          position: absolute;
        }
      }
    }
  }
}
</style>
