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
                            <input v-model="form.name" type="text" class="input" placeholder="e.g John Doe">
                        </div>
                    </div>
                    <div class="field">
                        <label for="" class="label">Email</label>
                        <div class="control">
                            <input v-model="form.email" class="input" type="email" name="" id="" placeholder="e.g john@doe.com">
                        </div>
                    </div>

                    <div class="field">
                        <label for="" class="label">Password</label>
                        <div class="control">
                            <input type="password" class="input" v-model="pass1 ">
                        </div>
                    </div>

                     <div class="field">
                        <label for="" class="label">Confirm Password</label>
                        <div class="control">
                            <input type="password" class="input" v-model="pass2" @keyup="passCheck">
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