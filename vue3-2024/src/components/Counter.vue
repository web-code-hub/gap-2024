<template>
    <button @click="count++" class="px-4 py-2  bg-sky-500 text-white rounded hover:bg-sky-600">2024-{{count}}</button>
</template>
<script setup lang="ts">
const count = defineModel<Number>({default:0})
</script>
<style scoped>
</style>