<script setup lang="ts">
const visible = ref(false)
defineProps(['with_icon','is_text'])
</script>

<template>
  <Button v-if="!is_text" class="w-full md:w-auto" @click="visible = true" icon-pos="right" :icon="with_icon ? 'pi pi-arrow-up-right' : null"
          label="Обсудить проект"/>
  <Dialog v-model:visible="visible" modal header=" " class="max-w-[90%] md:max-w-[60%] md:p-10 relative" :show-header="false">
    <Button icon="pi pi-times" severity="secondary" text @click="visible = false" class="absolute top-2 right-1"/>
    <h2
        class="
      w-full
      mb-5
      md:mb-[80px]
      text-zinc-800 text-[22px] md:text-5xl font-semibold manrope-font leading-[22px] md:leading-[48px"    >
      <span class=" block mt-5 md:mt-10  " >Предоставьте нам смету от другой компании — мы предложим более выгодные условия без потери качества</span>
    </h2>
    <BlockForm/>
  </Dialog>

</template>

<style scoped>

</style>