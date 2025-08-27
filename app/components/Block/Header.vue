<script setup lang="ts">
const links = [
  {label:'О нас',to:'/about'},
  {label:'Услуги',to:'/services'},
  {label:'Новости',to:'/news'},
  {label:'Наши проекты',to:'/cases'},
  {label:'Контакты',to:'/contacts'},
]
const menuActive = ref(false)
const route = useRoute()
watch(
    () => route.fullPath, // отслеживание изменения полного пути маршрута
    (newPath, oldPath) => {
      menuActive.value = false;
    },
    { immediate: true } // опция для немедленного выполнения коллбэка
);
</script>

<template>
<header class="mb-5 md:mb-[96px]">
  <div class="container ">
    <div class="flex items-center justify-between py-5">
      <nuxt-link class="flex items-end" to="/">
        <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_1_202)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.9143 24.3638V40H17.084V19.4907H29.0229C32.9656 19.4907 36.1703 16.2575 36.1703 12.2799V12.0858C36.1703 8.10821 32.9656 4.875 29.0229 4.875H23.0738V0H29.0229C35.6322 0 41.0007 5.41791 41.0007 12.084V12.278C41.0007 18.9459 35.6304 24.3619 29.0229 24.3619H21.9143V24.3638Z" fill="#EF7C00"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5089 4.87313V40H7.97019V4.87313H0V0H20.5V4.87313H12.5089Z" fill="#3A3A39"/>
          </g>
          <defs>
            <clipPath id="clip0_1_202">
              <rect width="41" height="40" fill="white"/>
            </clipPath>
          </defs>
        </svg>
        <p class="leading-[100%] uppercase font-semibold">ТЕХНОРЕАЛ</p>

      </nuxt-link>
      <nav class="hidden md:flex gap-8">
        <nuxt-link v-for="link in links" :to="link.to">{{link.label}}</nuxt-link>

      </nav>
      <div class="block md:hidden">
        <svg @click="menuActive = true" width="30" height="9" viewBox="0 0 30 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="30" height="2" rx="1" fill="#2C2C2C"/>
          <rect x="10" y="7" width="20" height="2" rx="1" fill="#2C2C2C"/>
        </svg>

      </div>
    </div>
  </div>
</header>
  <Drawer v-model:visible="menuActive" header=" " position="right">
    <div class="flex flex-col items-start gap-4">
      <NuxtLink :to="link.to" v-for="(link,index) in links" :key="index">{{link.label}}</NuxtLink>
    </div>


  </Drawer>
</template>

<style scoped>

</style>