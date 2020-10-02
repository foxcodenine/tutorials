// https://firebase.google.com/docs/reference/rest/auth
// https://firebase.google.com/docs/reference/rest/auth#section-sign-in-email-password
// https://firebase.google.com/docs/web/setup
// _____________________________________________________________________

import axios from 'axios';

// ________________________________

export const api_01 = 'AIzaSyD__w4xAz_4ycj6LZVa105YQ-IxUqgxJUk';

// ________________________________

export const axiosAuth = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1',
    timeout: 2000,    
    headers: {
        // 'Access-Control-Allow-Origin': '*',        
        // 'Access-Control-Allow-Credentials': true 
    },
    // headers had to be remove from here becase they prodused:
    // The Same Origin Policy disallows  ERROR
    
});

// https://api.allorigins.win/get?url=${encodeURIComponent('https://identitytoolkit.googleapis.com/v1')
// axiosAuth.defaults.headers.common['SOMETHING'] = 'nothing';

// _____________________________________________________________________



/*

Firebase  vue-axios-auth SDK

<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.22.0/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/7.22.0/firebase-analytics.js"></script>

<script>
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyD__w4xAz_4ycj6LZVa105YQ-IxUqgxJUk",
    authDomain: "vue-axios-cf540.firebaseapp.com",
    databaseURL: "https://vue-axios-cf540.firebaseio.com",
    projectId: "vue-axios-cf540",
    storageBucket: "vue-axios-cf540.appspot.com",
    messagingSenderId: "564572820836",
    appId: "1:564572820836:web:15f50148399ef3a66a5671",
    measurementId: "G-34PEBS26H6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>
*/