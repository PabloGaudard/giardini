<template>
  <div id="xtay">
      asS
      <img src="../assets/logo.png" alt="">
      <iframe src="../assets/xtay.pdf" style="width: 100%;height: 100%;border: none;"></iframe> 

<!-- <embed
    src="../assets/xtay.pdf"
    type="application/pdf"
    frameBorder="0"
    scrolling="auto"
    height="100%"
    width="100%"></embed>
 -->
    <embed src="../assets/xtay.pdf" type="application/pdf">
  </div>
</template>

<script>
export default {
  name: 'XtayView',
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