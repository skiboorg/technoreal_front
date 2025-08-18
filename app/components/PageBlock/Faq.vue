<script setup lang="ts">
const faqs = [
  {q:"Какие виды продукции вы производите?",a:"Какие виды продукции вы производите?"},
  {q:"Какие виды продукции вы производите?",a:"Какие виды продукции вы производите?"},
  {q:"Какие виды продукции вы производите?",a:"Какие виды продукции вы производите?"},
  {q:"Какие виды продукции вы производите?",a:"Какие виды продукции вы производите?"},
  {q:"Какие виды продукции вы производите?",a:"Какие виды продукции вы производите?"},

]
</script>

<template>
<section>
  <div class="container">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-[50px] md:gap-0">
      <div class=""><h3 class="text-[36px] md:text-[80px] manrope-font leading-[100%]">Часто задаваемые вопросы</h3></div>
      <div class="">
        <Accordion expandIcon="pi pi-plus" collapseIcon="pi pi-minus">
          <AccordionPanel v-for="(item,index) in faqs" :value="index">

            <AccordionHeader><p><sup class="opacity-40 text-[12px]">0{{index+1}}</sup> {{item.q}}</p>
              <template #toggleicon>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="36" height="36" rx="7" fill="#F8F8F8"/>
                  <path d="M13.0501 22.9496L22.9496 13.0501M22.9496 13.0501L16.6414 12.9943M22.9496 13.0501L23.0054 19.3583" stroke="#2C2C2C" stroke-linecap="round"/>
                </svg>

              </template>
            </AccordionHeader>
            <AccordionContent>
              <p class="m-0" v-html="item.a"></p>
            </AccordionContent>
          </AccordionPanel>

        </Accordion>
      </div>
    </div>
  </div>
</section>
</template>

<style scoped>

</style>