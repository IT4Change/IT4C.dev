<template>
  <figure>
    <img :src="src" alt="" :width="width"/>
    <figcaption>{{ caption }}</figcaption>
  </figure>
</template>
<script>
export default {
  props: ['src', 'caption', 'width'],
}
</script>

<style lang="scss">
figcaption {
    font-style: italic;
}
</style>