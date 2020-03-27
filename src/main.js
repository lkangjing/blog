import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'normalize.css'
import './assets/css/main.css'

import axios from 'axios'
// const axios = require('axios')

Vue.prototype.$http = axios.create({
  baseURL:'http://localhost:3000'
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
