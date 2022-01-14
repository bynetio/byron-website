import Vue from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
  mounted() {
    AOS.init({
      mirror: true,
    });
  },
}).$mount('#app');
