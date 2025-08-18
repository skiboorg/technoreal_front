<script setup lang="ts">

</script>

<template>
  <section>
    <div class="container">
      <BlockSectionTitle title="Новости"/>
      <div class="grid grid-cols-2 gap-7 border-b border-black pb-[120px] mb-[140px]">
        <CardNews :is_news_item="true"/>
        <CardNews :is_news_item="true"/>
        <CardNews :is_news_item="true"/>
        <CardNews :is_news_item="true"/>
        <CardNews :is_news_item="true"/>
        <CardNews :is_news_item="true"/>




      </div>
      <PageBlockCbForm/>
    </div>
  </section>

</template>

<style scoped>

</style>