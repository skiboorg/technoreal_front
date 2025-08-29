<script setup lang="ts">
defineProps(['smallText','bigText','extra_class'])
</script>

<!--<template>-->
<!--  <div class="flex items-start space-x-10 manrope-font">-->
<!--    &lt;!&ndash; Маленький заголовок &ndash;&gt;-->
<!--    <p class="text-[10px] text-gray-400 pt-1 whitespace-nowrap">{{smallText}}</p>-->

<!--    &lt;!&ndash; Основной заголовок &ndash;&gt;-->
<!--    <h2 class="text-[48px] font-medium  leading-[90%] max-w-[70%]" :class='extra_class' v-html="bigText"></h2>-->
<!--  </div>-->
<!--</template>-->
<template>
  <div class="hidden md:block    text-zinc-800 text-5xl font-semibold manrope-font leading-[48px]" :class='extra_class ? extra_class : "w-[60%]"'>
    <span class="text-neutral-400 text-sm align-top mr-[43px] relative top-[6px] " >
      {{smallText}}
    </span>
    <span v-html="bigText"></span>
  </div>
  <div
      class="
      block md:hidden
      w-full
      mb-[40px]
      text-zinc-800 text-[22px]  font-semibold manrope-font leading-[22px] "
      :class='extra_class'>
    <span class="text-neutral-400 text-sm align-top mr-[43px] relative top-[6px] " >
      {{smallText}}
    </span>
    <span class=" block mt-10  " v-html="bigText"></span>
  </div>
</template>
<style scoped>

</style>