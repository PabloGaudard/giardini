<template>
  <div id="dwgs">
    <router-link class="btn-voltar" to="/"></router-link>



    <router-link
    v-for="i in 10" v-bind:key="i"
    style="width: 11.2%; height: 16%;"
    :style="{left: `${8 + ((i<=5?i:i-5)-1) * 17.23}%`, top: `${(i<=5?24.5:57)}%`}"
    :to="'/dwg/'+i"></router-link>
    
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