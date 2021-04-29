<template>
<div class="container">


  <div class="columns is-centered">
      <div class="column is-half">
          <h1 class="title has-text-primary">Sign in</h1>
          <form action="#">
              
              <div class="field">
                        <label class="label" for="">Email</label>
                        <div class="control">
                        <input class="input" type="email" placeholder="e.g user@example.com" >
                        </div>
              </div>

               <div class="field">
                        <label class="label" for="">Password</label>
                        <div class="control">
                        <input class="input" type="password"  >
                        </div>
              </div>
              <div class="feild">
                  <button class="button is-primary">Sign in</button>
              </div>
          </form>
      </div>
  </div>
  </div>
</template>

<script>
export default {
name:"Signin"
}
</script>

<style>

</style>