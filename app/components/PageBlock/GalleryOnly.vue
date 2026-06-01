<script setup lang="ts">
import { Carousel, Slide } from 'vue3-carousel'

const slider = ref()


const props = defineProps(['items','full_title' ,'name','top_name'])


const carouselConfig = {
  itemsToShow:1,

  breakpointMode: 'carousel',
  snapAlign:'start',
  wrapAround: false,
  gap:20,
  //autoplay:1000,

  breakpoints:{
    // 700px and up
    700: {
      itemsToShow: 1,
      gap:10,
      snapAlign: 'center',
    },
    // 1024 and up
    1024: {
      itemsToShow: 3,
      snapAlign:'start',
      gap: 0,

    },
    1300: {
      itemsToShow: 4,
      gap: 20,

    },
  }
}
</script>

<template>
  <client-only>
    <section>

      <div class="container">
        <div class="block md:flex flex-wrap items-end justify-between mb-[30px] border-b pb-10 md:mb-[32px] gap-10 md:gap-0 ">

          <div class="">

            <p v-if="full_title" class="text-[#AAAAAA] text-sm align-top mb-7 ">{{top_name ?? 'Галерея'}}</p>
            <h2 v-if="full_title" class="text-[24px] md:text-[36px] manrope-font max-w-full md:max-w-[70%] leading-[100%]" >{{name}}</h2>
            <h2 v-else class="text-[24px] md:text-[36px] font-semibold manrope-font leading-[100%]" >Галерея</h2>

          </div>


          <div class="flex gap-2 mt-8 md:mt-0">
            <Button @click="slider.prev()" severity="contrast" icon="pi pi-arrow-left" size="sm"/>
            <Button
              @click="slider.next()"
              severity="contrast"
              icon="pi pi-arrow-right"
              icon-pos="right"
              size="sm"
              label="Следующее фото"
            />
          </div>
        </div>
        <Carousel ref="slider" v-bind="carouselConfig" class="border-b pb-10">
          <Slide v-for="(i, idx) in items" :key="idx" class="flex flex-col items-start">
            <img class="w-full  h-[380px] md:h-[325px] object-cover" :src="i.image" alt=""/>
          </Slide>
        </Carousel>
      </div>
    </section>
  </client-only>
</template>
