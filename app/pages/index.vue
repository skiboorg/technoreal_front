<script setup lang="ts">
import { useBreakpoints } from '@vueuse/core'

definePageMeta({ layout: 'hero' })
const { $api } = useNuxtApp()
const breakpoints = useBreakpoints({
  mobile: 0,
  tablet: 640,
  laptop: 1024,
  desktop: 1280,
})
const { data: images } = await useAsyncData('home_gallery', () => $api.blank.home_gallery())

const activeBreakpoint = breakpoints.active()

const heroTags = [
  'Мебель для HoReCa',
  'Рекламные конструкции',
  'Торговая мебель по индивидуальному заказу',
]
</script>

<template>
  <!-- 1. Хиро с хедером поверх изображения -->
  <PageBlockOfferNew
    image="/offer.jpg"
    title="17 лет проектирования, производства и монтажа торгового оборудования и рекламных конструкций"
    description="Профессиональные услуги по проектированию и изготовлению уникальной торговой мебели по индивидуальным заказам."
    button-label="Обсудить проект"
    :tags="heroTags"
  />

  <!-- 2. Показатели -->
  <PageBlockStats/>

  <!-- 3. Услуги -->
  <div class="container mb-[120px]">
    <PageBlockServices class="border-b pb-8"/>
  </div>

  <!-- 4. Пересчитаем смету -->
  <PageBlockRecountBudget/>

  <!-- 5. Проекты -->
  <div class="container">
    <PageBlockProjects

      :is_index_page="true"
      :show_title="true"
      class="mb-[120px]"
    />

  </div>

  <!-- 6. Наши принципы + команда -->
  <PageBlockPrinciples/>

  <!-- 7. Галерея -->
  <PageBlockGalleryOnly :items="images" class="mb-[120px]"/>

  <!-- 8. FAQ -->
  <div class="container">
    <PageBlockFaqNew/>
  </div>


  <!-- 9. Новости (после FAQ, как в макете) -->
  <PageBlockNews/>
</template>
