<template>
  <section :id="id" :class="[backgroundColor]">
    <div class="content-width">
      <div class="py-16">
        <h1>{{ title }}</h1>
        <slot />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContentSection',
  props: {
    title: {
      type: String,
      required: true,
    },
    backgroundColor: {
      type: String,
      default: 'bg-white dark:bg-gray-900',
    },
    id: {
      type: String,
      default: '',
    },
  },
}
</script>
