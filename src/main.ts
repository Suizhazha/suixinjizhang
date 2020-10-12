import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import '@/assets/styles/reset.scss';

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');

if (document.body.clientWidth>500){
    window.alert(`推荐使用手机查看，可以扫描二维码或者进入开发者模式`)
    const img = document.createElement('img')
    img.src= '/qrcode.png'
    img.style.position = 'fixed'
    img.style.left = '50%'
    img.style.top = '50%'
    img.style.transform = 'translate(-50%,-50%)'
    img.style.boxShadow = '0 0 10px rgba(0,0,0,0.25)'
    document.body.appendChild(img)
}