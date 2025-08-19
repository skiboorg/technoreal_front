<script setup lang="ts">
const {$api} = useNuxtApp()
const {slug} = useRoute().params
const {data} = await useAsyncData(()=>$api.blank.news_item(slug))
useSeoMeta({
  title: 'Новости и статьи Технореал – мебель, витрины, HoReCa',
  description: 'Актуальные новости, статьи и советы по мерчандайзингу, торговым витринам, мебели для HoReCa и рекламным конструкциям.\n'
})
</script>

<template>
  <section>
    <div class="container">

      <div class="grid grid-cols-12">
        <div class="col-span-12 md:col-span-10">
          <h3 class="text-[22px] md:text-[48px] manrope-font leading-[100%] max-w-full md:max-w-[70%] mb-4 md:mb-7">{{data.name}}</h3>
          <div class="border-l border-black py-2 px-3 mb-4 md:mb-14">
            <p class="opacity-40">Опубликовано</p>
            <p >{{new Date(data.created).toLocaleDateString()}}</p>
          </div>
          <div class="mb-10" v-html="data.content"></div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img v-for="img in data.images" :src="img.image" alt="">
          </div>
        </div>
        <div class="col-span-12 md:col-span-2">
          <div class="border-b border-black mb-5 pb-5">
            <p class="mb-7">Смотрите также:</p>
            <div class="mb-4" v-for="item in data.others">
              <p class="opacity-40 mb-2">{{new Date(item.created).toLocaleDateString()}}</p>
              <p class="mb-5">{{item.name}}</p>
              <a class="text-[12px] inline-flex items-center gap-2 bg-primary py-2 px-3 rounded-md text-white"
                         :href="`/news/${item.slug}`">
                Читать
                <svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 8.5L8.95514 0.54486M8.95514 0.54486L3.88598 0.5M8.95514 0.54486L9 5.61402" stroke="white" stroke-linecap="round"/>
                </svg>
              </a>
            </div>

          </div>

        </div>
      </div>

    </div>


  </section>
</template>

<style scoped>

</style>