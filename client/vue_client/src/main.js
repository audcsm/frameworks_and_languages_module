import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import Vuex from 'vuex'

Vue.config.productionTip = false

Vue.use(Vuex)

const token = localStorage.getItem('token')

if (token) {
  axios.defaults.headers.common.authorization = token
}

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
