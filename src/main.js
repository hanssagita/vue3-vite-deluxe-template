import { createApp } from 'vue'
import App from './App.vue'
import './assets/scss/main.scss'
import store from './store'
import router from './router'
import generateMock from './api-mock'

if(process.env.NODE_ENV === 'development') {
  generateMock()
}

createApp(App).use(store).use(router).mount('#app')
