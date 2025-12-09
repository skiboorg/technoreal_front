<script setup lang="ts">
const visible = ref(false)
</script>

<template>
  <Button class="w-full md:w-auto" @click="visible = true" label="Обсудить проект"/>
  <Dialog v-model:visible="visible" modal header=" " class="max-w-[90%] md:max-w-[60%]">
    <BlockTitleWithSmallText
        extra_class=" mb-[60px]"
        small-text="Пересчитаем смету"
        big-text="Предоставьте нам смету от другой компании — мы предложим более выгодные условия без потери качества"
    />
    <BlockForm/>
  </Dialog>

</template>

<style scoped>

</style>