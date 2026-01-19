<script setup lang="ts">
import {Carousel, Pagination, Slide} from "vue3-carousel";
const props = defineProps<{
  show_title?: boolean
  is_index_page?: boolean
  projects?: any[]
}>()

const slider = ref()
const carouselConfig = {
  itemsToShow: 1,
  wrapAround: true,
  gap:20,
  //autoplay: 3000,
  pauseAutoplayOnHover: true,
  //slideEffect:'fade'

}
const {$api} = useNuxtApp()


const { data: loadedProjects } = await useAsyncData(
    'projects',
    () => $api.blank.projects(props.is_index_page),
    { immediate: true }
)


</script>

<template>
  <section>



    <div class="flex flex-wrap items-end justify-between mb-[30px] md:mb-[70px] gap-2 md:gap-0 ">

        <h3 v-show="props.show_title" class="text-[36px] md:text-[80px] mb-2 manrope-font leading-[100%]">Наши проекты</h3>

      <div class="flex gap-2 border-b border-black w-full pb-[30px]">
        <Button @click="slider.prev()" severity="contrast" icon="pi pi-arrow-left" size="sm"/>
        <Button @click="slider.next()" severity="contrast" icon="pi pi-arrow-right" icon-pos="right" size="sm" label="Следующий проект"/>
      </div>
    </div>
    <Carousel ref="slider"  v-bind="carouselConfig">
      <Slide v-for="(item,index) in loadedProjects" class="flex flex-col items-start ">
        <CardSmallCase  :item="item" :index="index" :total="loadedProjects.length"/>
      </Slide>
    </Carousel>
  </section>
</template>
