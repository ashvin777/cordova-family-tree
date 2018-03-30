// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App.vue';
import router from './router/index.js';
import 'fastclick';

function startVue() {
  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    render: h => h(App)
  });

  // FastClick.attach(document.body);
  // StatusBar.overlaysWebView(false);
  // StatusBar.backgroundColorByHexString('#3b49f5');

}

// if (window.cordova) {
//   document.addEventListener('deviceready', startVue, false);
// } else {
  startVue();
// }

Vue.config.productionTip = false;
