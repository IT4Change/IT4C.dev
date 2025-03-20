<template>
  <figure>
    <img
      :src="src"
      alt=""
      :width="width"
    >
    <figcaption>{{ caption }}</figcaption>
  </figure>
</template>

<script setup lang="ts">
  defineProps<{
    src: string
    caption: string
    width: string
  }>()
</script>

<style lang="scss">
figcaption {
    font-style: italic;
}
</style>