import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import UUID from 'vue-uuid';
import axios from 'axios';
import router from './router'


Vue.use(UUID);
Vue.config.productionTip = false;

Vue.use( axios);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
