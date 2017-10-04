import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import product from "./components/product/product.vue"
import resolve from "./components/resolve/resolve.vue"

Vue.use(VueRouter);

const routes = [  
    { path: '/product/:id', component: product },  
    { path: '/resolve/:id', component: resolve }
];  

const router = new VueRouter({ routes: routes });  

const app = new Vue({ 
	router: router,
	render: h => h(App),
	created() {
	  	layui.use(['element'], function () {
	  		const element = layui.element;
	  	});
	}
 }).$mount('#app'); 