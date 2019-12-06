import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@progress/kendo-ui';
import '@progress/kendo-theme-default/dist/all.css';
import { Barcode, QRCode, BarcodesInstaller } from '@progress/kendo-barcodes-vue-wrapper';

Vue.config.productionTip = false
Vue.use(BarcodesInstaller);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
