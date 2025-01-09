import { createRouter, createWebHistory } from 'vue-router';
import Main from '../views/Main.vue';
import Detail from '../views/Detail.vue';

const routes = [
    {
        path: '/',
        name: 'Main',
        component: Main
    },
    {
        path: '/moreview',
        name: 'MoreView',
        component: () => import(/* webpackChunkName: "about" */ '../views/MoreView.vue')
    },
    {
        path: '/category',
        name: 'Category',
        component: () => import(/* webpackChunkName: "about" */ '../views/Category.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
    },
    {
        path: '/coupon',
        name: 'Coupon',
        component: () => import(/* webpackChunkName: "about" */ '../views/Coupon.vue')
    },
    {
        path: '/mypage',
        name: 'MyPage',
        component: () => import(/* webpackChunkName: "about" */ '../views/MyPage.vue')
    },
    {
        path: '/detail/:id', // :id를 URL 파라미터로 설정
        name: 'Detail',
        component: Detail
    },
    {
        path: '/cartempty',
        name: 'CartEmpty',
        component: () => import(/* webpackChunkName: "about" */ '../views/CartEmpty.vue')
    },
    {
        path: '/paymentcompleted',
        name: 'PaymentCompleted',
        component: () => import(/* webpackChunkName: "about" */ '../views/PaymentCompleted.vue')
    },
    {
        path: '/cartview',
        name: 'CartView',
        component: () => import(/* webpackChunkName: "about" */ '../views/CartView.vue')
    },
    // {
    //     path: '/storesearch',
    //     name: 'StoreSearch',
    //     component: () => import( '../views/StoreSearch.vue')
    // },
    {
        path: '/oderpage',
        name: 'OderPage',
        component: () => import(/* webpackChunkName: "about" */ '../views/OderPage.vue')
    },
    {
        path: '/signup',
        name: 'SignUp',
        component: () => import(/* webpackChunkName: "about" */ '../views/SignUp.vue')
    },
    {
        path: '/foodnotice/:id',
        name: 'FoodNotice',
        component: () => import(/* webpackChunkName: "about" */ '../views/FoodNotice.vue')
    },
    {
        path: '/logout',
        name: 'Logout',
        component: () => import(/* webpackChunkName: "about" */ '../views/Logout.vue')
    },
    {
        path: '/registeredproductlist',
        name: 'RegisteredProductList',
        component: () => import(/* webpackChunkName: "about" */ '../views/RegisteredProductList.vue')
    },
    {
        path: '/guestproductlist',
        name: 'GuestProductList',
        component: () => import(/* webpackChunkName: "about" */ '../views/GuestProductList.vue')
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;