<template>
  <div id="pdf">
      
      <iframe
      :src="'../assets/pdfs/'+$route.params.id+'.pdf'"
      width="83%" height="100%" style="border:none"></iframe> 

      <router-link class="btn-voltar" to="/"></router-link>

      <vertical-menu></vertical-menu>

  </div>
</template>

<script>
import VerticalMenu from '../components/Menu.vue'

export default {
  name: 'PdfView',
  components: {
    VerticalMenu
  }

}
</script>

<style lang="scss">
#pdf {
  background-image: url(../assets/01LAJES.png);
}
</style>