import Vue from 'vue'
import VueRouter from "vue-router";
import product from "./components/product/product.vue"
import resolve from "./components/resolve/resolve.vue"

Vue.use(VueRouter);

const routes = [  
    { path: '/product/:id', component: product },  
    { path: '/resolve/:id', component: resolve }
];  

const router = new VueRouter({ routes: routes });

export default router