<template>
  <a :href="href" :target="target">
    <div class="border border-gray-300 rounded-lg p-6">
      <img :src="image" :alt="title" class="rounded-lg mb-4 w-full h-auto object-contain" />
      <h3 class="text-xl font-semibold mb-2">{{ title }}</h3>
      <p class="text-gray-600 dark:text-gray-300 mb-4">{{ description }}</p>
      <div class="flex flex-wrap gap-2">
        <span v-for="tag in tags" :key="tag" class="tag px-3 py-1 rounded-full text-sm">
          {{ tag }}
        </span>
      </div>
    </div>
  </a>
</template>

<script setup lang="ts">
  defineProps<{
    title: string
    description: string
    image: string
    tags: string[]
    href: string
    target?: string
  }>()
</script>

<style>
  .tag {
    color: var(--highlight-color);
    background: var(--highlight-color-light);
  }
</style>
