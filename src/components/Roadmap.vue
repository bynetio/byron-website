<template>
  <section id="roadmap">
    <h1>
      Roadmap
    </h1>
    <div class="container">
      <div class="timeline">
        <div
          class="timeline-row done"
          
        >
          <div class="timeline-time">Q1 2022</div>
          <div class="timeline-content">
            <ul class="list-group">
              <li>
                <i class="bi bi-check-circle-fill"></i>
                <p>
                  Bynet Wallet mainnet launch
                </p>
              </li>
              <li>
                <i class="bi bi-check-circle-fill"></i>
                <p>Whitepaper release</p>
              </li>
              <li>
                <i class="bi bi-check-circle-fill"></i>
                <p>
                  Market research
                </p>
              </li>
              <li>
                <i class="bi bi-check-circle-fill"></i>
                <p>
                  DEX infrastructure design
                </p>
              </li>
              <li>
                <i class="bi bi-check-circle-fill"></i>
                <p>DEX marketing strategy</p>
              </li>
              <li>
                <i class="bi bi-check-circle-fill"></i>
                <p>Bynet Protocol concept consultation with Cardano’s creators</p>
              </li>
            </ul>
          </div>
        </div>
        <div
          class="timeline-row done current"
        >
          <div class="timeline-time">Q2 2022</div>
          <div class="timeline-content">
            <ul class="list-group">
              <li>
                <i class="bi bi-check-circle-fill"></i>
                <p>
                   <a href="https://bynet.io/">Bynet Protocol website launch</a>
                </p>
              </li>
              <li>
                <i class="bi bi-circle"></i>
                <p>
                   BynetDEX MVP
                   <span class="in-progress">in progress</span>
                </p>
              </li>
              <li>
                <i class="bi bi-circle"></i>
                <p>Demo and testing DEX model on a focus group</p>
              </li>
              <li>
                <i class="bi bi-circle"></i>
                <p>
                  BynetDEX testnet launch
                </p>
              </li>
              <li>
                <i class="bi bi-circle"></i>
                <p>
                  Prime Liquidity analysis and architecture
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div
          class="timeline-row"
        >
          <div class="timeline-time">Q3 2022</div>
          <div class="timeline-content">
            <ul class="list-group">
              <li>
                <i class="bi bi-circle"></i>
                <p>BynetDEX mainnet launch</p>
              </li>
              <li>
                <i class="bi bi-circle"></i>
                <p>Advanced trading on BynetDEX</p>
                <!--<span class="in-progress">in progress</span>//-->
              </li>
              <li>
                <i class="bi bi-circle"></i>
                <p>Matching Engineanalysis and architecture</p>
              </li>
              <li>
                <i class="bi bi-circle"></i>
                <p>Functional features improvement</p>
              </li>
              <li>
                <i class="bi bi-circle"></i>
                <p>Access to mobile app infrastructure</p>
              </li>
              <li>
                <i class="bi bi-circle"></i>
                <p>GUI design + GUI implementation</p>
              </li>
              <li>
                <i class="bi bi-circle"></i>
                <p>Bynet protocol development</p>
              </li>
            </ul>
          </div>
        </div>
        <div
          class="timeline-row"
        >
          <div class="timeline-time">Q4 2022</div>
          <div class="timeline-content">
            <ul class="list-group">
              <li>
                <i class="bi bi-circle"></i>
                <p>Bynet Protocol launch to the public </p>
              </li>
              <li>
                <i class="bi bi-circle"></i>
                <p>High-level documentation - tutorial on buildings DApps utilizing Bynet Protocol</p>
              </li>
              <li>
                <i class="bi bi-circle"></i>
                <p>Analytics Tool for Protocol's Participants</p>
              </li>
              <li>
                <i class="bi bi-circle"></i>
                <p>Opening infrastructure for integrations</p>
              </li>
            </ul>
          </div>
        </div>
        <div
          class="timeline-row"
        >
          <div class="timeline-time">Q1 2023</div>
          <div class="timeline-content">
            <h4>To be announced...</h4>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Roadmap',
};
</script>

