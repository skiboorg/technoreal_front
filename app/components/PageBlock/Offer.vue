<script setup lang="ts">

</script>

<template>
<section>
  <div class="container relative">

    <p class="text-[36px] md:text-[96px] manrope-font leading-[90%] relative mt-[60px] md:mt-[96px] mb-[50px] md:mb-20 md:indent-[10%]">17 лет проектирования, производства и монтажа
      рекламной продукции

    </p>

<!--    <UILinkWithArrow  class="md:absolute md:bottom-[5px] mb-[50px] md:mb-0 right-[40px] indent-0" label="ОБСУДИТЬ ПРОЕКТ" to="/contacts"/>-->
    <div class="md:absolute md:bottom-[5px] mb-[50px] md:mb-0 right-[40px] indent-0">
      <a class="flex w-auto items-center gap-2 text-[12px] md:text-[16px] font-semibold uppercase leading-[100%] md:leading-[75%]"  href="/contacts#form">ОБСУДИТЬ ПРОЕКТ
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.16753 11.0748L10.9395 1.30283M10.9395 1.30283L4.7266 1.26168M10.9395 1.30283L10.9807 7.51577" stroke="#2C2C2C" stroke-width="1.7" stroke-linecap="round"/>
        </svg>
      </a>

    </div>
 </div>

  <img class="w-full mb-[80px] md:mb-32 h-[500px] md:h-[auto] object-cover" src="~assets/images/offer.png" alt="">
  <div class="container">
    <BlockTitleWithSmallText  extra_class="md:max-w-[60%] md:mb-[140px]" small-text="О нас" big-text="Помогаем брендам заявить о себе на международном рынке через эффективное торговое оборудование"/>
    <div class="grid grid-cols-12 gap-6">
      <div class="col-span-12 md:col-start-7 md:col-end-10 ">
        <p class="manrope-font text-[26px] md:text-5xl font-semibold border-b border-black mb-[15px] pb-[25px]">5 000</p>
        <p class="text-gray-500">Успешно реализованные проекты по созданию рекламных решений для клиентов из разных отраслей.</p>
      </div>
      <div class="col-span-12 md:col-start-10 md:col-end-13 ">
        <p class="manrope-font text-[26px] md:text-5xl font-semibold border-b border-black mb-[15px] pb-[25px]">12</p>
        <p class="text-gray-500">География наших проектов охватывает Европу, Азию и Ближний Восток — мы работаем по всему миру.</p>
      </div>
    </div>
  </div>
</section>
</template>

<style scoped>

</style>