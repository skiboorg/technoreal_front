<script setup lang="ts">
const {$api} = useNuxtApp()

const {data} = useAsyncData(()=>$api.blank.services(true))
</script>

<template>
<section>

    <BlockSectionTitle title="Услуги"
                       w_border="1"
                       link_label = 'ПОСМОТРЕТЬ ВСЕ УСЛУГИ'
                       link_to = '/services'/>
  <div class="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-5">
    <CardServiceFull v-for="(item,index) in data" :item="item" :index="index" :show_btn="true"/>
  </div>




</section>
</template>

<style scoped>

</style>