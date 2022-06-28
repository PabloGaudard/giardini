<template>
  <div class="home">
      <router-link class="pavimento-1" to="/">Home</router-link> |
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {
    // HelloWorld
  }
}
</script>

<style lang="scss">
.home {
  background-image: url(../assets/01LAJES.png);
}

.pavimento-1{
  outline: 1px solid red;

}

</style>