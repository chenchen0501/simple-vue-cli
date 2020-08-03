import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/utils/directive' // 自定义指令
import '@/styles/init.scss'
import '@/styles/global.scss'
import '@/utils/permission'

Vue.use(ElementUI, {
  size: 'mini'
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
