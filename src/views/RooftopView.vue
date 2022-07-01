<template>
  <div id="rooftop">
    <router-link class="btn-voltar" to="/"></router-link>
    <img :src="require(`@/assets/rooftop.png`)" alt="">
  </div>
</template>

<script>
export default {
  name: 'RooftopView',
  components: {
    // HelloWorld
  }
}
</script>

<style lang="scss">
#rooftop {
  .btn-voltar{
    right: 7%;
    bottom: 5%;
    width: 4.5%;
    height: 3%;
  }

  img{
    width: 92%;
    top: 25%;
    right: 4%;
  }

}
</style>