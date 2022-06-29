<template>
  <div id="video">
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
#video {
  background-image: url(../assets/video.png);

  .btn-voltar{
    right: 7%;
    bottom: 5%;
    width: 4.5%;
    height: 3%;
  }
}
</style>