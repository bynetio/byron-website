<template>
  <div id="countdown" class="container">
    <ul>
      <li>
        <div class="circle">
          <span id="days">{{ day }}</span
          >days
        </div>
      </li>
      <li>
        <div class="circle">
          <span id="hours">{{ hour }}</span> Hours
        </div>
      </li>
      <li>
        <div class="circle">
          <span id="minutes">{{ min }}</span
          >Min
        </div>
      </li>
      <li>
        <div class="circle">
          <span id="seconds">{{ sec }}</span
          >Sec
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Countdown',
  props: {
    endDate: {
      type: String,
      default() {
        return new Date();
      },
    },
    negative: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      now: new Date(),
      timer: null,
    };
  },
  computed: {
    day() {
      const d = Math.trunc(
        (new Date(this.endDate) - this.now) / 1000 / 3600 / 24,
      );
      return d > 9 ? d : '0' + d;
    },
    hour() {
      const h =
        Math.trunc((new Date(this.endDate) - this.now) / 1000 / 3600) % 24;
      return h > 9 ? h : '0' + h;
    },
    min() {
      const m =
        Math.trunc((new Date(this.endDate) - this.now) / 1000 / 60) % 60;
      return m > 9 ? m : '0' + m;
    },
    sec() {
      const s = Math.trunc((new Date(this.endDate) - this.now) / 1000) % 60;
      return s > 9 ? s : '0' + s;
    },
  },
  watch: {
    endDate: {
      immediate: true,
      handler(newVal) {
        if (this.timer) {
          clearInterval(this.timer);
        }
        this.timer = setInterval(() => {
          this.now = new Date();
          if (this.negative) return;
          if (this.now > newVal) {
            this.now = newVal;
            this.$emit('endTime');
            clearInterval(this.timer);
          }
        }, 1000);
      },
    },
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
};
</script>

<style lang="scss" scoped>
#countdown {
  li {
    position: relative;
    display: inline-block;
    font-size: 1rem;
    list-style-type: none;
    padding: 1rem;
    text-transform: uppercase;

    .circle {
      background-color: #edf2fe;
      border-radius: 50%;
      width: 100px;
      height: 100px;
      display: flex;
      align-content: center;
      justify-content: center;
      flex-direction: column;
    }

    &:not(:first-child):after {
      position: absolute;
      content: ':';
      font-size: 1.5rem;
      font-weight: bold;
      top: 50%;
      left: 0;
      transform: translate(-50%, -50%);
    }
  }

  li span {
    display: block;
    font-size: 1.5rem;
    font-weight: bold;
  }
}
</style>
