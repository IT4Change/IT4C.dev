<template>
  <div class="grid grid-cols-12 items-start mb-16">
    <div class="col-span-3 text-right pr-8">
      <span class="text-6xl font-bold text-green-600">{{ number.padStart(2, '0') }}</span>
    </div>
    <div class="col-span-9 pt-4">
      <h3 class="text-xl font-semibold mb-2">{{ title }}</h3>
      <p class="text-gray-600">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    number: String,
    title: String,
    description: String
  }
}
</script>