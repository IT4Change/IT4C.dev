<template>
  <div class="border border-gray-300 rounded-lg p-6">
    <img :src="image" :alt="title" class="rounded-lg mb-4 w-full h-48 object-cover">
    <h3 class="text-xl font-semibold mb-2">{{ title }}</h3>
    <p class="text-gray-600 mb-4">{{ description }}</p>
    <div class="flex flex-wrap gap-2">
      <span
          v-for="tag in tags"
          :key="tag"
          class="tag px-3 py-1 bg-green-100 rounded-full text-sm"
      >
        {{ tag }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
  image: string
  tags: string[]
}>()
</script>

<style>
.tag {
  background: var(--highlight-color-light);
}
</style>