<script setup lang="ts">
defineProps(['image','name', 'date', 'is_news_item', 'to'])
</script>

<template>
  <div class="">
    <div class="mb-6 pb-4" :class="is_news_item ? 'border-b border-black' : ''" >
      <img class="w-full " :src="image" alt="">
    </div>
    <div class="grid grid-cols-12">
      <div class="col-start-1 col-end-9">
        <p>{{name}}</p>
<!--        <p class="opacity-40" v-if="!is_news_item">/Производство торгового оборудования</p>-->
      </div>
      <div class="col-start-10 col-end-13 justify-self-end self-end">
        <p class="opacity-40 text-[12px] mb-2" v-if="is_news_item">{{date}}</p>
        <UILinkWithArrow v-if="is_news_item" label="Читать" :to="to"/>
        <a class="border-b border-black" v-else :href="to">Подробнее</a>
      </div>
    </div>
  </div>


</template>

<style scoped>

</style>