<style lang="scss" scoped>
#roadmap {
  padding: 40px 15px 0 15px;

  h1 {
    font-size: 46px;
    word-break: break-word;
  }

  .timeline {
    position: relative;
    padding: 4rem 2rem;
    margin: 0 auto 1rem auto;

    &:before {
      content: '';
      position: absolute;
      width: 2px;
      top: 0%;
      left: 50%;
      height: 100%;
      display: block;
      background: linear-gradient(
        0,
        rgba(#000, 0%) 0%,
        rgba(#abc9fe, 100%) 10% 90%,
        rgba(#000, 0%) 100%
      );
    }

    .timeline-row {
      padding-left: 50%;
      position: relative;
      margin-bottom: 30px;

      &:first-child::before {
        content: '';
        position: absolute;
        width: 2px;
        left: 50%;
        top: calc(0% - 60px);
        height: calc(50% + 60px);
        display: block;
        background: linear-gradient(
          0,
          rgba(#007bff, 100%) 66%,
          rgba(#000, 0%) 100%
        );
      }

      .timeline-time {
        position: absolute;
        right: 50%;
        top: calc(50% - 10px);
        text-align: right;
        margin-right: 40px;
        font-size: 1.5rem;
      }

      .timeline-content {
        position: relative;
        padding: 20px 30px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        box-shadow: 0px 5px 32px 0px #d4d8e0;
        border-radius: 30px;

        &:after {
          content: '';
          position: absolute;
          top: 50%;
          right: -49px;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          z-index: 10;
          background: #fff;
          border: 2px solid #abc9fe;
        }

        h4 {
          font-size: 1.2rem;
          color: #007bff;
          padding: 2rem;
        }

        ul {
          width: 100%;
          list-style: none;
          margin-left: 0;
          padding-left: 0;

          li {
            position: relative;
            text-align: left;
            font-size: 1.2rem;
            line-height: 1.2rem;
            display: flex;
            align-items: center;
            margin-bottom: 1rem;

            i {
              position: absolute;
              color: #007bff;
            }

            p {
              margin: 0 0 0 2rem;
              font-size: 0.8rem;
              font-weight: bold;
            }

            .in-progress {
              content: '';
              color: #007bff;
              position: absolute;
              font-size: 0.7rem;
              bottom: -1rem;
              left: 2rem;
            }
          }
          &::before {
            content: '';
            position: absolute;
            background-image: url('../assets/cardano-hero-bckg.png');
            background-repeat: no-repeat;
            background-size: contain;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            transform: rotate(180deg);
          }
        }
      }
      &.done:not(:first-child)::before {
        content: '';
        position: absolute;
        width: 2px;
        bottom: 50%;
        left: 50%;
        height: 125%;
        display: block;
        z-index: 8;
        background: linear-gradient(
          0,
          rgba(#007bff, 100%) 66%,
          rgba(#000, 0%) 100%
        );
      }

      &.done {
        .timeline-time {
          color: #007bff;
        }

        .timeline-content::after {
          background: #007bff;
          border: 2px solid #007bff;
        }

        &.current {
          .timeline-time {
            font-weight: bold;
          }

          .timeline-content::before {
            content: '';
            position: absolute;
            top: calc(50% - 12px);
            right: -60px;
            border-radius: 50%;
            height: 40px;
            width: 40px;
            background: rgba(#007bff, 15%);
            z-index: 9;
          }
        }
      }

      &:nth-child(even) .timeline-content {
        margin-left: 40px;
        text-align: left;

        &:before {
          left: -59px;
          right: initial;
        }

        &:after {
          left: -47px;
          right: initial;
        }
      }

      &:nth-child(odd) {
        padding-left: 0;
        padding-right: 50%;

        .timeline-time {
          right: auto;
          left: 50%;
          text-align: left;
          margin-right: 0;
          margin-left: 40px;
        }

        .timeline-content {
          margin-right: 40px;
        }
      }
    }
  }

  @media (max-width: 992px) {
    .timeline {
      padding: 32px 0 32px 44px;

      &:before {
        left: 0;
      }

      .timeline-row:nth-child(odd),
      .timeline-row:nth-child(even) {
        padding: 0;

        &:first-child::before {
          left: calc(0% - 44px);
          top: calc(0% - 32px);
          height: calc(32px + 19px);
          background: linear-gradient(
            0,
            rgba(#007bff, 100%) 10%,
            rgba(#000, 0%) 100%
          );
        }

        .timeline-time {
          position: relative;
          top: 0;
          left: 0;
          margin: 0 0 10px 0;
          text-align: left;
        }

        .timeline-content {
          margin: 0;

          &:after {
            top: -35px;
            left: -51px;
          }
        }

        &.done.current .timeline-content::before {
          top: -47px;
          left: -63px;
        }
      }

      .timeline-row.done + .timeline-row.done::before {
        bottom: calc(100% - 19px);
        left: calc(0% - 44px);
        height: 110%;
        background: #007bff;
      }
    }
  }

  @media (max-width: 576px) {
    .timeline {
      padding-left: 28px;

      .timeline-row:nth-child(odd),
      .timeline-row:nth-child(even) {
        &:first-child::before {
          left: calc(0% - 28px);
        }

        .timeline-content {
          padding: 1rem;
          min-height: 300px;

          &::after {
            left: -35px;
          }
        }

        &.done.current .timeline-content::before {
          left: -47px;
        }
      }

      .timeline-row.done + .timeline-row.done::before {
        left: calc(0% - 28px);
        height: calc(100% + 26px);
      }
    }
  }

  @media (max-width: 358px) {
    .timeline {
      .timeline-row:nth-child(odd),
      .timeline-row:nth-child(even) {
        .timeline-content {
          min-height: 425px;
        }
      }

      .timeline-row.done + .timeline-row.done::before {
        height: calc(100% + 26px);
      }
    }
  }

  @media (max-width: 270px) {
    .timeline {
      padding: 0;

      &::before {
        display: none;
      }

      .timeline-row:nth-child(odd),
      .timeline-row:nth-child(even) {
        .timeline-content {
          min-height: 425px;

          &::before,
          &::after {
            display: none;
          }
        }

        &::before {
          display: none;
        }
      }

      .timeline-row.done + .timeline-row.done::before {
        display: none;
      }
    }
  }

}
</style>
