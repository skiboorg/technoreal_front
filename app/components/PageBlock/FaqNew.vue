<script setup lang="ts">
const faqs = [
  { q: 'Какие виды продукции вы производите?', a: 'Мы выполняем полный цикл работ — от проектирования до установки — в четырёх ключевых направлениях: производство торгового оборудования, изготовление мебели для бизнеса, разработка и монтаж рекламных конструкций, а также инженерное сопровождение проектов.' },
  { q: 'Можно ли заказать комплексное оформление пространства?', a: 'Да, мы специализируемся на проектах «под ключ»: разрабатываем концепцию, проектируем, производим, доставляем и устанавливаем изделия. Вы получаете готовое решение без привлечения сторонних подрядчиков.' },
  { q: 'Какие материалы вы используете в производстве?', a: 'Мы подбираем материалы в зависимости от задач проекта: от ЛДСП, МДФ и металла до акрила, стекла, композита и других современных решений. Все сырье сертифицировано и соответствует требованиям безопасности и долговечности.' },
  { q: 'Каковы сроки изготовления?', a: 'Срок зависит от объёма и сложности проекта. Типовые конструкции производятся в среднем за 5–10 рабочих дней. Индивидуальные и масштабные заказы — по согласованному графику. Срочные проекты возможны.' },
  { q: 'Можно ли заказать нестандартное изделие по индивидуальному проекту?', a: 'Да, мы специализируемся на индивидуальных решениях. Наши инженеры и дизайнеры разработают проект с нуля по вашим требованиям или адаптируют ваш макет под производство.' },
  { q: 'Есть ли у вас шоурум или образцы продукции?', a: 'Да, мы можем предоставить образцы материалов, показать реализованные проекты и провести экскурсию по производству по предварительной договорённости.' },
  { q: 'Какой у вас срок производства?', a: 'Срок зависит от объёма и сложности проекта. Типовые конструкции производятся в среднем за 5–10 рабочих дней. Индивидуальные и масштабные заказы — по согласованному графику. Срочные проекты возможны.' },
  { q: 'Возможна ли доставка в другие регионы или за границу?', a: 'Да, мы работаем по всей России и за её пределами. Организуем логистику и сопровождение груза, включая экспортную документацию при необходимости.' },
]

const openIndex = ref<number | null>(null)

function toggle(index: number) {
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<template>
  <section class="mb-[80px] md:mb-[140px]">
    <div class="container">
      <BlockTitleWithSmallText
        extra_class="md:max-w-[50%] mb-[40px] md:mb-[60px]"
        small-text="FAQ"
        big-text="Часто задаваемые вопросы"
      />

      <div>
        <div
          v-for="(item, index) in faqs"
          :key="index"
          class="border-t border-[#E6E6E6]"
          :class="index === faqs.length - 1 ? 'border-b' : ''"
        >
          <!-- Строка вопроса -->
          <button
            class="w-full flex items-center justify-between gap-4 py-4 text-left"
            @click="toggle(index)"
          >
            <div class="flex md:grid md:grid-cols-12 items-center gap-4 md:gap-0 flex-1 min-w-0">
              <span
                class="shrink-0 md:col-span-6 manrope-font text-[14px] font-semibold leading-[100%] tracking-[-0.03em] text-[#979797]"
              >
                {{ String(index + 1).padStart(2, '0') }}
              </span>
              <span
                class="md:col-span-6 manrope-font text-[16px] font-semibold leading-[140%] tracking-[-0.01em] text-[#2C2C2C]"
              >
                {{ item.q }}
              </span>
            </div>

            <!-- Кнопка раскрытия -->
            <span
              class="shrink-0 flex items-center justify-center w-[36px] h-[36px] rounded-[7px] bg-[#F8F8F8] transition-transform duration-200"
              :class="openIndex === index ? 'rotate-45' : ''"
            >
              <svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.16753 11.0748L10.9395 1.30283M10.9395 1.30283L4.7266 1.26168M10.9395 1.30283L10.9807 7.51577" stroke="#2C2C2C" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </span>
          </button>

          <!-- Ответ -->
          <Transition
            enter-active-class="transition-all duration-200 ease-out overflow-hidden"
            leave-active-class="transition-all duration-200 ease-in overflow-hidden"
            enter-from-class="max-h-0 opacity-0"
            enter-to-class="max-h-[500px] opacity-100"
            leave-from-class="max-h-[500px] opacity-100"
            leave-to-class="max-h-0 opacity-0"
          >
            <div v-if="openIndex === index" class="pb-5 md:pl-[50%]">
              <p class="manrope-font text-[14px] leading-[160%] text-[#7D7D7D] max-w-[75%]">
                {{ item.a }}
              </p>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </section>
</template>
