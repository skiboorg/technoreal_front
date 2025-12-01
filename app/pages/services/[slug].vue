<script setup lang="ts">
const {$api} = useNuxtApp()
const {slug} = useRoute().params
const {data} = await useAsyncData(()=>$api.blank.service(slug))
const show_seo = ref(false)
useSeoMeta({
  title: data.value.page_title,
  description: data.value.page_description
})
</script>

<template>
<section >
  <div class="container">
      <div class="pb-[50px] md:pb-[90px]">
        <h1 class="text-[36px] md:text-[96px] manrope-font leading-[90%] ">{{data.name}}</h1>
      </div>
    <div class="border-t border-black grid grid-cols-2 py-5 items-center">
      <div class="border-r border-black">
        <p class="font-semibold">Сроки изготовления</p>
        <p class="opacity-40">{{data.production_time}}</p>
      </div>
      <div class="justify-self-end">
        <UILinkWithArrow label="ОБСУДИТЬ ПРОЕКТ" to="/"/>
      </div>
    </div>
  </div>

    <img class="w-full h-[500px] md:h-auto mb-[80px] object-cover md:mb-32" :src="data.large_photo" alt="">
  <div class="container">
  <BlockTitleWithSmallText  extra_class="max-w-[70%] mb-[60px] md:mb-[100px]" small-text="Об услуге"
                             :big-text="data.heading_1"/>
    <div class="grid grid-cols-12 gap-6 mb-[120px] md:mb-[220px]">
      <div class="col-start-1 col-end-13 md:col-start-7 md:col-end-10 ">
        <p class=" text-[16px] font-semibold border-b border-black mb-[15px] pb-[25px]">
          {{data.target_audience_title}}
        </p>
        <p class="text-gray-500">{{data.target_audience}}</p>
      </div>
      <div class="col-start-1 col-end-13 md:col-start-10 md:col-end-13 ">
        <p class="text-[16px] font-semibold border-b border-black mb-[15px] pb-[25px]">
          {{data.recommendation_title}}
        </p>
        <p class="text-gray-500">{{data.recommendation}}</p>
      </div>
    </div>
      <BlockTitleWithSmallText extra_class="max-w-[70%] mb-[30px] md:mb-[70px]" small-text="Варианты проектов"
                               :big-text="data.heading_implementation"/>
      <div class="border-b border-black mb-[80px] md:mb-[140px]">
        <CardCategory v-for="item in data.variants" :item="item"/>
      </div>
    <BlockTitleWithSmallText class="max-w-[70%] " extra_class="mb-[60px]  md:mb-[80px]" small-text="Почему мы?"
                             big-text="Воплощаем нестандартные идеи в функциональное торговое оборудование"/>
    <div class="grid grid-cols-12 gap-6 mb-[60px]">
      <div class="col-start-1 col-end-13 md:col-start-7 md:col-end-10 ">
        <p class=" text-[16px] font-semibold border-b border-black mb-[15px] pb-[25px]">
          Индивидуальный подход<br>к задачам любого масштаба
        </p>
        <p class="text-gray-500">
          Каждый проект для нас уникален. Мы адаптируем решения под цели и бюджет клиента — будь то небольшая вывеска или комплексное оформление федеральной сети.
        </p>
      </div>
      <div class="col-start-1 col-end-13 md:col-start-10 md:col-end-13 ">
        <p class="text-[16px] font-semibold border-b border-black mb-[15px] pb-[25px]">
          Опытная команда<br>дизайнеров и инженеров
        </p>
        <p class="text-gray-500">
          Наша команда — это специалисты с многолетним опытом в проектировании, дизайне и технической реализации рекламных решений. Мы понимаем, как превратить идею в эффективный и визуально выразительный продукт.
        </p>
      </div>
    </div>
    <img class="w-full h-[500px] md:h-full object-cover mb-[80px] md:mb-32" :src="data.large_photo_1" alt="">
    <BlockTitleWithSmallText  extra_class="max-w-[75%] md:max-w-[50%] !mb-[30px] md:mb-[40px]" small-text="Наши работы"
                             big-text="Проекты, которые мы реализовали"/>
    <PageBlockProjects :projects="data.projects" class="mb-[80px] md:mb-[140px] border-b border-black "/>
    <PageBlockFeedback class="mb-[80px] md:mb-[140px] pb-[80px] md:pb-[140px]  border-b border-black "/>
    <PageBlockForm/>
    <PageBlockGallery :items="data.images" class="mb-[0px] md:mb-[140px] py-[0px] pb-[80px]  md:py-[140px]  border-b border-black "/>

    <Button v-if="data?.content" label="Подробнее" @click="show_seo=!show_seo"/>
    <div v-if="show_seo" class="container">
      <div  class="html-content mt-10" v-html="data.content"></div>
    </div>

  </div>
</section>
</template>

<style scoped>

</style>