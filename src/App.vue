<template>
  <div id="app">
   <Nav/>

         <router-view/>

  <template class="mt-6">
    <Footer/>
  </template>
  </div>
</template>


<script>
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
export default {
  components:{
    Nav,
    Footer
  }
}
</script>
<style >

</style>
