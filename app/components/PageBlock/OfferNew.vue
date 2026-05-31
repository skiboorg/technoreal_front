<script setup lang="ts">
const props = withDefaults(defineProps<{
  image: string
  title: string
  description?: string
  buttonLabel?: string
  tags?: string[]
}>(), {
  buttonLabel: 'Обсудить проект',
  tags: () => [],
  description: '',
})

const emit = defineEmits<{ buttonClick: [] }>()

const dialogVisible = ref(false)
const menuActive = ref(false)

const route = useRoute()
watch(() => route.fullPath, () => { menuActive.value = false })

const links = [
  { label: 'О нас', to: '/about' },
  { label: 'Услуги', to: '/services' },
  { label: 'Наши проекты', to: '/cases' },
  { label: 'Новости', to: '/news' },
  { label: 'Контакты', to: '/contacts' },
]

function handleButtonClick() {
  dialogVisible.value = true
  emit('buttonClick')
}
</script>

<template>
  <section class="relative flex flex-col h-[700px] md:h-[790px] mb-[80px] md:mb-[120px]">
    <!-- Фоновое изображение -->
    <img class="absolute inset-0 w-full h-full object-cover" :src="image" alt=""/>
    <div
      class="absolute inset-0"
      style="background: linear-gradient(180deg, rgba(24,11,1,0.2), rgba(24,11,1,0.2))"
    />

    <!-- Навигация поверх изображения -->
    <div class="relative z-10  py-5  border-b border-white">
      <div class="flex container items-center justify-between">
        <!-- Логотип -->
        <nuxt-link to="/" class="flex items-end gap-2">
          <svg class="filter brightness-0 invert" width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#offer-logo-clip)">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M21.9143 24.3638V40H17.084V19.4907H29.0229C32.9656 19.4907 36.1703 16.2575 36.1703 12.2799V12.0858C36.1703 8.10821 32.9656 4.875 29.0229 4.875H23.0738V0H29.0229C35.6322 0 41.0007 5.41791 41.0007 12.084V12.278C41.0007 18.9459 35.6304 24.3619 29.0229 24.3619H21.9143V24.3638Z" fill="#EF7C00"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5089 4.87313V40H7.97019V4.87313H0V0H20.5V4.87313H12.5089Z" fill="#3A3A39"/>
            </g>
            <defs>
              <clipPath id="offer-logo-clip">
                <rect width="41" height="40" fill="white"/>
              </clipPath>
            </defs>
          </svg>
          <p class="text-white text-[12px] font-semibold leading-[100%] uppercase tracking-[-0.01em]">ТЕХНОРЕАЛ</p>
        </nuxt-link>

        <!-- Десктоп-навигация -->
        <nav class="hidden md:flex items-center gap-[42px]">
          <div class="flex gap-7">
            <nuxt-link
              v-for="link in links"
              :key="link.to"
              :to="link.to"
              class="text-white text-[12px] font-medium leading-[100%] tracking-[-0.01em] hover:text-white/70 transition-colors"
            >
              {{ link.label }}
            </nuxt-link>
          </div>
          <div class="flex items-center gap-3">
            <a href="tel:+79685458877" target="_blank" aria-label="Телефон" class="p-2  border border-white rounded-md hover:bg-white/10 transition-colors">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.3245 7.44223C10.0354 7.16703 9.65132 7.0138 9.25217 7.01436C8.85302 7.01492 8.46942 7.16922 8.18102 7.44523L7.22645 8.24973C6.44731 7.92723 5.73953 7.45397 5.14376 6.85712C4.54798 6.26027 4.07595 5.55158 3.75476 4.77176L4.55608 3.81999C4.8313 3.53095 4.98506 3.14725 4.98562 2.74809C4.98617 2.34894 4.83349 1.96481 4.55908 1.675C4.55908 1.675 3.63156 0.471257 3.61603 0.455728C3.33029 0.168067 2.94287 0.00439903 2.53748 8.7387e-05C2.13209 -0.00422425 1.74128 0.151166 1.44948 0.432685L0.873539 0.933617C-2.9923 5.04627 6.98355 15.0288 11.0903 11.1025L11.547 10.5766C11.8371 10.2855 12 9.89126 12 9.48027C12 9.06928 11.8371 8.67506 11.547 8.38398C11.5305 8.37046 10.3245 7.44273 10.3245 7.44273V7.44223Z" fill="white"/>
              </svg>

            </a>
            <a href="https://t.me/texnoreal_company" target="_blank" aria-label="Telegram" class="p-2  border border-white rounded-md hover:bg-white/10 transition-colors">
              <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.9058 0.0743542C12.7932 0.116072 9.88883 1.25847 6.45295 2.60946C2.60127 4.1241 0.175213 5.09322 0.128318 5.13814C0.0314004 5.2312 -0.0186214 5.41733 0.00638951 5.56815C0.0564114 5.82808 0.0720432 5.8345 1.87596 6.46025C3.25156 6.93839 3.5298 7.02503 3.58608 6.99615C3.62047 6.97369 4.02064 6.72659 4.47084 6.44099C4.92416 6.1586 6.62803 5.0868 8.25999 4.06313C11.3051 2.15378 11.327 2.14415 11.327 2.32707C11.327 2.36557 10.3203 3.3379 8.49134 5.06755C6.93129 6.54047 5.62134 7.78235 5.57757 7.82728C5.50567 7.9075 5.50254 7.93959 5.39937 9.43819C5.32746 10.5164 5.30558 10.9978 5.32746 11.0587C5.36185 11.1646 5.49941 11.2416 5.59633 11.2096C5.63385 11.1999 6.07154 10.7796 6.57176 10.2789C7.07197 9.77835 7.49091 9.3676 7.50341 9.3676C7.51904 9.3676 8.25999 9.93238 9.14788 10.6255C10.0358 11.3187 10.8142 11.9123 10.8736 11.9444C11.1112 12.0728 11.4551 11.9701 11.6208 11.7262C11.674 11.646 11.9522 10.3977 12.8432 6.23883C13.481 3.27693 14 0.809214 14 0.75787C14 0.565331 13.925 0.401671 13.7655 0.238013C13.5217 -0.0154972 13.2747 -0.0604229 12.9058 0.0743542Z" fill="white"/>
              </svg>

            </a>
            <button
              class="px-4 py-[9px] border border-white text-white text-[14px] font-medium rounded-[4px] leading-[100%] tracking-[-0.01em] hover:bg-white/10 transition-colors"
              @click="handleButtonClick"
            >
              Обсудить проект
            </button>
          </div>
        </nav>

        <!-- Мобильная шапка -->
        <div class="flex items-center gap-3 md:hidden">
          <a href="tel:+79685458877" target="_blank" aria-label="Телефон">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="28" height="28" rx="7" fill="rgba(255,255,255,0.2)"/>
              <path d="M18.3245 15.4422C18.0354 15.167 17.6513 15.0138 17.2522 15.0144C16.853 15.0149 16.4694 15.1692 16.181 15.4452L15.2265 16.2497C14.4473 15.9272 13.7395 15.454 13.1438 14.8571C12.548 14.2603 12.076 13.5516 11.7548 12.7718L12.5561 11.82C12.8313 11.5309 12.9851 11.1472 12.9856 10.7481C12.9862 10.3489 12.8335 9.96481 12.5591 9.675C12.5591 9.675 11.6316 8.47126 11.616 8.45573C11.3303 8.16807 10.9429 8.0044 10.5375 8.00009C10.1321 7.99578 9.74128 8.15117 9.44948 8.43268L8.87354 8.93362C5.0077 13.0463 14.9836 23.0288 19.0903 19.1025L19.547 18.5766C19.8371 18.2855 20 17.8913 20 17.4803C20 17.0693 19.8371 16.6751 19.547 16.384C19.5305 16.3705 18.3245 15.4427 18.3245 15.4427V15.4422Z" fill="white"/>
            </svg>
          </a>
          <button @click="menuActive = true" aria-label="Меню">
            <svg width="30" height="9" viewBox="0 0 30 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="30" height="2" rx="1" fill="white"/>
              <rect x="10" y="7" width="20" height="2" rx="1" fill="white"/>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Контент хиро (внизу) -->
    <div class="relative z-10 container mt-auto pb-[50px] md:pb-[60px]">
      <div class="flex md:hidden flex-col gap-3 items-start justify-end mb-[60px]">
        <button
            v-for="tag in tags"
            :key="tag"
            class="px-4 py-3 rounded-[7px] bg-white/20 text-white text-[13px] font-normal leading-[100%] tracking-[-0.01em]"
        >
          {{ tag }}
        </button>
      </div>
      <h1 class="text-white manrope-font text-[28px] md:text-[48px] font-semibold leading-[100%] tracking-[-0.03em] mb-5 md:max-w-[65%]">
        {{ title }}
      </h1>
      <p
        v-if="description"
        class="text-white/80 text-[16px] font-semibold leading-[140%] mb-7 md:max-w-[45%]"
      >
        {{ description }}
      </p>
      <div class="flex flex-wrap gap-3 items-end justify-between w-full">
        <div class="">
          <button
              class="flex items-center gap-2 px-5 py-[14px] bg-white text-black text-[14px] font-semibold rounded-[4px] leading-[100%] tracking-[-0.01em]
          hover:bg-white/80 transition-colors"
              @click="handleButtonClick"
          >
            {{ buttonLabel }}
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.79811 10.7553L10.6976 0.855809M10.7534 7.16395L10.6976 0.855809L4.38947 0.799985" stroke="#1E1E1E" stroke-width="1.6" stroke-linecap="round"/>
            </svg>

          </button>
        </div>
        <div class="hidden md:flex flex-col gap-3 items-end justify-end">
          <button
              v-for="tag in tags"
              :key="tag"
              class="px-4 py-3 rounded-[7px] bg-white/20 text-white text-[16px] font-normal leading-[100%] tracking-[-0.01em]"
          >
            {{ tag }}
          </button>
        </div>


      </div>
    </div>

    <!-- Мобильное меню -->
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

    <!-- Диалог -->
    <Dialog
      v-model:visible="dialogVisible"
      modal
      header="Расскажите о вашем проекте"
      class="max-w-[90%] md:max-w-[60%]"
    >
      <BlockForm @send="dialogVisible = false"/>
    </Dialog>
  </section>
</template>
