<template>
  <div id="terreo">
    <router-link class="btn-voltar" to="/"></router-link>
    <img :src="require(`@/assets/terreo.png`)" alt="">
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
  .btn-voltar{
    right: 7%;
    bottom: 5%;
    width: 4.5%;
    height: 3%;
  }

  img{
    width: 60%;
    top: 20%;
    right: 20%;
  }
}
</style>