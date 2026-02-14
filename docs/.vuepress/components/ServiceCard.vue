<template>
  <div class="p-6 border border-gray-300 rounded-lg">
    <h3 class="text-xl font-semibold mb-4">
      {{ title }}
    </h3>
    <ul class="space-y-2 text-gray-600 dark:text-gray-300">
      <li v-for="item in items" :key="item">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    title: string
    items: string[]
  }>()
</script>
