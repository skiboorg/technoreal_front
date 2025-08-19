<script setup lang="ts">
const {$api} = useNuxtApp()

const {data} = useAsyncData(()=>$api.blank.news(true))
</script>

<template>
<section>
  <div class="container">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-7">
      <div class="">
        <h2 class="text-[36px] md:text-[80px] manrope-font font-medium leading-tight max-w-xl">
          Новости
        </h2>
      </div>
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