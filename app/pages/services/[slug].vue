<script setup lang="ts">
const {$api} = useNuxtApp()
const {slug} = useRoute().params
const {data} = await useAsyncData(()=>$api.blank.service(slug))
const show_seo = ref(false)
useSeoMeta({
  title: data.value.page_title,
  description: data.value.page_description
})
import { useBreakpoints } from '@vueuse/core'
definePageMeta({ layout: 'hero' })
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
  <PageBlockOfferNew
      :image="data.large_photo_1"
      :title="data.name"
      :description="data.short_description"
      button-label="Обсудить проект"
      :tags="data.tags?.split(',')"
  />
<section >


  <div class="container">
  <BlockTitleWithSmallText  extra_class="max-w-[70%] mb-[60px] md:mb-[100px]" small-text="Об услуге"
                             :big-text="data.heading_1"/>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-[60px] md:gap-5 mb-[120px] ">
      <div class="">
        <p class=" text-[18px] font-semibold border-b border-[#E6E6E6] mb-4 pb-4">
          {{data.target_audience_title}}
        </p>

        <p class="text-gray-500">{{data.target_audience}}</p>
      </div>
      <div class="">
        <p class="text-[18px] font-semibold border-b border-[#E6E6E6] mb-4 pb-4">
          {{data.recommendation_title}}
        </p>
        <p class="text-gray-500">{{data.recommendation}}</p>
      </div>
      <div v-if="data.heading_3" class="">
        <p class="text-[18px] font-semibold border-b border-[#E6E6E6] mb-4 pb-4">
          {{data.heading_3}}
        </p>
        <p class="text-gray-500">{{data.text_3}}</p>
      </div>
      <div v-if="data.heading_4" class="">
        <p class="text-[18px] font-semibold border-b border-[#E6E6E6] mb-4 pb-4">
          {{data.heading_4}}
        </p>
        <p class="text-gray-500">{{data.text_4}}</p>
      </div>


    </div>
  </div>
    <PageBlockGalleryOnly full_title="1" name="Варианты реализации витрин в торговом пространстве" top_name="Варианты проектов" :items="data.images" class="mb-[80px] md:mb-[120px]"/>
   <div class="container">
     <PageBlockFeedback class="mb-[80px] md:mb-[140px] pb-[80px] md:pb-[120px]  border-b  "/>
   </div>


    <PageBlockRecountBudget/>
  <div class="container">
    <PageBlockProjects

        :is_index_page="true"
        :show_title="true"
        class="mb-[80px] md:mb-[120px]"
    />
    <PageBlockFaqNew />
    <div class="container border-b"></div>

    <Button v-if="data?.content" label="Подробнее" class="mt-10" @click="show_seo=!show_seo"/>
    <div v-show="show_seo" >
      <div  class="html-content mt-10" v-html="data.content"></div>
    </div>

  </div>
</section>
</template>

<style scoped>

</style>