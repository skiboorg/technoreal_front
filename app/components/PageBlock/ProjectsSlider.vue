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

// Если show_title = true, грузим проекты с API
const { data: loadedProjects } = await useAsyncData(
    'projects',
    () => $api.blank.projects(true),
    { immediate: props.show_title }
)

// Источник данных для списка
const projects = computed(() => {
  return props.show_title ? loadedProjects.value : props.projects
})
</script>

<template>
  <section>



    <div class="flex flex-wrap items-end justify-between mb-[30px] md:mb-[70px] gap-2 md:gap-0 ">

        <h3 class="text-[36px] md:text-[80px] mb-2 manrope-font leading-[100%]">Наши проекты</h3>


      <div class="flex gap-2">
        <Button @click="slider.prev()" severity="contrast" icon="pi pi-arrow-left" size="sm"/>
        <Button @click="slider.next()" severity="contrast" icon="pi pi-arrow-right" icon-pos="right" size="sm" label="Следующий"/>
      </div>
    </div>
    <Carousel ref="slider"  v-bind="carouselConfig">
      <Slide v-for="(item,index) in loadedProjects" class="flex flex-col items-start ">
        <CardSmallCase  :item="item" :index="index" :total="loadedProjects.length"/>
      </Slide>
    </Carousel>
  </section>
</template>
