<script setup lang="ts">

</script>

<template>
  <div class="container">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-[50px] pt-[80px] pb-[26px] md:gap-0 items-end">
      <div class="hidden md:block">
        <Button label="Обсудить проект"/>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2">
        <div class="">
            <p class="opacity-50 mb-[30px]">СВЯЗАТЬСЯ С НАМИ</p>
            <p class="text-[22px] mb-[15px]"><a href="tel:000">+7 (999) 000-00-00</a></p>
            <p class="text-[22px] mb-[50px] md:mb-[110px]"> <a href="mailto:info@technoreal.ru">info@technoreal.ru</a></p>
            <p class="hidden md:block opacity-50 mb-[5px] font-light">Политика конфиденциальности</p>
            <p class="hidden md:block opacity-50 font-light">Разработка сайта</p>
        </div>
        <div class="">
          <p class="opacity-50 mb-[30px]">АДРЕС</p>
          <p class="mb-[15px]">Россия, г. Москва, ул. Летниковская, д. 4, стр. 5</p>
          <p class="mb-[50px] md:mb-[110px]">Время работы офиса с 9:00 - 17:00</p>
          <p class="hidden md:block text-right opacity-50 font-light">© 2008 - 2025 Технореал</p>
        </div>

        <div class="block md:hidden">
          <Button class="mb-[50px]" label="Обсудить проект"/>
          <p class="opacity-50 mb-[5px] font-light">Политика конфиденциальности</p>
          <p class="mb-[50px] opacity-50 font-light">Разработка сайта</p>
          <p class="opacity-50 font-light">© 2008 - {{new Date().getFullYear()}} Технореал</p>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>

</style>