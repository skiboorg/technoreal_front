<script setup lang="ts">
const {$api} = useNuxtApp()

const {data} = useAsyncData(()=>$api.blank.services(true))
</script>

<template>
<section>

    <BlockSectionTitle title="Услуги"
                       link_label = 'ПОСМОТРЕТЬ ВСЕ УСЛУГИ'
                       link_to = '/services'/>
    <CardServiceFull v-for="(item,index) in data" :item="item" :index="index" :show_btn="true"/>



</section>
</template>

<style scoped>

</style>