import './bootstrap';
import {createApp} from 'vue'

import App from "./layouts/App.vue";
import '../css/app.css';
import router from './router/router.js';


const app = createApp(App);

app.use(router);
app.mount("#app");