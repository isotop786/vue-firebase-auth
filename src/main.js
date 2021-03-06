import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)

Vue.config.productionTip = false



require('../src/assets/styles/app.scss')

// firebase config 

var firebaseConfig = {
  apiKey: "AIzaSyCihY2s-I9QwYF42Iw-uLwpftZHc9JMQMU",
  authDomain: "vue-auth-324fd.firebaseapp.com",
  projectId: "vue-auth-324fd",
  storageBucket: "vue-auth-324fd.appspot.com",
  messagingSenderId: "865183062597",
  appId: "1:865183062597:web:fcaa5381b4b55a9b68612c",
  measurementId: "G-WG6REZCLV1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


// firebase event after authentication success
firebase.auth().onAuthStateChanged((user)=>{
  store.dispatch('fatchUser',user)


  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
  
})


// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')
