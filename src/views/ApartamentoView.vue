<template>
    <div id="apartamento">

        <img :src="require(`@/assets/apartamentos/${source}.png`)" alt="">

        <router-link class="btn-voltar" to="/"></router-link>
    </div>
</template>

<script>

export default {
    name: 'PdfView',
    computed: {
        source() {
            return ((this.$route.params.numero.charAt(0) in ['1', '2', '4', '6']) ? 'a/' : 'b/') + (this.$route.params.numero.substring(1) - 0)
        }
    },
}
</script>

<style lang="scss" scoped>
#apartamento {
    //background-image: url(../assets/01LAJES.png);

    img {
        width: 70%;
        height: 60%;
        //border: 2px solid red;
        left: 15%;
        top: 25%;
        object-fit: contain;
    }
}
</style>