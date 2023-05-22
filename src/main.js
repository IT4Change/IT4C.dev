import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import store from './store'

// Vuetify
import vuetify from './plugins/vuetify'

import axios from 'axios'
import VueAxios from 'vue-axios'

import { marked } from 'marked'
import markedVue from 'marked-vue'

const app = createApp(App)
app.use(vuetify)
app.use(router)
app.use(store)
app.use(VueAxios, axios)
app.use(markedVue, marked)
app.mount('#app')
