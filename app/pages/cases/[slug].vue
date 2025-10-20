<script setup lang="ts">
const {$api} = useNuxtApp()
const {slug} = useRoute().params
const {data} = await useAsyncData(()=>$api.blank.project(slug))
const config = useRuntimeConfig();

useSeoMeta({
  title: data.value.page_title,
  description: data.value.page_description
})
</script>

<template>
  <section>
<!--    <pre>-->
<!--      {{data}}-->
<!--    </pre>-->
    <div class="container">
      <BlockSectionTitle class="md:!mb-[115px]" :title="data.name"/>
      <div class="border-t border-black grid py-4 grid-cols-1 md:grid-cols-2 items-center">

        <div class="border-b  md:border-b-0 border-black grid grid-cols-12  gap-[15px] md:gap-0  pb-[26px] md:pb-0">
          <div class="col-span-12 md:col-span-2">
            <p class="font-light">Услуга</p>
          </div>
          <div class="col-span-12 md:col-span-10 flex flex-col items-start gap-2">
            <p class="fon-bold" v-for="item in data.services">/{{item.name}} </p>
          </div>
        </div>
        <div class="md:pl-[70px] md:border-l border-black py-4">
          <p class="opacity-40 mb-4">Задача</p>
          <p class="max-w-full md:max-w-[70%]">{{data.task}}</p>
        </div>
      </div>
    </div>
    <img class="w-full h-[500px] md:h-auto object-cover mb-[80px] md:mt-4 md:mb-32" :src="data.large_photo_1" alt="">
    <div class="container">
      <BlockTitleWithSmallText extra_class="max-w-[70%] mb-[100px]" small-text="Что было сделано"
                               :big-text="data.heading"/>

      <div class="grid grid-cols-12 gap-6 mb-[80px] md:mb-[120px]">
        <div class="col-start-1 col-end-13 md:col-start-7 md:col-end-10 ">
          <p class=" text-[16px] font-semibold border-b border-black mb-[15px] pb-[25px]">{{data.heading_1}}</p>
          <p class="text-gray-500">{{data.text_1}}</p>
        </div>
        <div class="col-start-1 col-end-13 md:col-start-10 md:col-end-13 ">
          <p class="text-[16px] font-semibold border-b border-black mb-[15px] pb-[25px]">{{data.heading_2}}</p>
          <p class="text-gray-500">{{data.text_2}}</p>
        </div>
      </div>
    </div>
    <img class="w-full h-[500px] md:h-auto object-cover mb-[80px]  md:mb-32" :src="data.large_photo_2" alt="">
    <div class="container">
      <BlockTitleWithSmallText extra_class="max-w-[70%] mb-[70px]" small-text="Результат"
                               big-text="Результат, который<br>мы получили по итогу<br>сотрудничества"/>
      <div class="border-b border-black mb-[80px] md:mb-[140px]">
        <CardResult v-for="(item,index) in data.results" :item="item" :index="index" :key="index"/>

      </div>
      <BlockTitleWithSmallText extra_class="!max-w-[100%] mb-[70px]"  small-text="Отзыв  клиента"
                               :big-text="`«${data.client_review_text}».`"/>
      <div class="grid grid-cols-12 mb-[90px]">
        <div class="col-start-1 col-end-13 md:col-start-7 md:col-end-10 ">
          <div class="flex gap-7 items-center">
            <img class="w-[88px] h-[88px] rounded-full object-cover" :src="data.client_photo" alt="">

            <p class="manrope-font">{{data.client_name}}<br>
              <span class="font-bold">{{data.client_position}}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <img class="w-full h-[500px] md:h-auto object-cover mb-[80px]  md:mb-32" :src="data.large_photo_3" alt="">
    <div class="container">
      <PageBlockForm/>
    </div>
    <div class="container">
      <BlockTitleWithSmallText  extra_class="!mb-[40px] md:mb-[70px]"
                                small-text="Наши работы"
                               big-text="Другие проекты,<br> которые мы реализовали"/>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-7 border-b border-black pb-[80px] md:pb-[120px]">
        <CardNews  v-for="item in data.others"
                   :name="item.name"
                   :to="`/cases/${item.slug}`"
                   :services="item.services"
                   :image="config.public.apiUrl+item.cover"/>
      </div>
      <div v-if="data.content" class="html_content mt-20" v-html="data.content"></div>
    </div>
  </section>
</template>
