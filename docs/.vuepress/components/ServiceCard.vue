<template>
  <div class="p-6 border rounded-lg">
    <h3 class="text-xl font-semibold mb-4">{{ title }}</h3>
    <ul class="space-y-2 text-gray-600">
      <li v-for="item in items" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  items: string[]
}>()
</script>
