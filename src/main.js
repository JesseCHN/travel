import Vue from 'vue';
import FastClick from 'fastclick';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import 'normalize.css';
import './assets/border.css';

Vue.config.productionTip = false;
FastClick.attach(document.body);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
