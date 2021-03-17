<template>
  <div>
    <swiper
      :slides-per-view="3"
      :space-between="50"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <Swiper-slide class="swiper-slide">
        <img src="https://mars-images.imgix.net/1.jpg?auto=compress&w=1200&fit=max" alt="" />
      </Swiper-slide>
      <Swiper-slide class="swiper-slide">
        <img src="https://mars-images.imgix.net/2.jpg?auto=compress&w=1200&fit=max" alt="" />
      </Swiper-slide>
      <Swiper-slide class="swiper-slide">
        <img src="https://mars-images.imgix.net/3.jpg?auto=compress&w=1200&fit=max" alt="" />
      </Swiper-slide>
      <Swiper-slide class="swiper-slide">
        <img src="https://mars-images.imgix.net/4.jpg?auto=compress&w=1200&fit=max" alt="" />
      </Swiper-slide>
      <Swiper-slide class="swiper-slide">
        <img src="https://mars-images.imgix.net/5.jpg?auto=compress&w=1200&fit=maxg" alt="" />
      </Swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper.scss'
export default {
  name: 'swipeComponent',
  components: {
    Swiper,
    SwiperSlide
  },
  data: () => ({
    swiper: null
  }),
  methods: {
    onSwiper: function (swiper) {
      console.log(swiper)
    },
    onSlideChange: function () {
      console.log('slide change')
    }
  }
}
</script>

<style scoped>
.swiper-wrapper {
}
</style>
