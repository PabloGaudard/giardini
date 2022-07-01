<template>
  <div id="pavimento">
    <h1>{{$route.params.id}}º</h1>
    <img :src="require(`@/assets/pavimento-${$route.params.id}.png`)" alt="">
    <router-link class="btn-voltar" to="/"></router-link>
  </div>
</template>

<script>
export default {
  name: 'PavimentoView',
}
</script>

<style lang="scss">
#pavimento {
  background-image: url(../assets/pavimento.png);

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

  h1{
    position: absolute;
    top: 15.6%;
    right: 26%;
    font-size: 2.1rem;
    color: #3d8217;
    font-weight: bolder;
    font-family: monospace;
  }
}
</style>