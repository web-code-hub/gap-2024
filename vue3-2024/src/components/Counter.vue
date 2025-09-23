<template>
    <button @click="count++">2024-{{count}}</button>
</template>
<script setup lang="ts">
const count = defineModel<Number>({default:0})
</script>
<style scoped>
</style>