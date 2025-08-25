<script setup lang="ts">
defineProps(['image','name', 'date', 'is_news_item', 'to','services'])
</script>

<template>
  <div class="">

    <div class="mb-6 pb-4" :class="is_news_item ? 'border-b border-black' : ''" >
      <img class="w-full " :class="is_news_item ? '' : 'h-auto md:h-[350px] object-cover'" :src="image" alt="">
    </div>
    <div class="grid grid-cols-12">
      <div class="col-start-1 col-end-9">
        <p>{{name}}</p>
        <div v-if="!is_news_item">
          <p class="opacity-40" v-for="item in services">/{{item.name}}</p>
        </div>

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