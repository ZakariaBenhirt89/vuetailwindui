import { createApp } from 'vue'
import App from './App.vue'
import HelloWorld from "@/components/HelloWorld";
import './index.css'
import {createRouter , createWebHistory} from 'vue-router'
//disable eslint
const routes = [{path: '/' , component : App} , {path : '/second' , component: HelloWorld}]
// eslint-disable-next-line no-unused-vars
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

createApp(App).use(router).mount('#app')
