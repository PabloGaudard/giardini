<template>
  <div id="pavimento">
    <router-link class="btn-voltar" to="/"></router-link>
  </div>
</template>

<script>
export default {
  name: 'PavimentoView',
}
</script>

<style lang="scss">
#pavimento {
  background-image: url(../assets/pavimento-1.png);

  .btn-voltar{
    right: 7%;
    bottom: 5%;
    width: 4.5%;
    height: 3%;
  }
}
</style>