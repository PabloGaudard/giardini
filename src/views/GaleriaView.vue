<template>
  <div id="galeria">

    <div class="slider-container">

      <swiper style="height: 100%;" :modules="modules" :slides-per-view="1" :space-between="50" navigation :pagination="{ clickable: true }"
        :scrollbar="{ draggable: true }" @swiper="onSwiper" @slideChange="onSlideChange">
        <swiper-slide v-for="i in 24" v-bind:key="i">
          <img :src="require(`@/assets/galeria/areas_comuns/${i}.jpg`)" alt="">
        </swiper-slide>
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

  .slider-container{
    outline: 1px solid red;
    width: 50%;
    top: 15%;
    left: 25%;
    height: 40%;

    img{
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}
</style>