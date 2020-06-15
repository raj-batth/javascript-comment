import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import Toasted from 'vue-toasted';

Vue.config.productionTip = false;
axios.defaults.baseURL = 'https://www.googleapis.com/youtube/v3';

Vue.use(Toasted, {
  iconPack: 'custom-class',
  duration: 3000,
  position: 'top-center',
  type: 'error',
  icon: 'fas fa-exclamation-triangle',
  action: {
    text: 'x',
    onClick: (e, toastObject) => {
      toastObject.goAway(0);
    },
  },
});
new Vue({
  render: (h) => h(App),
}).$mount('#app');
