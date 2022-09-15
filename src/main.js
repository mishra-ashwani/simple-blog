import 'mdb-vue-ui-kit/css/mdb.min.css'
// import "bootstrap/dist/css/bootstrap.css"
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './axios.js';


createApp(App).use(router).mount('#app')

// import "bootstrap/dist/js/bootstrap.js"