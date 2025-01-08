import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import mixins from './mixins';
import BootstrapVue3 from 'bootstrap-vue-3';
import vue3GoogleLogin from 'vue3-google-login';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';

createApp(App)
    .use(store)
    .use(router)
    .mixin(mixins)
    .use(BootstrapVue3)
    .use(vue3GoogleLogin, {
        clientId: '1037313779067-rmslg6hl16baouvn78oodjjosefi7s75.apps.googleusercontent.com'
    })
    .mount('#app');

window.Kakao.init('8e11bcc192e20363d465210f81ef3846');
