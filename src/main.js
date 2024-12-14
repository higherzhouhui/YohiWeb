import './assets/main.css'
import i18n from './locales/i18n';
import router from './router';
import 'animate.css';

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);

app.use(router)
app.use(i18n);
 
app.mount('#app');