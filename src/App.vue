<template>
  <div id="app">
    <div id="nav">
      <Login></Login>
      <router-link to = "/home">Login</router-link>
    </div>
  </div>
</template>

<script>
import Login from '../src/components/Login.vue'
export default {
  name:'app',
  components:{
    Login
  }
}
</script>