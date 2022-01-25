import { createApp } from 'vue'
import { Quasar } from 'quasar'

import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

import 'virtual:windi.css'
import './scss/main.scss'

import App from './App.vue'
import { router } from './router'

createApp(App)
  .use(Quasar)
  .use(router)
  .mount('#app')
