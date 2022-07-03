<template>
  <div id="galeria">

    <div class="tabs">
      <router-link to="/galeria/fachadas">Fachadas</router-link>
      <router-link to="/galeria/internas">Internas</router-link>
      <router-link to="/galeria/areas_comuns">Áreas Comuns</router-link>
    </div>

    <div class="slider-container">

      <!-- :pagination="{ clickable: true }"
      :scrollbar="{ draggable: true }"  -->
      <swiper style="height: 100%;" :modules="modules" :slides-per-view="1" :space-between="50" navigation
        @swiper="onSwiper" @slideChange="onSlideChange">
        <template v-if="$route.params.path == 'fachadas'">
          <swiper-slide v-for="i in 4" v-bind:key="i">
            <img :src="require(`@/assets/galeria/fachadas/${i}.jpg`)" alt="">
          </swiper-slide>
        </template>
        <template v-else-if="$route.params.path == 'internas'">
          <swiper-slide v-for="i in 17" v-bind:key="i">
            <img :src="require(`@/assets/galeria/internas/${i}.jpg`)" alt="">
          </swiper-slide>
        </template>
        <template v-else>
          <swiper-slide v-for="i in 24" v-bind:key="i">
            <img :src="require(`@/assets/galeria/areas_comuns/${i}.jpg`)" alt="">
          </swiper-slide>
        </template>
      </swiper>

    </div>
    <router-link class="btn-voltar" to="/"></router-link>
  </div>
</template>

<script>
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default {
  name: 'GaleriaView',
  components: {

    Swiper,
    SwiperSlide,
    // HelloWorld
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },

}
</script>

<style lang="scss" scoped>
#galeria {
  background-image: url(../assets/galeria.png);
  background-size: contain;

  .slider-container {
    //outline: 1px solid red;
    width: 50%;
    top: 15%;
    left: 25%;
    height: 70%;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .tabs{
    top: 11%;
    left: 27.8%;
    text-transform: uppercase;
    a{
      padding-right: 20px;
      text-decoration: none;
      font-size: 1.35rem;
      color: inherit;
    }
  }
}
</style>