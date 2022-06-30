<template>
  <div id="terreo">
    <router-link class="btn-voltar" to="/"></router-link>
  </div>
</template>

<script>
export default {
  name: 'VideoView',
  components: {
    // HelloWorld
  }
}
</script>

<style lang="scss">
#terreo {
  background-image: url(../assets/terreo.png);
  background-size: contain;
  

  .btn-voltar{
    right: 7%;
    bottom: 5%;
    width: 4.5%;
    height: 3%;
  }
}
</style>