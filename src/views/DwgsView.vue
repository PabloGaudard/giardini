<template>
  <div id="dwgs">
    <router-link class="btn-voltar" to="/"></router-link>

    <iframe v-if="$route.params.file" src="../dwgs/ATICO COTADO.pdf" width="100%" height="100%"
      style="border:none"></iframe>

    <router-link v-for="i in 10" v-bind:key="i" style="width: 11.2%; height: 16%;"
      :style="{ left: `${8 + ((i <= 5 ? i : i - 5) - 1) * 17.23}%`, top: `${(i <= 5 ? 24.5 : 57)}%` }" :to="'/dwgs/' + i"></router-link>

  </div>
</template>

<script>
export default {
  name: 'DwgsView',
  components: {
    // HelloWorld
  }
}
</script>

<style lang="scss" scoped>
#dwgs {
  background-image: url(../assets/dwgs.png);
  background-size: contain;

}
</style>