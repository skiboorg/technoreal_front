<script setup lang="ts">
const {$appFetch} = useNuxtApp()
const loading = ref(false)
const send = ref(false)

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
    send.value = true
  } catch (e) {
    console.error('Ошибка отправки формы:', e)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="grid grid-cols-12 gap-[30px] md:gap-7">
    <div class="col-span-12 md:col-span-6">
      <FloatLabel variant="on">
        <InputText fluid v-model="formData.name" />
        <label>Ваше имя</label>
      </FloatLabel>
    </div>
    <div class="col-span-12 md:col-span-6">
      <FloatLabel variant="on">
        <InputMask mask="+7(999) 999-99-99" fluid v-model="formData.phone" />
        <label>Номер телефона</label>
      </FloatLabel>
    </div>
    <div class="col-span-12">
      <FloatLabel variant="on">
        <InputText fluid v-model="formData.text" />
        <label>Расскажите про ваш проект</label>
      </FloatLabel>
    </div>
    <div class="col-span-12 relative">
      <FloatLabel variant="on">
        <InputText
            readonly
            fluid
            :value="formData.file ? formData.file.name : ''"
        />
        <label v-if="!formData.file">Прикрепить смету</label>
      </FloatLabel>
      <label class="absolute right-0 top-[10px] border-b border-black cursor-pointer">
        Выбрать файл
        <input type="file" class="hidden" @change="handleFileChange" />
      </label>
    </div>
    <div class="col-span-12">
      <Button
          fluid
          :label="loading ? 'Отправка...' : 'Рассчитать стоимость'"
          :disabled="loading"
          @click="sendForm"
      />
      <p v-if="send" class="mt-4 text-green-600">✅ Ваш запрос успешно отправлен! Мы с вами свяжемся в течении 24-48 часов для уточнения деталей.</p>
    </div>
  </div>
</template>

<style scoped>

</style>