<script setup lang="ts">

</script>

<template>
<section>
  <div class="container">

    <BlockTitleWithSmallText extra_class="md:!max-w-[60%] mb-[60px] md:mb-[150px]"  small-text="Пересчитаем смету"
                             big-text="Предоставьте нам смету от другой компании —    мы предложим более выгодные условия без потери качества"/>

    <div class="grid grid-cols-12 pb-[80px] md:pb-[140px] mb-[80px] md:mb-[140px] border-b border-black">
      <div class="col-span-12 md:col-start-7 md:col-end-13">
        <div class="grid grid-cols-12 gap-[30px] md:gap-7">
          <div class="col-span-12 md:col-span-6">
            <FloatLabel variant="on">
              <InputText fluid id="over_label" v-model="value1" />
              <label for="over_label">Ваше имя</label>
            </FloatLabel>
          </div>
          <div class="col-span-12 md:col-span-6">
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
          <div class="col-span-12 relative">
            <FloatLabel variant="on" class="">
              <InputText readonly fluid  v-model="value1" />
              <label>Прикрепить смету</label>

            </FloatLabel>
            <label class="absolute right-0 top-[10px] border-b border-black cursor-pointer">
              Выбрать файл
              <input type="file" class="hidden" @change="handleFileChange" />
            </label>
          </div>
          <div class="col-span-12">
            <Button fluid label="Рассчитать стоимость"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<style scoped>

</style>