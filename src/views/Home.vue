<template>
  <div class="container">
    <div class="columns">
      <div class="column is-full" style="text-align:center">
        <h1 class="title is-1 has-text-primary">Welcome to Login/Registration Application </h1>
        <p class="mt-4 content">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis tempora temporibus nisi perspiciatis, sed rem maiores iusto consequatur quaerat dolorem dolore commodi vero facere voluptatibus quisquam vel excepturi ducimus asperiores.
        </p>
       
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    
  },
  data(){
    return{
      mesg:null
    }
  },

}
</script>
