<script setup lang="ts">
const stats = [
  {
    value: '365',
    description: 'Успешно реализованных проектов по созданию решений для клиентов из разных отраслей.',
  },
  {
    value: '5 000',
    description: 'Квадратных метров производственных площадей с высокоточным оборудованием.',
  },
  {
    value: '100%',
    description: 'География проектов охватывает Европу, Азию и Ближний Восток — работаем по всему миру.',
  },
  {
    value: '12',
    description: 'Лет производственного опыта в проектировании, изготовлении и монтаже конструкций.',
  },
]
</script>

<template>
  <section class="container mb-[120px]">

      <BlockTitleWithSmallText  extra_class="md:max-w-[50%] mb-[60px] md:mb-[100px]" small-text="О нас" big-text="Помогаем брендам заявить о себе на международном рынке через эффективное торговое оборудование"/>
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-[60px] md:gap-6">
        <div class="" v-for="i in stats">
          <p class="manrope-font text-[40px] leading-[100%] font-semibold border-b border-[#E6E6E6] mb-4 pb-4">{{i.value}}</p>
          <p class="text-[#7D7D7D] font-medium text-sm">{{i.description}}</p>
        </div>

      </div>

  </section>
</template>
