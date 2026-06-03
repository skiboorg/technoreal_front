<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'
const { y } = useWindowScroll()
const scrolled = computed(() => y.value > 0)

const links = [
  {label:'О нас',to:'/about'},
  {label:'Услуги',to:'/services'},
  {label:'Наши проекты',to:'/cases'},
  {label:'Новости',to:'/news'},
  {label:'Контакты',to:'/contacts'},
]
const menuActive = ref(false)
const emit = defineEmits<{ buttonClick: [] }>()

const dialogVisible = ref(false)
function handleButtonClick() {
  dialogVisible.value = true
  emit('buttonClick')
}
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
<header class="mb-5 md:mb-[96px] sticky top-0 z-50 w-full bg-white h-[82px] border-b transition-colors duration-300" :class="scrolled ? 'border-gray-200' : 'border-transparent'">
  <div class="container h-full">
    <div class="flex h-full items-center justify-between">
      <nuxt-link class="flex items-end gap-2" to="/">
        <svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_681_5991)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7318 16.3095V26.7766H11.4844V13.0474H19.5109C22.1615 13.0474 24.3161 10.883 24.3161 8.22033V8.09044C24.3161 5.42776 22.1615 3.2634 19.5109 3.2634H15.5113V0H19.5109C23.9543 0 27.5635 3.62683 27.5635 8.08919V8.21908C27.5635 12.6827 23.953 16.3083 19.5109 16.3083H14.7318V16.3095Z" fill="#EF7C00"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.40973 3.26215V26.7766H5.35834V3.26215H0V0H13.7821V3.26215H8.40973Z" fill="#3A3A39"/>
          </g>
          <defs>
            <clipPath id="clip0_681_5991">
              <rect width="27.5642" height="26.7766" fill="white"/>
            </clipPath>
          </defs>
        </svg>
        <p class="text-[12px] font-semibold leading-[100%] uppercase tracking-[-0.01em] text-[#3A3A39]">ТЕХНОРЕАЛ</p>
      </nuxt-link>
      <div class="hidden lg:flex items-center gap-[42px]">
        <nav class="flex gap-7 items-center">
          <nuxt-link v-for="link in links" :to="link.to" class="text-[12px] font-medium leading-[100%] tracking-[-0.01em] text-[#3A3A39] hover:text-[#3A3A39]/70 transition-colors">{{link.label}}</nuxt-link>


        </nav>
        <div class="hidden lg:flex items-center gap-8">
          <div class="flex gap-2">
            <a href="tel:+79685458877" target="_blank" aria-label="Телефон" class="h-[34px] w-[34px] flex items-center justify-center bg-[#EF7C00] rounded-[7px]">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.3245 7.44223C10.0354 7.16703 9.65132 7.0138 9.25217 7.01436C8.85302 7.01492 8.46942 7.16922 8.18102 7.44523L7.22645 8.24973C6.44731 7.92723 5.73953 7.45397 5.14376 6.85712C4.54798 6.26027 4.07595 5.55158 3.75476 4.77176L4.55608 3.81999C4.8313 3.53095 4.98506 3.14725 4.98562 2.74809C4.98617 2.34894 4.83349 1.96481 4.55908 1.675C4.55908 1.675 3.63156 0.471257 3.61603 0.455728C3.33029 0.168067 2.94287 0.00439903 2.53748 8.7387e-05C2.13209 -0.00422425 1.74128 0.151166 1.44948 0.432685L0.873539 0.933617C-2.9923 5.04627 6.98355 15.0288 11.0903 11.1025L11.547 10.5766C11.8371 10.2855 12 9.89126 12 9.48027C12 9.06928 11.8371 8.67506 11.547 8.38398C11.5305 8.37046 10.3245 7.44273 10.3245 7.44273V7.44223Z" fill="white"/>
              </svg>
            </a>
            <a href="https://t.me/texnoreal_company" target="_blank" aria-label="Telegram" class="h-[34px] w-[34px] flex items-center justify-center bg-[#EF7C00] rounded-[7px]">
              <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.9058 0.0743542C12.7932 0.116072 9.88883 1.25847 6.45295 2.60946C2.60127 4.1241 0.175213 5.09322 0.128318 5.13814C0.0314004 5.2312 -0.0186214 5.41733 0.00638951 5.56815C0.0564114 5.82808 0.0720432 5.8345 1.87596 6.46025C3.25156 6.93839 3.5298 7.02503 3.58608 6.99615C3.62047 6.97369 4.02064 6.72659 4.47084 6.44099C4.92416 6.1586 6.62803 5.0868 8.25999 4.06313C11.3051 2.15378 11.327 2.14415 11.327 2.32707C11.327 2.36557 10.3203 3.3379 8.49134 5.06755C6.93129 6.54047 5.62134 7.78235 5.57757 7.82728C5.50567 7.9075 5.50254 7.93959 5.39937 9.43819C5.32746 10.5164 5.30558 10.9978 5.32746 11.0587C5.36185 11.1646 5.49941 11.2416 5.59633 11.2096C5.63385 11.1999 6.07154 10.7796 6.57176 10.2789C7.07197 9.77835 7.49091 9.3676 7.50341 9.3676C7.51904 9.3676 8.25999 9.93238 9.14788 10.6255C10.0358 11.3187 10.8142 11.9123 10.8736 11.9444C11.1112 12.0728 11.4551 11.9701 11.6208 11.7262C11.674 11.646 11.9522 10.3977 12.8432 6.23883C13.481 3.27693 14 0.809214 14 0.75787C14 0.565331 13.925 0.401671 13.7655 0.238013C13.5217 -0.0154972 13.2747 -0.0604229 12.9058 0.0743542Z" fill="white"/>
              </svg>
            </a>
          </div>

          <button
              class="flex items-center px-4 h-[34px] bg-[#EF7C00] text-white text-[14px] font-medium rounded-[4px] leading-[100%] tracking-[-0.01em] hover:bg-[#EF7C00]/90 transition-colors"
              @click="handleButtonClick"
          >
            Обсудить проект
          </button>
        </div>

      </div>
      <div class="flex items-center gap-8 lg:hidden">
        <div class="flex items-center gap-2">
          <a href="tel:+79685458877" target="_blank" aria-label="Телефон" class="h-[34px] w-[34px] flex items-center justify-center bg-[#EF7C00] rounded-[7px]">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.3245 7.44223C10.0354 7.16703 9.65132 7.0138 9.25217 7.01436C8.85302 7.01492 8.46942 7.16922 8.18102 7.44523L7.22645 8.24973C6.44731 7.92723 5.73953 7.45397 5.14376 6.85712C4.54798 6.26027 4.07595 5.55158 3.75476 4.77176L4.55608 3.81999C4.8313 3.53095 4.98506 3.14725 4.98562 2.74809C4.98617 2.34894 4.83349 1.96481 4.55908 1.675C4.55908 1.675 3.63156 0.471257 3.61603 0.455728C3.33029 0.168067 2.94287 0.00439903 2.53748 8.7387e-05C2.13209 -0.00422425 1.74128 0.151166 1.44948 0.432685L0.873539 0.933617C-2.9923 5.04627 6.98355 15.0288 11.0903 11.1025L11.547 10.5766C11.8371 10.2855 12 9.89126 12 9.48027C12 9.06928 11.8371 8.67506 11.547 8.38398C11.5305 8.37046 10.3245 7.44273 10.3245 7.44273V7.44223Z" fill="white"/>
            </svg>
          </a>
          <a href="https://t.me/texnoreal_company" target="_blank" aria-label="Telegram" class="h-[34px] w-[34px] flex items-center justify-center bg-[#EF7C00] rounded-[7px]">
            <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.9058 0.0743542C12.7932 0.116072 9.88883 1.25847 6.45295 2.60946C2.60127 4.1241 0.175213 5.09322 0.128318 5.13814C0.0314004 5.2312 -0.0186214 5.41733 0.00638951 5.56815C0.0564114 5.82808 0.0720432 5.8345 1.87596 6.46025C3.25156 6.93839 3.5298 7.02503 3.58608 6.99615C3.62047 6.97369 4.02064 6.72659 4.47084 6.44099C4.92416 6.1586 6.62803 5.0868 8.25999 4.06313C11.3051 2.15378 11.327 2.14415 11.327 2.32707C11.327 2.36557 10.3203 3.3379 8.49134 5.06755C6.93129 6.54047 5.62134 7.78235 5.57757 7.82728C5.50567 7.9075 5.50254 7.93959 5.39937 9.43819C5.32746 10.5164 5.30558 10.9978 5.32746 11.0587C5.36185 11.1646 5.49941 11.2416 5.59633 11.2096C5.63385 11.1999 6.07154 10.7796 6.57176 10.2789C7.07197 9.77835 7.49091 9.3676 7.50341 9.3676C7.51904 9.3676 8.25999 9.93238 9.14788 10.6255C10.0358 11.3187 10.8142 11.9123 10.8736 11.9444C11.1112 12.0728 11.4551 11.9701 11.6208 11.7262C11.674 11.646 11.9522 10.3977 12.8432 6.23883C13.481 3.27693 14 0.809214 14 0.75787C14 0.565331 13.925 0.401671 13.7655 0.238013C13.5217 -0.0154972 13.2747 -0.0604229 12.9058 0.0743542Z" fill="white"/>
            </svg>
          </a>
        </div>

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
      <NuxtLink v-for="link in links" :key="link.to" :to="link.to">{{ link.label }}</NuxtLink>
      <button
          class="px-4 py-[9px] border border-black text-black text-[14px] font-medium rounded-[4px]"
          @click="handleButtonClick"
      >
        Обсудить проект
      </button>
    </div>
  </Drawer>
  <Dialog
      v-model:visible="dialogVisible"
      modal
      header="Расскажите о вашем проекте"
      class="max-w-[90%] md:max-w-[60%]"
  >
    <BlockForm @send="dialogVisible = false"/>
  </Dialog>
</template>

<style scoped>

</style>