<script setup lang="ts">
import {Carousel, Pagination, Slide} from "vue3-carousel";
const slider = ref()
const carouselConfig = {
  itemsToShow: 1,
  wrapAround: false,
  gap:20,
  //autoplay: 3000,
  pauseAutoplayOnHover: true,
  //slideEffect:'fade'

}
</script>

<template>
<section>
  <div class="container pb-[80px] md:!pb-[140px] border-b border-black">
    <div class="flex flex-wrap items-end justify-between mb-[30px] md:mb-[70px] gap-10 md:gap-0">
      <h3 class="text-[36px] md:text-[80px] manrope-font leading-[100%]">Галерея проектов</h3>
      <div class="flex gap-2">
        <Button @click="slider.prev()" severity="contrast" icon="pi pi-arrow-left" size="sm"/>
        <Button @click="slider.next()" severity="contrast" icon="pi pi-arrow-right" icon-pos="right" size="sm" label="Следующее фото"/>
      </div>
    </div>

    <Carousel ref="slider"  v-bind="carouselConfig">
      <Slide v-for="i in 10" class="flex flex-col items-start ">
        <img class="w-full mb-[80px] md:mb-[120px] h-[500px] md:h-auto object-cover" src="~assets/images/why_we.png" alt="">

      </Slide>
    </Carousel>
    <div class="block md:flex items-start gap-[275px] manrope-font">
      <!-- Маленький заголовок -->
      <p class="mb-10 md:mb-0 text-[10px] text-gray-400 pt-1 whitespace-nowrap">Наши принципы</p>

      <div class="">
        <h2 class="text-[22px] md:text-[36px] sm:text-3xl md:text-4xl font-medium leading-tight mb-10">
          Каждая рекламная конструкция—это лицо вашего бизнеса.Мы знаем, как сделать его запоминающимся. 17 лет в отрасли научили нас главному:реклама должна не просто быть—она должна работать.Поэтому в каждом проекте мы сочетаем креатив,точный расчет и современные технологии.
        </h2>
        <p class="text-[22px] md:text-[36px] sm:text-3xl md:text-4xl font-medium leading-tight mb-[70px] md:mb-20">
          Ваш успех начинается с первого впечатления. Давайте создадим его вместе!
        </p>
        <div class="flex flex-wrap gap-10">
          <div class="flex gap-7 items-center">
            <img class="w-[88px] h-[88px] rounded-full object-cover" src="~assets/images/f1.png" alt="">
            <p class="manrope-font">Кайтазов Бахшиш<br>
              <span class="font-bold">CEO  Технореал</span>
            </p>
          </div>
          <div class="flex gap-7 items-center">
            <img class="w-[88px] h-[88px] rounded-full object-cover" src="~assets/images/f2.png" alt="">
            <p class="manrope-font">Кайтазова Екатерина<br>
              <span class="font-bold">CEO  Технореал</span>
            </p>
          </div>
        </div>

      </div>


    </div>


  </div>
</section>
</template>

<style scoped>

</style>