<script setup lang="ts">
</script>

<template>
  <section class="relative mb-[120px] overflow-hidden">
    <img class="absolute inset-0 w-full h-full object-cover" src="/form.jpg" alt=""/>
<!--    <div-->
<!--      class="absolute inset-0"-->
<!--      style="background: linear-gradient(224deg, rgba(20,11,5,0) 0%, rgba(20,11,5,0.92) 57%)"-->
<!--    />-->
    <div class="relative container py-[100px]">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[60px] items-start">

        <div class="flex flex-col justify-start">
          <p class="text-white/60 text-[14px] tracking-[-0.03em] mb-7 md:mb-4 font-medium manrope-font">Пересчитаем смету</p>
          <h2 class="text-white manrope-font text-[26px] md:text-[36px] font-semibold leading-[110%] tracking-[-0.03em]">
            Предоставьте нам смету от<br class="hidden md:block"> другой компании — мы предложим<br class="hidden md:block"> более выгодные условия без<br class="hidden md:block"> потери качества
          </h2>
        </div>

        <div class="bg-[#F3F3F3] p-8 md:p-[40px] rounded-[4px]">
          <div class="mb-[40px]">
            <p class="text-[14px] text-[#7D7D7D] font-semibold manrope-font mb-3">Позвоните нам для расчёта стоимости</p>
            <a
              href="tel:+79685458877"
              class="manrope-font text-[28px] md:text-[36px] font-semibold tracking-[-0.01em] text-[#1E1E1E]"
            >
              +7 (968) 545-88-77
            </a>
          </div>
          <div>
            <p class="text-[14px] font-semibold text-[#7D7D7D] manrope-font mb-5">Либо заполните краткую форму</p>
            <BlockForm/>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
