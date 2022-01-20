require('./bootstrap');

import { createApp } from 'vue';
import { createStore } from 'vuex';
import { createWebHistory, createRouter } from 'vue-router';

import router from "./Router/index";
import store from "./Store/index";
import App from "./App.vue";
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
const app = createApp({
    router,
    store,
    components: { App }
}).use(store);
app.use(VueSweetalert2);
app.use(router).mount("#app");




