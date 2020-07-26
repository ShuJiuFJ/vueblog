import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import mavonEditor from 'mavon-editor'
import './axios.js'
import VueTyper from 'vue-typer'
import 'mavon-editor/dist/css/index.css'
import VueWordCloud from 'vuewordcloud';

Vue.component(VueWordCloud.name, VueWordCloud);

//导入跨域
import axios from 'axios'
//挂载axios
Vue.prototype.$axios = axios
//设置访问路径
axios.defaults.baseURL = "http://localhost:8081"



Vue.use(VueTyper)
Vue.config.productionTip = false
Vue.use(mavonEditor)

new Vue({
	el: '#app',
	router,
	store,
	render: h => h(App)
}).$mount('#app')
