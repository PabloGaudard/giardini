<template>
  <div id="pdf">
      
      <iframe
      :src="$route.params.id == 'xtay'?'https://ucbbf70ce2365561beee082b6e8d.previews.dropboxusercontent.com/p/orig/ABmTsnRKnZupjD2qjKNjvJ4-sz3L8AdQuHPzKEw0LUiw-2SMQbOdxqHQkagprLlZ6J9iaizQCpRBi_4ZMPZA9T9pfCkrGFyH7IatOoLi0XZ2fJeoYJdTtlON5CO7OSSV-zYGmcRXKpenF3oeetvBXuk2nAio4mP_J4EH8lj7U5blDVvk_BEx-sW2PD8j-8VAcaXzl1UEkvXr5eoxPsVTIGGF_6dfl0iOIB5QSFcpTQkfjlqM9wCFw5N4fqFl9HyXHPileejp2p34mg2sHRsPzvaJ4wCaUTya5fNAsaII-9U0BXuQyM_fOHjFQRtqR4X_NcUfgf7WUbnd_SHAehfs3kAq8A7_6ppRl1sRX0SCvkSRZ9CoZdWsOGTCo-Rz6dsBTk51eVzaPBZpij-xK0s2Pte9-iog4nnTSoPYwzBIg9YbTQ/p.pdf':
      'https://ucfa96b993a172394a1abbd9f408.previews.dropboxusercontent.com/p/orig/ABnmUtY6L-F4DYfzCoqqibcz7G1cDzNiSBtSK5bIOG3b8xaHiztrN18pNz1AwgAPCVyeiUs9k7ZcP_Tk-tpW9Daj5UhOHUISeZbRd8DdI-KyqJggfen8zj8NxcdvYSc1Tdgg7dlpfaBQ8-3FCuvowY6d4gQjyrEOGewBlkuMFIEsr_9pCfXCa-shuyXtYy_QS1uvnd9XeG2CKPHvWTOc8U-OF2a4awcDsF1YupgOZnH2eotrVIG1eACq3Qffydwmh92mk_aGqNhruDVml-axARyNgdfjC4NiVOiWpFSNMCDqOu_X37NYibVbHQi6HLoNMIYaii_shDWmInDYZULali4rI2uQ80bQ-VhyHpwYThF56xzSq4uQsz6QZFYBjgGEW36xuDKKgKc7E2D5ZZkh6gD2aDuneGQx9MQNgSA-AJtfELLs_aR9GzLqaQRzimNXqDwxlXEGkF0m9QeLRwgVrUUvM-CtZHG9HnZ0Qz9fsyfIQDK2nEfFP1Mhod9FOhb-_uefzLceh9GYLWPdaYfJCDgCriJU6S_lmsPJbKms0Wk7yAnB7d-nmsB40IOH8ls8epbzUwTNHKpavJpcFXzEYdZ8KfC6qZdOWFiAt2oiBIgUVeSjAwQQyQxJWjy4skAfifd-S-jFLks2iuc4jsEdwWG2I_VyHQE6M_MbHVpMKTwuFywBHtQOAmmYz6pusqcur-U/p.pdf'"
      width="83%" height="100%" style="border:none"></iframe> 

      <router-link class="btn-voltar" to="/"></router-link>

  </div>
</template>

<script>
export default {
  name: 'PdfView',
}
</script>

<style lang="scss">
#pdf {
  background-image: url(../assets/01LAJES.png);
}
</style>