import './assets/main.css'
import { createApp } from 'vue';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faEnvelope, faLink, faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

library.add(faEnvelope, faLink, faCircleCheck, faCircleXmark);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
