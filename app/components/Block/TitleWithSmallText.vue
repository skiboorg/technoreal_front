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
 <p class="text-[#AAAAAA] text-sm align-top mb-7 " >
      {{smallText}}
    </p>
  <h2
      class="
      w-full
      mb-[80px]
      text-zinc-800 text-[24px] md:text-[36px]  font-semibold manrope-font leading-[110%] "
      :class='extra_class' v-html="bigText">
  </h2>
</template>
<style scoped>

</style>