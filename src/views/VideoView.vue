<template>
  <div id="video">

    <video controls autoplay>
      <source :src="require('@/assets/Giardini_MB_alta.mp4')" type="video/mp4">
      Your browser does not support the video tag.
    </video>

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

<style lang="scss" scoped>
#video {
///  background-image: url(../assets/video.png);

  video{
    top: 20%;
    left: 18%;
    width: 64%;
    height: 65%;
  }

}
</style>