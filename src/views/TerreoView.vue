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
  img{
    width: 60%;
    top: 20%;
    right: 20%;
  }
}
</style>