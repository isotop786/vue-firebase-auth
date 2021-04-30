<template>
  <div>

      <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="#">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <router-link to="/" class="navbar-item">
        Home
      </router-link>

      <router-link to="/about" class="navbar-item">
        About 
      </router-link>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
       
        <div class="buttons">
          <template v-if="user.loggedIn ==true">
            <router-link to="/dashboard" class="button is-link">
            <strong>Dashboard </strong>
          </router-link>
        
          <button class="button is-danger" @click.prevent="signout">Logout</button>
    </template>
    <template v-else>
          <router-link to="/signup" class="button is-primary">
            <strong>Sign up</strong>
          </router-link>
          <router-link to="/signin" class="button is-light">
            Sign in
          </router-link>
          </template>
        </div>
      </div>
    </div>
  </div>
</nav>


  </div>
</template>

<script>
import store from '../store/'
import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'
import firebase from 'firebase'
export default {
name:"Nav",
computed: {
  ...mapGetters({
    user: 'user'
  })
}
,
methods: {
  ...mapActions({logout:'logout', messageHandler:'messageHandler'}),
  signout(){
  alert('are you sure to log out')

  firebase.auth().signOut()
  .then(()=>{
    
    this.messageHandler('You are logged out')
   
    this.$router.push('/signin')

  })
 }
},
 
created(){
 
}
}


</script>

<style scoped>
    nav{
        margin-bottom: 40px !important;
    }
</style>