<script setup lang="ts">
const props = defineProps<{
  show_title?: boolean
  projects?: any[]
}>()

const {$api} = useNuxtApp()

// Если show_title = true, грузим проекты с API
const { data: loadedProjects } = await useAsyncData(
    'projects',
    () => $api.blank.projects(true),
    { immediate: props.show_title }
)

// Источник данных для списка
const projects = computed(() => {
  return props.show_title ? loadedProjects.value : props.projects
})
</script>

<template>
  <section>


      <BlockSectionTitle
          v-if="show_title"
          title="Наши проекты"
          link_label="ВСЕ проекты"
          link_to="/cases"
      />
    <div class="grid grid-cols-1 md:grid-cols-2 gap-7 border-b border-black pb-[80px] mb-[80px] md:pb-[120px] md:mb-[140px]">
    <CardCase v-for="(item,index) in loadedProjects" :item="item" :index="index" :total="loadedProjects.length"/>
    </div>
<!--      <CardProjectCard-->
<!--          v-for="item in projects"-->
<!--          :key="item.slug"-->
<!--          :item="item"-->
<!--      />-->

  </section>
</template>
