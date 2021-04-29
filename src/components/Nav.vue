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
            <router-link to="/dashboard" class="button is-link">
            <strong>Dashboard</strong>
          </router-link>
          <button to="/signup" class="button is-danger">
            <strong>Logout</strong>
          </button>
          <router-link to="/signup" class="button is-primary">
            <strong>Sign up</strong>
          </router-link>
          <router-link to="/signin" class="button is-light">
            Sign in
          </router-link>
        </div>
      </div>
    </div>
  </div>
</nav>


  </div>
</template>

<script>
export default {
name:"Nav"
}
</script>

<style scoped>
    nav{
        margin-bottom: 40px !important;
    }
</style>