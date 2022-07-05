<template>
    <div id="apartamento">
        <h1>{{ pavimento }}º PAVIMENTO</h1>

        <div class="centered">
            <div>
                <div style="visibility: hidden;">
                    <h2>AP {{ apartamento }}</h2>
                </div>
                <img :src="require(`@/assets/apartamentos/${source}.png`)" alt="">
                <div>
                    <h2>AP {{ apartamento }}</h2>
                    <p>{{ m2[tipoPavimento][apartamentoIndex - 1] }} M²</p>
                </div>
            </div>
        </div>
        <router-link class="btn-voltar" :to="'/pavimento/' + pavimento"></router-link>
    </div>
</template>

<script>

export default {
    data() {
        return {
            m2: {
                a: [
                    71.15,
                    35.24,
                    34.64,
                    34.64,
                    34.64,
                    34.64,
                    34.64,
                    34.64,
                    34.64,
                    35.96,
                    34.30,
                    29.93,
                    29.93,
                    29.93,
                    29.93,
                    30.30,
                    40.97,
                    30.44,
                    42.84,
                    30.29,
                    30.01,
                    28.06,
                    28.08,
                    27.28,
                    52.46,
                    33.52,
                    38.81,
                    30.10,
                    35.09,
                    34.64,
                    34.64,
                    34.64,
                    34.64,
                    35.17,
                    63.34
                ],
                b: [
                    81.42,
                    35.24,
                    34.64,
                    34.64,
                    34.64,
                    34.64,
                    34.64,
                    34.64,
                    34.64,
                    35.95,
                    34.30,
                    29.93,
                    29.93,
                    29.93,
                    29.93,
                    30.29,
                    40.97,
                    30.44,
                    42.84,
                    30.29,
                    30.01,
                    28.06,
                    28.06,
                    27.28,
                    52.38,
                    33.52,
                    38.81,
                    30.10,
                    35.09,
                    34.64,
                    34.64,
                    34.64,
                    34.64,
                    35.17,
                    58.18
                ]
            }
        }
    },
    name: 'PdfView',
    computed: {
        apartamento() {
            return this.$route.params.numero;
        },
        pavimento() {
            return this.$route.params.numero.charAt(0);
        },
        source() {
            return this.tipoPavimento + '/' + this.apartamentoIndex
        },
        apartamentoIndex() {
            return this.apartamento.substring(1) - 0;
        },
        tipoPavimento() {
            return this.pavimento in ['1', '2', '4', '6'] ? 'a' : 'b';
        },
    },
}
</script>

<style lang="scss" scoped>
#apartamento {

    .centered {
        height: 70%;
        top: 15%;
        width: 100%;
        display: flex;

        >div {
            margin: auto;
            height: 100%;
            display: flex;

            >div {
                align-self: flex-end;
                margin-left: 30px;
            }
        }

        img {
            height: 100%;
        }

        h2{
            margin-bottom: 0;
            font-size: 2.3rem;
        }
        p{
            font-size: 1.6rem;
            margin-top: 0;
            font-weight: 300;
        }

    }

    h1 {
        top: 12%;
        right: 7%;
        font-size: 2.2rem;
    }
}
</style>