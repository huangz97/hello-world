import Vue from 'vue'
import App from './App.vue'
import Router from './router'
import './plugins/element.js'

Vue.config.productionTip = false

new Vue({
  Router,
  render: h => h(App),
}).$mount('#app')
