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
}
</style>