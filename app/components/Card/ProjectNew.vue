<script setup lang="ts">
defineProps<{
  image: string
  title: string
  tag?: string
}>()
</script>

<template>
  <div class="group relative overflow-hidden cursor-pointer h-[325px]">
    <!-- Картинка -->
    <img
      :src="image"
      alt=""
      class="absolute inset-0 w-full h-full object-cover transition-all duration-500 grayscale group-hover:grayscale-0"
    />

    <!-- Тёмный оверлей (убирается при ховере) -->
    <div
      class="absolute inset-0 bg-black/40 transition-opacity duration-500 group-hover:opacity-0"
    />

    <!-- Текст и тег (центр, скрываются при ховере) -->
    <div
      class="absolute inset-0 flex flex-col items-center justify-center gap-3 transition-opacity duration-500 group-hover:opacity-0"
    >
      <p class="manrope-font text-white text-[22px] md:text-[32px] font-medium leading-[100%] tracking-[-0.03em] text-center px-4">
        {{ title }}
      </p>
      <span
        v-if="tag"
        class="px-3 py-1.5 rounded-[4px] bg-white/20 text-white text-[14px] font-medium leading-[100%] tracking-[-0.01em]"
      >
        {{ tag }}
      </span>
    </div>
  </div>
</template>
