<script setup lang="ts">
import {Carousel, Pagination, Slide} from "vue3-carousel";
defineProps(['items'])
const carousel1 = ref()
const carouselConfig = {
  itemsToShow: 1,
  wrapAround: true, 
  autoplay: 3000,
  pauseAutoplayOnHover: true,
  //slideEffect:'fade'
}
</script>

<template>
  <client-only>
    <section>
      <div class="">
        <div class="flex flex-wrap items-end justify-between mb-[40px] md:mb-[70px]">
          <BlockSectionTitle title="Галерея проектов" class="md:!mb-0"/>
          <div class="flex gap-2">
            <Button @click="carousel1.prev()" severity="contrast" icon="pi pi-arrow-left" size="sm"/>
            <Button @click="carousel1.next()" severity="contrast" icon="pi pi-arrow-right" icon-pos="right" size="sm" label="Следующее фото"/>
          </div>
        </div>
        <Carousel ref="carousel1" v-bind="carouselConfig">
          <Slide v-for="i in items" >
            <img class="w-full h-[340px] md:h-full object-cover" :src="i.image" alt="">
          </Slide>
        </Carousel>

      </div>
    </section>
  </client-only>

</template>

<style scoped>

</style>