<template>
  <div class="text-center">
    <img :src="image" :alt="name" class="rounded-full mx-auto mb-4 w-48 h-48 object-cover">
    <h4 class="font-semibold">{{ name }}</h4>
    <p class="text-sm text-gray-600">{{ role }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string
  role: string
  image: string
}>()
</script>
