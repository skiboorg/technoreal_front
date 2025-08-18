<script setup lang="ts">

</script>

<template>
<section>
  <div class="container">

<p class="text-[36px] md:text-[80px] manrope-font leading-[100%] mb-[50px] md:mb-0  relative max-w-[255px] md:max-w-[355px]">Обсудить
  проект
  <svg  class="hidden md:inline-block absolute bottom-0 right-0" width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M48 4H1M48 4V51M48 4L3.33585 48.6086" stroke="#2C2C2C" stroke-width="7"/>
  </svg>
  <svg class="inline-block md:hidden absolute bottom-[2px] left-[140px]" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 2H0.999999M19 2V20M19 2L1.89458 19.0842" stroke="#2C2C2C" stroke-width="3"/>
  </svg>

</p>
    <div class="grid grid-cols-12 pb-[80px] md:pb-[160px] border-b border-black">
      <div class="col-start-1 col-end-13 md:col-start-7 md:col-end-13">
        <div class="grid grid-cols-12 gap-7">
          <div class="col-span-12">
            <FloatLabel variant="on">
              <InputText fluid id="over_label" v-model="value1" />
              <label for="over_label">Ваше имя</label>
            </FloatLabel>
          </div>
          <div class="col-span-12">
            <FloatLabel variant="on">
              <InputText fluid id="over_label" v-model="value1" />
              <label for="over_label">Номер телефона</label>
            </FloatLabel>
          </div>
          <div class="col-span-12">
            <FloatLabel variant="on">
              <InputText fluid id="over_label" v-model="value1" />
              <label for="over_label">Расскажите про ваш проект</label>
            </FloatLabel>
          </div>

          <div class="col-span-12">
            <Button severity="contrast" fluid label="Рассчитать стоимость"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<style scoped>

</style>