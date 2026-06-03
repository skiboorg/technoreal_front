<script setup lang="ts">
const {$api} = useNuxtApp()
const {slug} = useRoute().params
const {data} = await useAsyncData(()=>$api.blank.project(slug))
const config = useRuntimeConfig();
definePageMeta({ layout: 'hero' })
useSeoMeta({
  title: data.value.page_title,
  description: data.value.page_description
})
</script>

<template>
  <PageBlockOfferNew
      :image="data.large_photo_1"
      :title="data.name"
      :description="data.task"
      button-label="Обсудить проект"
      :tags="data.tags?.split(',')"
  />
  <section>

    <div class="container">
      <BlockTitleWithSmallText extra_class="md:max-w-[50%] mb-[60px] md:mb-[100px]" small-text="Что было сделано"
                               :big-text="data.heading"/>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-[60px] md:gap-5 mb-[120px]">
        <div >
          <p class=" text-[18px] font-semibold border-b border-[#E6E6E6] mb-4 pb-4">{{data.heading_1}}</p>
          <p class="text-[#7D7D7D] text-sm">{{data.text_1}}</p>
        </div>
        <div >
          <p class="text-[18px] font-semibold border-b border-[#E6E6E6] mb-4 pb-4">{{data.heading_2}}</p>
          <p class="text-[#7D7D7D] text-sm">{{data.text_2}}</p>
        </div>
        <div v-if="data.heading_3">
          <p class="text-[18px] font-semibold border-b border-[#E6E6E6] mb-4 pb-4">{{data.heading_3}}</p>
          <p class="text-[#7D7D7D] text-sm">{{data.text_3}}</p>
        </div>
        <div v-if="data.heading_4">

          <p class="text-[18px] font-semibold border-b border-[#E6E6E6] mb-4 pb-4">{{data.heading_4}}</p>
          <p class="text-[#7D7D7D] text-sm">{{data.text_4}}</p>
        </div>
      </div>
    </div>

    <PageBlockGalleryOnly full_title="1" :name="data.name" :items="data.gallery_images" class="mb-[120px]"/>
    <div class="container">
<!--      <BlockTitleWithSmallText extra_class="max-w-[70%] mb-[70px]" small-text="Результат"-->
<!--                               big-text="Результат, который<br>мы получили по итогу<br>сотрудничества"/>-->
<!--      <div class="border-b border-black mb-[80px] md:mb-[140px]">-->
<!--        <CardResult v-for="(item,index) in data.results" :item="item" :index="index" :key="index"/>-->

<!--      </div>-->
      <BlockTitleWithSmallText extra_class="!md:max-w-[70%] mb-[60px]"  small-text="Отзыв  клиента"
                               :big-text="`«${data.client_review_text}».`"/>
      <div class="flex gap-7 items-center mb-[120px]">
        <img class="w-[88px] h-[88px] rounded-full object-cover" :src="data.client_photo" alt="">

        <p class="manrope-font">{{data.client_name}}<br>
          <span class="font-bold">{{data.client_position}}</span>
        </p>
      </div>

    </div>


    <PageBlockRecountBudget/>
<!--    <div class="container">-->
<!--      <BlockTitleWithSmallText  extra_class="!mb-[40px] md:mb-[70px]"-->
<!--                                small-text="Наши работы"-->
<!--                               big-text="Другие проекты,<br> которые мы реализовали"/>-->

<!--      <div class="grid grid-cols-1 md:grid-cols-2 gap-7 border-b border-black pb-[80px] md:pb-[120px]">-->
<!--        <CardNews  v-for="item in data.others"-->
<!--                   :name="item.name"-->
<!--                   :to="`/cases/${item.slug}`"-->
<!--                   :services="item.services"-->
<!--                   :image="config.public.apiUrl+item.cover"/>-->
<!--      </div>-->
<!--      <div v-show="data.content" class="html_content mt-20" v-html="data.content"></div>-->
<!--    </div>-->
    <div class="container">
      <PageBlockFaqNew />
    </div>

    <div class="container border-b"></div>
  </section>
</template>
