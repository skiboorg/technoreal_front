<script setup lang="ts">
import { useBreakpoints } from '@vueuse/core'

const breakpoints = useBreakpoints({
  mobile: 0, // optional
  tablet: 640,
  laptop: 1024,
  desktop: 1280,
})

// Can be 'mobile' or 'tablet' or 'laptop' or 'desktop'
const activeBreakpoint = breakpoints.active()

// true or false
const laptop = breakpoints.between('laptop', 'desktop')
</script>
<template>
  <PageBlockOffer class="mb-[140px] md:mb-[140px]"/>
  <div class="container  mb-[80px] md:mb-[180px]">
    <PageBlockServices class="border-b border-black"/>
  </div>
  <PageBlockWhyWe class="mb-[80px] md:mb-[100px]"/>
  <div class="container">

    <PageBlockProjects v-if="activeBreakpoint!=='mobile'" :is_index_page="true" :show_title="true" class="mb-[80px] md:mb-[140px]"/>
    <PageBlockProjectsSlider v-else :is_index_page="true" :show_title="true" class="mb-[80px] md:mb-[140px]"/>
  </div>
  <PageBlockProjectGallery class="mb-[80px] md:mb-[140px]  "/>
  <PageBlockNews class=" "/>
  <PageBlockFaq class=""/>
</template>