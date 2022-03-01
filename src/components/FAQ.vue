<template>
  <section id="accordion">
    <div class="container">
      <h1>
        FAQ
      </h1>
      <div class="accordion">
        <div class="accordion-item">
          <h2 class="accordion-header" id="heaByronNetwork">
            <button
              class="accordion-button"
              type="button"
              data-toggle="collapse"
              data-target="#collByronNetwork"
              aria-expanded="true"
              aria-controls="collByronNetwork"
            >
              1. What is Byron Network?
            </button>
          </h2>
          <div
            id="collByronNetwork"
            class="accordion-collapse collapse show"
            aria-labelledby="heaByronNetwork"
            data-parent=".accordion"
          >
            <div class="accordion-body">
              Byron Network is an ecosystem that combines blockchain-based
              products such as BynetDEX and Bynet Wallet, as well as future
              products such as Byron Launchpad and Byron AppStore. Our team aims
              to guarantee a seamless user-experience with products that the
              community needs. Participants will be able to not only trade, but
              also provide liquidity and become performers while earning
              rewards.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="heaByronDex">
            <button
              class="accordion-button collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#collByronDex"
              aria-expanded="false"
              aria-controls="collByronDex"
            >
              2. Why does ByronDex use the Order Book Pattern?
            </button>
          </h2>
          <div
            id="collByronDex"
            class="accordion-collapse collapse"
            aria-labelledby="heaByronDex"
            data-parent=".accordion"
          >
            <div class="accordion-body">
              The decision about going with Order Book Pattern was backed by
              various scenarios. As ByronDex plans to introduce advanced trading
              options such as limit, stop loss or stop market orders, Order Book
              Pattern was the best choice. In addition, we didn't want to allow
              for a big price manipulation.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="heaByronNetwork2">
            <button
              class="accordion-button collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#collByronNetwork2"
              aria-expanded="false"
              aria-controls="collByronNetwork2"
            >
              3. Why does Byron Network want to become multi-chain?
            </button>
          </h2>
          <div
            id="collByronNetwork2"
            class="accordion-collapse collapse"
            aria-labelledby="heaByronNetwork2"
            data-parent=".accordion"
          >
            <div class="accordion-body">
              As active members of the crypto community we see a bigger picture.
              We are aware that multi-chain is the future with integrating all
              of the traders. Our plans focus on building on Cardano first and
              then moving to another UTxO-based blockchain, such as Dash.org.
              With upcoming integrations Byron Community will be able to thrive
              with best multi-chain solutions.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="heaByronNetwork3">
            <button
              class="accordion-button collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#collByronNetwork3"
              aria-expanded="false"
              aria-controls="collByronNetwork3"
            >
              4. Why does Byron Network build Byron Wallet?
            </button>
          </h2>
          <div
            id="collByronNetwork3"
            class="accordion-collapse collapse"
            aria-labelledby="heaByronNetwork3"
            data-parent=".accordion"
          >
            <div class="accordion-body">
              Our team decided to build an HD Wallet to fill the gap on the
              market with a native Cardano mobile app and to complete the Byron
              ecosystem. That way we can guarantee our user best-quality
              products within the whole trading process.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="heaByronNetwork4">
            <button
              class="accordion-button collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#collByronNetwork4"
              aria-expanded="false"
              aria-controls="collByronNetwork4"
            >
              5. Is Byron Network planning to be open-source?
            </button>
          </h2>
          <div
            id="collByronNetwork4"
            class="accordion-collapse collapse"
            aria-labelledby="heaByronNetwork4"
            data-parent=".accordion"
          >
            <div class="accordion-body">
              Yes, we plan to open-source code of our projects for the
              community. We want to contribute that way to the blockchain
              community.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="heaByronNetwork5">
            <button
              class="accordion-button collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#collByronNetwork5"
              aria-expanded="false"
              aria-controls="collByronNetwork5"
            >
              6.Who is behind Byron Network?
            </button>
          </h2>
          <div
            id="collByronNetwork5"
            class="accordion-collapse collapse"
            aria-labelledby="heaByronNetwork5"
            data-parent=".accordion"
          >
            <div class="accordion-body">
              Team comprises specialists working in the blockchain-field for
              many years, as well as crypto traders and ambitious developers.
              With experience gained while working with different blockchains
              during commercial projects we are able to apply this knowledge to
              deliver crypto projects at the top of their game.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FAQ',
};
</script>

<style lang="scss" scoped>
#accordion {
  padding: 0 15px;

  h1 {
    font-size: 42px;
    text-align: left;
    margin-top: 60px;
    word-break: break-word;
  }

  .accordion {
    .accordion-item {
      background-color: #fff;
      border: 1px solid rgba(0, 0, 0, 0.125);

      &:first-of-type {
        border-top-left-radius: 0.25rem;
        border-top-right-radius: 0.25rem;

        &:first-of-type .accordion-button {
          border-top-left-radius: calc(0.25rem - 1px);
          border-top-right-radius: calc(0.25rem - 1px);
        }
      }

      .accordion-header {
        margin-bottom: 0;
      }

      .accordion-button {
        position: relative;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 1rem 1.25rem;
        font-size: 1rem;
        color: #212529;
        text-align: left;
        background-color: #fff;
        border: 0;
        border-radius: 0;
        overflow-anchor: none;
        transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
          border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
          border-radius 0.15s ease;

        &:not(.collapsed) {
          color: #0c63e4;
          background-color: #e7f1ff;
          box-shadow: inset 0 -1px 0 rgb(0 0 0 / 13%);
        }

        &::after {
          flex-shrink: 0;
          width: 1.25rem;
          height: 1.25rem;
          margin-left: auto;
          content: '';
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
          background-repeat: no-repeat;
          background-size: 1.25rem;
          transition: transform 0.2s ease-in-out;
        }

        &:not(.collapsed)::after {
          transform: rotate(-180deg);
        }
      }

      .accordion-body {
        padding: 1rem 1.25rem;
        text-align: left;
      }
    }
  }
}
</style>
