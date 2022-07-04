<template>
  <div id="terreo">
    <h1>TÉRREO</h1>
    <img :src="require(`@/assets/terreo.png`)" alt="">
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

  h1 {
    right: 4.5%;
    top: 14.5%;
    font-size: 2.3rem;
  }

  img {
    width: 60%;
    top: 20%;
    right: 20%;
  }
}
</style>