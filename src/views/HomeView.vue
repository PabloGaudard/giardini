<template>
  <div class="home">
      <router-link class="pavimento-1" to="/about"></router-link>
      <router-link class="pavimento-2" to="/about"></router-link>
      <router-link class="pavimento-3" to="/about"></router-link>
      <router-link class="pavimento-4" to="/about"></router-link>
      <router-link class="pavimento-5" to="/about"></router-link>
      <router-link class="pavimento-6" to="/about"></router-link>

      <router-link class="pavimento-rooftop" to="/about"></router-link>
      <router-link class="pavimento-terreo" to="/about"></router-link>
      <router-link class="pavimento-terreo-2" to="/about"></router-link>
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
  > * {
    //outline: 1px solid red;
    position: absolute;
  }
}

.pavimento{
  &-1{
    left: 5%;
    top: 25%;
    width: 20.5%;
    height: 19%;
  }
  &-2{
    left: 29%;
    top: 25%;
    width: 21%;
    height: 19%;
  }
  &-3{
    left: 29%;
    top: 50.5%;
    width: 21%;
    height: 19%;
  }
  &-4{
    left: 4.5%;
    top: 50.5%;
    width: 21%;
    height: 19%;
  }
  &-5{
    left: 4.5%;
    top: 72.5%;
    width: 21%;
    height: 19%;
  }
  &-6{
    left: 29%;
    top: 72.5%;
    width: 21%;
    height: 19%;
  }
  &-rooftop{
    left: 53.5%;
    top: 25%;
    width: 24%;
    height: 21%;
  }
  &-terreo{
    left: 54.5%;
    top: 56%;
    width: 21.5%;
    height: 16%;
  }
  &-terreo-2{
    left: 60.5%;
    top: 72%;
    width: 9%;
    height: 16%;
  }
}

</style>