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
                        v-model="$v.form.email.$model"
                         class="input" type="email" placeholder="e.g user@example.com" 
                         
                        :class="{'is-danger' : $v.form.email.$error}"
                         >
                         <template v-if="$v.form.email.$error">
                            <p class="help is-danger" v-if="!$v.form.email.required">
                                Email is required
                            </p>

                            <p class="help is-danger" v-if="!$v.form.password.email">
                                Is not a valid email
                            </p>
                         </template>
                        </div>
              </div>

               <div class="field">
                        <label class="label" for="">Password</label>
                        <div class="control">
                        <input
                        v-model="$v.form.password.$model"
                         class="input" type="password" 
                         :class="{'is-danger':$v.form.password.$error}"
                          >
                          <template v-if="$v.form.password.$error">
                              <p class="help is-danger">Password is required</p>
                          </template>
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
import {required,email} from 'vuelidate/lib/validators';
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

validations:{
    form :{
        email:{
            required,
            email
        },

        password: {
            required
        }
    }
},

computed:{
    ...mapGetters({getMsg:'getMsg'})
},
methods:{
    ...mapActions({messageHandler:'messageHandler'}),
    signin(){
        this.messageHandler(null)
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