<template>
  <div class="container">
        <div class="columns is-centered">
            <div class="column is-half">
                <h1 class="title has-text-primary">Sign up</h1>
                <form action="#">
                    <div class="field">
                        <label for="" class="label">Name</label>
                        <div class="control">
                            <input type="text" class="input" placeholder="e.g John Doe">
                        </div>
                    </div>
                    <div class="field">
                        <label for="" class="label">Email</label>
                        <div class="control">
                            <input class="input" type="email" name="" id="" placeholder="e.g john@doe.com">
                        </div>
                    </div>

                    <div class="field">
                        <label for="" class="label">Password</label>
                        <div class="control">
                            <input type="password" class="input">
                        </div>
                    </div>

                     <div class="field">
                        <label for="" class="label">Confirm Password</label>
                        <div class="control">
                            <input type="password" class="input">
                        </div>
                    </div>
                    <div class="control">
                        <button class="button is-primary">Signup</button>
                    </div>
                </form>
            </div>
        </div>
  </div>
</template>

<script>
export default {
name:"Signup"
}
</script>

<style>

</style>