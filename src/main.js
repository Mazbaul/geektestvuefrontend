import "bootstrap/dist/css/bootstrap.min.css"
import { createApp ,h} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'


const app = createApp({
    render: ()=>h(App)
}).use(store)

app.use(router)
app.use(VueAxios, axios)
app.config.globalProperties.axios=axios
app.mount('#app')
import "bootstrap/dist/js/bootstrap.js"
