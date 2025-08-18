<script setup lang="ts">
const {$api} = useNuxtApp()

const {data} = useAsyncData(()=>$api.blank.services(true))
</script>

<template>
<section>
  <div class="container border-b border-black">
    <BlockSectionTitle title="Услуги"
                       link_label = 'ПОСМОТРЕТЬ ВСЕ УСЛУГИ'
                       link_to = '/services'/>
    <CardServiceFull v-for="(item,index) in data" :item="item" :index="index" :show_btn="true"/>

  </div>

</section>
</template>

<style scoped>

</style>