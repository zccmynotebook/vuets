import Vue from 'vue'
import App from './App.vue'
import router from './router'
//let wm=require('@zcc/watermark')
import {waterMark} from '@zcc/watermark'
Vue.config.productionTip = false
 
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
waterMark({content: ['hello','ts','js']})
