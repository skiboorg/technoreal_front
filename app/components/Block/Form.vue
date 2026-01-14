<script setup lang="ts">
const {$appFetch} = useNuxtApp()
const loading = ref(false)
const send = ref(false)
const agree = ref(false)

const emits = defineEmits(['send'])

const formData = ref({
  name: '',
  phone: '',
  text: '',
  file: null as File | null,
})

const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (target.files && target.files.length > 0) {
    formData.value.file = target.files[0]
  }
}

const sendForm = async () => {
  loading.value = true

  // Собираем данные в FormData
  const fd = new FormData()
  fd.append('name', formData.value.name || '')
  fd.append('phone', formData.value.phone || '')
  fd.append('text', formData.value.text || '')
  if (formData.value.file) {
    fd.append('file', formData.value.file)
  }

  try {
    await $appFetch('/api/data/form', {
      method: 'POST',
      body: fd, // FormData напрямую
    })
    emits('send')
    navigateTo('/thanks')
  } catch (e) {
    console.error('Ошибка отправки формы:', e)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="grid grid-cols-12 gap-3 md:gap-7">
    <div class="col-span-12 md:col-span-6">
      <FloatLabel variant="on">
        <InputText fluid v-model="formData.name" />
        <label>Ваше имя*</label>
      </FloatLabel>
    </div>
    <div class="col-span-12 md:col-span-6">
      <FloatLabel variant="on">
        <InputMask mask="+7(999) 999-99-99" fluid v-model="formData.phone" />
        <label>Номер телефона*</label>
      </FloatLabel>
    </div>
    <div class="col-span-12">
      <FloatLabel variant="on">
        <InputText fluid v-model="formData.text" />
        <label>Расскажите о вашем проекте</label>
      </FloatLabel>
    </div>
    <div class="col-span-12 relative">
      <FloatLabel variant="on">
        <InputText
            readonly
            fluid
            :value="formData.file ? formData.file.name : ''"
        />
        <label class="!leading-[120%]" v-if="!formData.file">Прикрепить файл <br class="block md:hidden"> <span>(не обязательно)</span>  </label>
      </FloatLabel>
      <label class="absolute right-0 top-[10px] border-b border-black cursor-pointer">
        Выбрать файл
        <input type="file" class="hidden" @change="handleFileChange" />
      </label>

    </div>
    <div class="col-span-12">
      <div class="flex items-center gap-2">
        <Checkbox v-model="agree"  inputId="agree" name="agree" value="Cheese"  />
        <label for="agree"> Соглашаюсь на обработку персональных данных и ознакомлен(а) с <a class="inline-block border-b" target="_blank" href="/policy.pdf">политикой конфиденциальности </a></label>
      </div>
    </div>
    <div class="col-span-12 mt-3">
      <Button
          fluid
          :label="loading ? 'Отправка...' : 'Рассчитать стоимость'"
          :loading="loading"
          :disabled="!agree || !formData.name || !formData.phone "
          @click="sendForm"
      />
      <p v-if="send" class="mt-4 text-green-600">✅ Ваш запрос успешно отправлен! Мы с вами свяжемся в течении 24-48 часов для уточнения деталей.</p>
    </div>
  </div>
</template>

<style scoped>

</style>