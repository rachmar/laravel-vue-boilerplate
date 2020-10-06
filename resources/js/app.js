import Vue from 'vue';
import App from './App.vue';
import router from './router';
import stores from './stores';
import Api from "./apis";

Vue.prototype.$api = new Api();

const app = new Vue({
    el: "#app",
    render: h => h(App),
    router: router,
    store: stores
});