// https://github.com/axios/axios#axios-api

// _____________________________________________________________________

import Vue from 'vue'
import App from './App.vue';
import axios from 'axios';

import router from './router';
import store from './store';

// _____________________________________________________________________


// // axios defaults  


// // here we are setting a default url for all request:
axios.defaults.baseURL = 'https://vue-axios-cf540.firebaseio.com';

// We're' not useing the following defaults, 
// We have only used them in the privous chapter:

// // and here we are setting the 1st header for all the request 
// // and the 2nd for all the get requests

// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'; 
// axios.defaults.headers.get['Accepts'] = 'application/json';

// // ____________________________

// // request interceptor:
// const reqInterceptor = axios.interceptors.request.use(config => {
//   console.log('>> interceptors.request (method use)', config.method);
//   return config;
// })

// // response interceptor:
// const resInterceptor = axios.interceptors.response.use(config => {
//   console.log('>> interceptors.request (status return)', config.status);
//   return config;
// })

// // removing interceptors:
// axios.interceptors.request.eject(reqInterceptor);
// axios.interceptors.response.eject(resInterceptor);

// _____________________________________________________________________

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
