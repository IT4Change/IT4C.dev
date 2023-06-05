<template>
    <div v-html="md.render(README_MD)"></div>
</template>
<script>
import { defineComponent } from 'vue'
import MarkdownIt from 'markdown-it'

export default defineComponent({
    props: {
        README_MD: { type: String}
    },
    data() {
        return {
            md: new MarkdownIt()
        }
    },
})
</script>

