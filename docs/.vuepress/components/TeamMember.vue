<template>
  <a
    :href="profileUrl"
    class="block text-center group transition-transform duration-200 hover:-translate-y-2 active:translate-y-0"
  >
    <div class="relative w-48 h-48 mx-auto mb-4">
      <!-- Image container to control scaling bounds -->
      <img
        :src="image"
        :alt="name"
        class="rounded-full w-full h-full object-cover grayscale transition-all duration-200 transform group-hover:scale-[1.05]"
      >
      <!-- Overlay mit highlight-color-light Variable -->
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] h-[115%] rounded-full overlay-bg opacity-0 group-hover:opacity-25 transition-opacity duration-200"
      />
    </div>

    <h4
      class="font-semibold text-gray-900 dark:text-gray-50 transition-colors duration-200 group-hover:text-gray-600 group-hover:dark:text-gray-300"
    >
      {{ name }}
    </h4>
    <p class="text-sm text-gray-600 dark:text-gray-300">{{ role }}</p>
  </a>
</template>

<script setup lang="ts">
  defineProps<{
    name: string
    role: string
    image: string
    profileUrl: string
  }>()
</script>

<style>
  .overlay-bg {
    background-color: var(--highlight-color-light);
  }
</style>
