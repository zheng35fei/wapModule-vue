// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from '../../router/manage'
import axios from 'axios'
import vueAxios from 'vue-axios'
import store from '../../store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from '../../main/manage/App.vue'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(vueAxios, axios)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
