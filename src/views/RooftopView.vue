<template>
  <div id="rooftop">
    <h1>ROOFTOP</h1>
    <img :src="require(`@/assets/rooftop.png`)" alt="">
    <router-link class="btn-voltar" to="/"></router-link>
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

  h1 {
    right: 4.5%;
    top: 14.5%;
    font-size: 2.3rem;
  }

  img {
    width: 92%;
    top: 25%;
    right: 4%;
  }

}
</style>