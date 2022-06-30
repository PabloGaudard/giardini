<template>
  <div class="home">

      <router-link v-for="i in 6" v-bind:key="i" :to="'/pavimento/'+i" v-bind:class="'pavimento-'+i"></router-link>

      <router-link class="pavimento-rooftop" to="/rooftop"></router-link>
      <router-link class="pavimento-terreo" to="/terreo"></router-link>
      <router-link class="pavimento-terreo-2" to="/about"></router-link>

      <router-link class="xtay" to="/xtay"></router-link>
      <router-link class="folder" to="/about"></router-link>
      <router-link class="video" to="/video"></router-link>
      
      <router-link class="galeria-btn" to="/galeria"></router-link>
      
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {
    // HelloWorld
  }
}
</script>

<style lang="scss">
.home {
  background-image: url(../assets/01LAJES.png);
}

.galeria-btn{
  right: 9%;
  bottom: 18%;
  width: 5%;
  height: 3%;
}

.pavimento{
  &-1{
    left: 5%;
    top: 23%;
    width: 20.5%;
    height: 16.5%;
  }
  &-2{
    left: 29%;
    top: 23%;
    width: 21%;
    height: 16.5%;
  }
  &-3{
    left: 4.5%;
    top: 46.5%;
    width: 21%;
    height: 16%;
  }
  &-4{
    left: 29%;
    top: 46.5%;
    width: 21%;
    height: 16.5%;
  }
  &-5{
    left: 4.5%;
    top: 66.5%;
    width: 21%;
    height: 17%;
  }
  &-6{
    left: 29%;
    top: 66.5%;
    width: 21%;
    height: 17%;
  }
  &-rooftop{
    left: 53.5%;
    top: 23%;
    width: 24%;
    height: 18.5%;
  }
  &-terreo{
    left: 54.5%;
    top: 51%;
    width: 21.5%;
    height: 14%;
  }
  &-terreo-2{
    left: 60.5%;
    top: 65%;
    width: 9%;
    height: 15%;
  }
}

.xtay{
  right: 3%;
  top: 26.5%;
  width: 11%;
  height: 11%;
}

.folder{
  right: 3%;
  top: 44%;
  width: 11%;
  height: 11%;
}

.video{
  right: 3%;
  top: 62%;
  width: 11%;
  height: 11%;
}
</style>