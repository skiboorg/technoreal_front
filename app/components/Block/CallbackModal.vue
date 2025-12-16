<script setup lang="ts">
const visible = ref(false)
defineProps(['with_icon','is_text','is_link','not_absolute'])
</script>

<template>
  <template v-if="is_link">
        <div :class="not_absolute ? '':'md:absolute md:bottom-[5px] right-[40px] mb-[50px] md:mb-0  indent-0'">
          <a href="#" rel="nofollow" class="flex w-auto items-center gap-2 text-[12px] md:text-[16px] font-semibold uppercase leading-[100%] md:leading-[75%]"
             @click.prevent="visible = true">ОБСУДИТЬ ПРОЕКТ
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.16753 11.0748L10.9395 1.30283M10.9395 1.30283L4.7266 1.26168M10.9395 1.30283L10.9807 7.51577" stroke="#2C2C2C" stroke-width="1.7" stroke-linecap="round"/>
            </svg>
          </a>

        </div>
  </template>
  <template v-else>
    <Button v-if="!is_text" class="w-full md:w-auto" @click="visible = true" icon-pos="right" :icon="with_icon ? 'pi pi-arrow-up-right' : null"
            label="Обсудить проект"/>
  </template>

  <Dialog v-model:visible="visible" modal header=" " class="max-w-[90%] md:max-w-[60%] md:p-10 relative" :show-header="false">
    <Button icon="pi pi-times" severity="secondary" text @click="visible = false" class="absolute top-2 right-1"/>
    <h2
        class="
      w-full
      mb-5
      md:mb-[80px]
      text-zinc-800 text-[22px] md:text-5xl font-semibold manrope-font leading-[22px] md:leading-[48px"    >
      <span class=" block mt-5 md:mt-10  " >Расскажите о вашем проекте</span>
    </h2>
    <BlockForm/>
  </Dialog>

</template>

<style scoped>

</style>