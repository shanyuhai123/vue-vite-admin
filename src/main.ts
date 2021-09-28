import { createApp } from 'vue'
import App from './App'
import useComponents from './core/useComponents'

import './app.less'

const app = createApp(App)

// use
useComponents(app)

app.mount('#app')
