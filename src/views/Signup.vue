<template>
  <div class="container">
        <div class="columns is-centered">
          
            <div class="column is-half">
                
                <h1 class="title has-text-primary">Sign up</h1>

                <div v-if="error" class="notification is-danger">
                    {{error}}
                </div>

                <form action="#">
                    <div class="field">
                        <label for="" class="label">Name</label>
                        <div class="control">
                            <input v-model="$v.form.name.$model" type="text" class="is-primary input" placeholder="e.g John Doe"
                            :class="{'is-danger':$v.form.name.$error}"
                            >
                            <template v-if="$v.form.name.$error">
                                <p class="help is-danger" v-if="$v.form.name.required">Name is requried</p>
                                <p class="help is-danger" v-if="$v.form.name.minLength">Name must be 4 character</p>
                            </template>
                        </div>
                    </div>
                    <div class="field">
                        <label for="" class="label">Email</label>
                        <div class="control">
                            <input v-model="$v.form.email.$model" class="is-primary input" type="email" name="" id="" placeholder="e.g john@doe.com"
                            :class="{'is-danger':$v.form.email.$error}"
                            >
                            <template v-if="$v.form.email.$error">
                                <p class="help is-danger" v-if="$v.form.email.required">Email is required</p>
                                <p class="help is-danger" v-if="$v.form.email.email">Must a valid email</p>
                            
                            </template>
                        </div>
                    </div>

                    <div class="field">
                        <label for="" class="label">Password</label>
                        <div class="control">
                            <input type="password" class="is-primary input" v-model="$v.form.password.$model"
                            :class="{'is-danger':$v.form.password.$error}"
                            >
                            <template v-if="$v.form.password.$error">
                                <p class="help is-danger" v-if="$v.form.password.required">Password is requried</p>
                                <p class="help is-danger" v-if="$v.form.password.minLength">Password must be 6 character</p>
                            </template>
                        </div>
                    </div>

                     <div class="field">
                        <label for="" class="label">Confirm Password</label>
                        <div class="control">
                            <input type="password" class="is-primary input" v-model="pass2" @keyup="passCheck">
                            <div v-if="pass_error">
                                <p class="has-text-danger">{{pass_error}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="control">
                        <button @click.prevent="submit" class="button is-primary">Signup</button>
                    </div>
                </form>
            </div>
        </div>
  </div>
</template>

<script>
import {required,email,minLength} from 'vuelidate/lib/validators'
import firebase from 'firebase'
export default {
name:"Signup",
data(){
    return {
        pass1:'',
        pass2:'',
        form:{
            name:'',
            email:'',
            password:''
            
        },
        pass_error:null,
        error:null
        
    }
},

validations:{
    form:{
        name:{
            required,
            minLength: minLength(4)
        },
        email:{
            required,
            email
        },
        password:{
            required,
            minLength: minLength(6)
        }
    }
},


methods:{
   async passCheck(){
       if(await this.pass1 === this.pass2)
       {
           this.pass_error = null
           this.form.final_password = this.pass1
       }else{
           this.pass_error = 'Passwords did not match'
       }
   },

   submit(){
      firebase.auth().createUserWithEmailAndPassword(this.form.email, this.pass1)
      .then(data=>{
         data.user.updateProfile({
             displayName : this.form.name
         })
      })
      .then(()=>{
          alert("User Registered")
      })
      .catch(err=>{
          this.error = err.message
      })
   }
}

}
</script>

<style>

</style>