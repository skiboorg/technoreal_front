<script setup lang="ts">

</script>

<template>
  <div class="container">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-[50px] pt-10 md:pt-[80px] pb-[26px] md:gap-0 items-end">
      <div class="hidden md:block">
        <nuxt-link to="/contacts">
          <Button class="px-[44px]" label="Обсудить проект"/>
        </nuxt-link>

      </div>
      <div class="grid grid-cols-1 md:grid-cols-2">
        <div class="">
            <p class="opacity-50 mb-[30px]">СВЯЗАТЬСЯ С НАМИ</p>
            <p class="text-[22px] mb-[15px]"><a href="tel:89685458877 ">+7 (968) 545-88-77 </a></p>
            <p class="text-[22px] mb-[50px] md:mb-[110px]"> <a href="mailto:info@texnoreal.com">info@texnoreal.com</a></p>
            <p class="hidden md:block opacity-50 mb-[5px] font-light">Политика конфиденциальности</p>
            <p class="hidden md:block opacity-50 font-light">Разработка сайта</p>
        </div>
        <div class="">
          <p class="opacity-50 mb-[30px]">АДРЕС</p>
          <p class="mb-[15px]">Московская область, г.Лобня, Промышленная 3</p>
          <p class="mb-[50px] md:mb-[110px]">Время работы офиса с 9:00 - 17:00</p>
          <br>
          <p class="hidden md:block text-right opacity-50 font-light">© 2008 - 2025 Технореал</p>
        </div>

        <div class="block md:hidden">
          <nuxt-link to="/contacts">
            <Button class="mb-[50px]" label="Обсудить проект"/>
          </nuxt-link>

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