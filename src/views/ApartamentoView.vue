<template>
    <div id="apartamento">
        <h1>{{pavimento}}º PAVIMENTO</h1>
        <h2>AP {{apartamento}}</h2>


        <img :src="require(`@/assets/apartamentos/${source}.png`)" alt="">
        <router-link class="btn-voltar" :to="'/pavimento/'+pavimento"></router-link>
    </div>
</template>

<script>

export default {
    name: 'PdfView',
    computed: {
        apartamento() {
            return this.$route.params.numero;
        },
        pavimento() {
            return this.$route.params.numero.charAt(0);
        },
        source() {
            return ((this.pavimento in ['1', '2', '4', '6']) ? 'a/' : 'b/') + (this.apartamento.substring(1) - 0)
        }
    },
}
</script>

<style lang="scss" scoped>
#apartamento {

    img {
        width: 40%;
        height: 70%;
        left: 30%;
        top: 15%;
        object-fit: contain;
    }

    h1{
        top: 12%;
        right: 7%;
        font-size: 2.2rem;
    }

    h2{
        right: 7%;
        top: 19%;
    }
}
</style>