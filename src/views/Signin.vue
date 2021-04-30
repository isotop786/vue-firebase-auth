<template>
<div class="container">
   

  <div class="columns is-centered">
      <div class="column is-half">
          <h1 class="title has-text-primary">Sign in</h1>
          <div class="notification is-danger" v-if="error">
              {{error}}
          </div>
          <div class="notification is-primary" v-if="message">
              {{message}}
          </div>
          {{getMsg}}
          <form action="#">
              
              <div class="field">
                        <label class="label" for="">Email</label>
                        <div class="control">
                        <input
                        v-model="form.email"
                         class="input" type="email" placeholder="e.g user@example.com" >
                        </div>
              </div>

               <div class="field">
                        <label class="label" for="">Password</label>
                        <div class="control">
                        <input
                        v-model="form.password"
                         class="input" type="password"  >
                        </div>
              </div>
              <div class="feild">
                  <button @click.prevent="signin" class="button is-primary">Sign in</button>
              </div>
          </form>
      </div>
  </div>
  </div>
</template>

<script>
import firebase from 'firebase';
import {mapGetters} from 'vuex';
import {mapActions} from 'vuex';
export default {
name:"Signin",
data(){
    return{
        form:{
            email:'',
            password:''
        }
        ,
        error: null,
        message:null
    }
},
computed:{
    ...mapGetters({getMsg:'getMsg'})
},
methods:{
    ...mapActions({messageHandler:'messageHandler'}),
    signin(){
        this.error = null
       firebase.auth().signInWithEmailAndPassword(this.form.email, this.form.password)
       .then(data=>{
           console.log(data)
           this.message = "Login Success. Redirecting to dashboard..."
       })
       .then((data)=>{
          console.log(data)
           
       })
       .then(()=>{
           setTimeout(() => {
               this.$router.replace({path:'/dashboard'})
           }, 1000);
           
       })
       .catch(err=>{
           this.error = err.message
           this.messageHandler(err.message)
       })
    }
}
}
</script>

<style>

</style>