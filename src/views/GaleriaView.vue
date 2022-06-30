<template>
  <div id="galeria">
    <router-link class="btn-voltar" to="/"></router-link>
  </div>
</template>

<script>
export default {
  name: 'GaleriaView',
  components: {
    // HelloWorld
  }
}
</script>

<style lang="scss">
#galeria {
  background-image: url(../assets/galeria.png);
  background-size: contain;
  

  .btn-voltar{
    right: 7%;
    bottom: 5%;
    width: 4.5%;
    height: 3%;
  }
}
</style>