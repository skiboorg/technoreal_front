<script setup lang="ts">
defineProps(['show_title'])
const {$api} = useNuxtApp()

const {data} = useAsyncData(()=>$api.blank.projects(true))
</script>

<template>
  <section>
    <div class="container">
      <BlockSectionTitle v-if="show_title" title="Наши проекты"
                         link_label = 'ПОСМОТРЕТЬ ВСЕ проекты'
                         link_to = '/cases'/>
      <CardProjectCard v-for="item in data" :item="item"  />

    </div>

  </section>
</template>

<style scoped>

</style>