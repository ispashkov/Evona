import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Auth from '../components/Auth/Auth.vue'
import Shops from '../components/Shops/Shops.vue'

export const router = new VueRouter({
    routes: [
        {
            path: '/auth',
            component: Auth
        },
        {
            path: '/',
            component: Shops
        }
    ]
})