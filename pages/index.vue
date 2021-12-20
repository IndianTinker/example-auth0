<template>
  <div>
    
      

      <a v-if="$auth.loggedIn" @click="$auth.logout()">Sign Off</a>
    <a v-else @click="$auth.loginWith('auth0')">Sign In</a>
    </div>
  
</template>

<script>



</script>

<style scoped>
.content {
  max-width: 750px;
  margin: 0 auto;
  text-align: center;
}
</style>
