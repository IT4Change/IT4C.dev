<template>
  <section :class="['full-width-section', backgroundColor]">
    <div class="content-width">
      <div class="py-16">
        <h1>{{ title }}</h1>
        <slot></slot>
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
      required: true
    },
    backgroundColor: {
      type: String,
      default: 'bg-transparent'
    }
  }
}
</script>