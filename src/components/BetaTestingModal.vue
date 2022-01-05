<template>
  <vue-final-modal
    v-slot="{ close }"
    v-bind="$attrs"
    classes="modal-container container"
    content-class="modal-content"
    v-on="$listeners"
    :esc-to-close="true"
  >
    <button class="modal__close" @click="close">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-x-lg"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
        />
        <path
          fill-rule="evenodd"
          d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
        />
      </svg>
    </button>
    <span class="modal__title">Sign in for beta testing</span>
    <div class="modal__content">
      <p>
        We are currently taking admissions from users willing to participate in
        Beta Testing of Byron Wallet.
      </p>
      <p>If you want to take part as well.</p>
      <div class="buttons d-flex justify-content-center">
        <a
          class="btn btn-primary p-2"
          target="_blank"
          href="https://t.co/ULxeF659zm"
          >Please fill in the form</a
        >
      </div>
    </div>
  </vue-final-modal>
</template>

<script>
import { VueFinalModal } from 'vue-final-modal';

export default {
  name: 'BetaTestingModal',
  inheritAttrs: false,
  components: {
    VueFinalModal,
  },
};
</script>

<style scoped>
::v-deep .modal-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
::v-deep .modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 1rem;
  background: #fff;
}
.modal__title {
  margin: 0 2rem 0 0;
  font-size: 1.5rem;
  font-weight: 700;
}
.modal__close {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  border: 0;
  background-color: transparent;
}
.btn {
  padding: 15px 40px !important;
  border-radius: 12px;
  font-weight: 700;
}

@media (max-width: 767px) {
  .modal-content {
    margin: 0;
    padding: 0;
  }
}
</style>
