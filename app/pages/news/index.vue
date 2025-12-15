<script setup lang="ts">
const {$api} = useNuxtApp()

const {data} = useAsyncData(()=>$api.blank.news())

useSeoMeta({
  title: 'Новости и статьи Технореал – мебель, витрины, HoReCa',
  description: 'Актуальные новости, статьи и советы по мерчандайзингу, торговым витринам, мебели для HoReCa и рекламным конструкциям.\n'
})
</script>

<template>
  <section>
    <div class="container">
      <BlockSectionTitle title="Новости" :is_h1="true"/>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-7 border-b border-black pb-[60px] md:pb-[120px] mb-[80px] md:mb-[140px]">
        <CardNews v-for="item in data" :name="item.name"
                  :image="item.cover"
                  :to="`/news/${item.slug}`"
                  :date="new Date(item.created).toLocaleDateString()"
                  :is_news_item="true"/>
      </div>

<!--      <PageBlockForm/>-->
    </div>
  </section>
</template>
