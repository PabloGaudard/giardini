<template>
  <div id="pavimento">
    <h1>{{$route.params.id}}º</h1>

    <img :src="require(`@/assets/pavimento-${$route.params.id}.png`)" alt="">

    <router-link style="left: 11%; top: 36%; width: 6.5%; height: 21.6%;"
    to="/dwgs/1"></router-link>

    <router-link v-for="i in 9" v-bind:key="i" style="width: 4%; height: 18%;"
      :style="{ left: `${17.5 + (i - 1) * 4.2}%`, top: '36%' }" :to="'/dwgs/' + (i+1)"></router-link>

    <router-link v-for="i in 6" v-bind:key="i" style="width: 4.7%; height: 14%;"
      :style="{ left: `${55.6 + (i - 1) * 4.7}%`, top: '36%' }" :to="'/dwgs/' + (i+10)"></router-link>

    <router-link v-for="i in 6" v-bind:key="i" style="width: 4%; height: 18%;"
      :style="{ left: `${17.5 + (i - 1) * 4.2}%`, top: '58%' }" :to="'/dwgs/' + (35-i)"></router-link>

    <router-link v-for="i in 5" v-bind:key="i" style="width: 4.65%;"
      :style="{ left: `${60.5 + (i - 1) * 4.65}%`, top: '53.5%',  height: i < 4?'13%':'14.5%'}" :to="'/dwgs/' + (25-i)"></router-link>

    <router-link v-for="i in 4" v-bind:key="i" style="height: 18%;"
      :style="{ left: `${42.6 + (i - 1) * 4.6}%`, top: '66%', width: i==4?'5.6%': '4.6%' }" :to="'/dwgs/' + (29-i)"></router-link>

    <router-link style="left: 9.5%; top: 57.5%; width: 7.9%; height: 15.5%;"
    to="/dwgs/35"></router-link>

    <router-link style="left: 83.8%; top: 36.5%; width: 7.4%; height: 13.5%;"
    to="/dwgs/17"></router-link>

    <router-link style="left: 83.8%; top: 53.5%; width: 7%; height: 16%;"
    to="/dwgs/19"></router-link>

    <router-link style="left: 85.2%; top: 48%; width: 6%; height: 10.5%;"
    to="/dwgs/18"></router-link>

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

  a{
    outline: 1px solid red;
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
    font-weight: bolder;
    font-family: monospace;
  }
}
</style>