<template>
  <div id="menu">


    <router-link class="xtay" to="/pdf/xtay"></router-link>
    <router-link class="folder" to="/pdf/folder"></router-link>
    <router-link class="video" to="/video"></router-link>

    <router-link class="galeria-btn" to="/galeria/internas"></router-link>
    <router-link class="dwgs-btn" to="/dwgs"></router-link>


  </div>
</template>

<script>
export default {
  name: 'VerticalMenu'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#menu {
  top: 0;
  right: 0;
  width: 17%;
  height: 100%;
  position: absolute;

  >* {
    position: absolute;
  }

  .galeria-btn {
    left: 18%;
    bottom: 18.2%;
    width: 29%;
    height: 3%;
  }

  .dwgs-btn {
    right: 18%;
    bottom: 18.2%;
    width: 25.5%;
    height: 3%;
  }

  .xtay {
    right: 18%;
    top: 27%;
    width: 64%;
    height: 11%;
  }

  .folder {
    right: 18%;
    top: 44.5%;
    width: 64%;
    height: 11%;
  }

  .video {
    right: 18%;
    top: 62%;
    width: 64%;
    height: 11%;
  }

}
</style>
