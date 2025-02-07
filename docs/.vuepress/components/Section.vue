<template>
    <div class="box">
        Ich bin eine Vue-Komponente. Inhalt: {{ content }}
    </div>
</template>

<script setup lang="ts">
defineProps<{ content: string }>();
</script>

<style scoped>
.box {
    border: 1px solid black;
    padding: 10px;
}
</style>
