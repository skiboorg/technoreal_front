<script setup lang="ts">
const route = useRoute()


async function scrollToHash(hash: string | null) {
  if (!hash) return
  await nextTick() // дать Vue рендернуть текущий компонент
  // быстрый ретрай (если элемент рендерится чуть позже)
  for (let i = 0; i < 10; i++) {
    const el = document.querySelector(hash)
    if (el) { el.scrollIntoView({ behavior: 'smooth' }); return }
    // small delay
    await new Promise(r => setTimeout(r, 40))
  }
}

// при прямом заходе
onMounted(() => scrollToHash(route.hash))

// при переходе внутри SPA
watch(() => route.hash, (newHash) => {
  scrollToHash(newHash)
})
</script>

<template>
  <div class="container">
    <BlockSectionTitle class="md:!mb-[115px]" title="Контакты" :is_h1="true"/>
    <div class="grid grid-cols-1 md:grid-cols-2 py-7  md:py-10 border-t border-black">

      <p class="text-[20px] md:text-[32px] font-semibold mb-4 md:mb-0"><a href="mailto:info@texnoreal.com">info@texnoreal.com</a></p>
      <p class="text-gray-500">Почта</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 py-7  md:py-10 border-t border-black">
      <p class="text-[20px] md:text-[32px] font-semibold mb-4 md:mb-0"><a href="tel:89685458877 ">+7 (968) 545-88-77 </a></p>
      <p class="text-gray-500">Телефон</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 py-7  md:py-10 border-t border-black items-center">
      <p class="text-[20px] md:text-[32px] font-semibold mb-4 md:mb-0">Москва</p>
      <div class="flex flex-col md:flex-row items-start md:items-center md:justify-between gap-4">
        <div class="">
          <p class="text-gray-500">Россия, Московская область, г.Лобня, Промышленная 3</p>
          <p class="text-gray-500">Время работы офиса с 9:00 - 17:00</p>
        </div>
        <a href="https://yandex.ru/maps/21641/lobnja/house/promyshlennaya_ulitsa_3/Z04Ycg9jSkYAQFtsfXxwdnVmZQ==/?ll=37.483337%2C56.017951&z=17" target="_blank" class="inline-flex items-center gap-2  pb-1 font-semibold border-b border-black leading-[75%]" >
          На карте
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.16753 11.0748L10.9395 1.30283M10.9395 1.30283L4.7266 1.26168M10.9395 1.30283L10.9807 7.51577" stroke="#2C2C2C" stroke-width="1.7" stroke-linecap="round"/>
        </svg>
        </a>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 py-7  md:py-10 border-t border-black items-center">
      <p class="text-[20px] md:text-[32px] font-semibold mb-4 md:mb-0">Юридическая информация</p>
      <div class="">
        <p class="text-gray-500">ООО «Компания Технореал»</p>
        <p class="text-gray-500">ИНН 7734417048 ОГРН 118774689341</p>
        <p class="text-gray-500">КПП 773401001</p>
        <p class="text-gray-500">ОКПО 33822616</p>
        <p class="text-gray-500">ИП Кайтазова А.А.</p>
        <p class="text-gray-500">ОГРНИП. 322508100099740 ИНН. 571901359606</p>
      </div>
    </div>
    <div id="form" class="grid grid-cols-1 md:grid-cols-2 py-7 md:py-[60px] border-t border-b border-black items-center">
      <p class="text-[20px] md:text-[32px] font-semibold mb-4 md:mb-0">Обсудить проект</p>
      <BlockForm/>
    </div>
  </div>
</template>
