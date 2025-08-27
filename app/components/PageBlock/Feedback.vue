<script setup lang="ts">
import {Carousel, Pagination, Slide} from "vue3-carousel";
const {$api} = useNuxtApp()
const {slug} = useRoute().params
const {data} = await useAsyncData(()=>$api.blank.reviews())
const carousel = ref()
const carouselConfig = {
  itemsToShow: 4,
  wrapAround: false,
  gap:60,
  //autoplay: 3000,
  pauseAutoplayOnHover: true,
  //slideEffect:'fade'
  breakpoints:{
    // 700px and up
    300: {
      itemsToShow: 1,
      gap:10,
      snapAlign: 'center',
    },
    // 1024 and up
    1024: {
      itemsToShow: 3,
      //snapAlign: 'center',
      gap: 20,

    },
    1300: {
      itemsToShow: 4,
      snapAlign:'start',
      gap: 40,

    },
  }
}
</script>

<template>
<section>
  <div class="container">
    <div class="flex md:flex-wrap items-start justify-between mb-[40px] md:mb-0">
      <BlockTitleWithSmallText extra_class="max-w-[70%] mb-[30px] md:mb-[70px]" small-text="Наши работы"
                               big-text="Отзывы наших клиентов о сотрудничестве и качестве работы"/>
      <div class="flex gap-2">
        <Button @click="carousel.prev()" severity="contrast" icon="pi pi-arrow-left" size="sm"/>
        <Button @click="carousel.next()" severity="contrast" icon="pi pi-arrow-right" icon-pos="right" size="sm" label="Следующие отзывы"/>
      </div>
    </div>
    <Carousel ref="carousel" v-bind="carouselConfig">
      <Slide v-for="i in data" class="flex flex-col items-start justify-start">
        <div class="flex gap-7 items-center mb-9">
          <img class="w-[88px] h-[88px] rounded-full object-cover " :src="i.client_photo" alt="">
          <p class="manrope-font">{{i.client_name}}<br>
            <span class="font-bold">{{i.client_position}}</span>
          </p>
        </div>
        <p v-html="i.text"></p>
      </Slide>




    </Carousel>
    
  </div>
</section>
</template>

<style scoped>

</style>