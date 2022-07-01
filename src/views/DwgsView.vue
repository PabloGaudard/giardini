<template>
  <div id="rooftop">
    <router-link class="btn-voltar" to="/"></router-link>
  </div>
</template>

<script>
export default {
  name: 'DwgsView',
  components: {
    // HelloWorld
  }
}
</script>

<style lang="scss">
#rooftop {
  background-image: url(../assets/dwgs.png);
  background-size: contain;
  

  .btn-voltar{
    right: 7%;
    bottom: 5%;
    width: 4.5%;
    height: 3%;
  }
}
</style>