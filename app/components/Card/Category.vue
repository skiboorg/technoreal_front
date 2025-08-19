<script setup lang="ts">
defineProps(['item'])
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-7 border-t border-black py-7">
    <div class="">
      <img class="w-full h-[380px] md:h-[675px] object-cover" :src="item.cover" alt="">
    </div>
    <div class="flex flex-col items-start justify-between">
      <div class="">
        <p class="text-[16px] leading-[100%] tracking-[-1px] mb-4">Материал</p>
        <p class="opacity-40 max-w-[70%] mb-10">{{item.text}}</p>
        <p class="text-[16px] leading-[100%] tracking-[-1px] mb-4">Особенность проекта</p>
        <div class="grid grid-cols-12 mb-4" v-for="(opt, index) in item.options" :key="index">
          <div class="col-span-1">0{{index+1}}/</div>
          <div class="col-span-11 opacity-40 max-w-[70%]">{{opt.text}}</div>
        </div>

      </div>
      <div class="">
        <p class="text-[16px] leading-[100%] tracking-[-1px] mb-4">Результат работы</p>
        <p class="opacity-40 max-w-none md:max-w-[50%]">{{item.text1}}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>