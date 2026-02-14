<template>
  <div class="grid grid-cols-12 items-start mb-16">
    <div class="col-span-3 text-right pr-8">
      <span class="text-5xl sm:text-6xl font-bold highlight-number">{{
        number.padStart(2, '0')
      }}</span>
    </div>
    <div class="col-span-9 pt-0 sm:pt-2">
      <h3 class="text-xl font-semibold mb-2">
        {{ title }}
      </h3>
      <p class="text-gray-600 dark:text-gray-300">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    number: string
    title: string
    description: string
  }>()
</script>

<style>
  .highlight-number {
    color: var(--highlight-color);
  }
</style>
