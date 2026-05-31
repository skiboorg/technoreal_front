<script setup lang="ts">
const {$api} = useNuxtApp()

const {data} = useAsyncData(()=>$api.blank.news(true))
</script>

<template>
<section>
  <div class="container  ">
    <BlockSectionTitle title="Новости компании"
                       link_label = 'Все новости'
                       link_to = '/news'/>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-7 border-b   pb-[80px] md:pb-[120px]">

      <CardNews v-for="item in data" :name="item.name"
                :image="item.cover"
                :to="`/news/${item.slug}`"
                :date="new Date(item.created).toLocaleDateString()"
                :is_news_item="true"/>



    </div>
  </div>
</section>  
</template>

<style scoped>

</style>