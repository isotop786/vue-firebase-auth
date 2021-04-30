<template>
  <div>
     <div class="container">
         <div class="columns">
             <div class="column is-half">
                 <h1 class="title has-text-primary">
                     {{user.data.displayName}}
                 </h1>
                 <div class="card p-3">
                   Email:  {{user.data.email}}
                 </div>
             </div>
         </div>
     </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
name:"Dashboard",
computed:{
    ...mapGetters({user:'user'})
}
}
</script>

<style>

</style>