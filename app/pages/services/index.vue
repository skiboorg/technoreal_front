<script setup lang="ts">
const {$api} = useNuxtApp()

const {data} = useAsyncData(()=>$api.blank.services())
</script>

<template>
  <section>
    <div class="container">
      <BlockSectionTitle title="Услуги"/>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-7 border-b border-black pb-[120px] mb-[140px]">
        <CardService v-for="(item,index) in data" :total="data.length" :item="item" :index="index"/>

      </div>
      <PageBlockCbForm/>
    </div>
  </section>

</template>

<style scoped>

</style>