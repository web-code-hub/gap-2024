<script setup lang="ts">
import { ref } from 'vue'
import Counter from './components/Counter.vue'
const n = ref(0)
</script>

<template>
  <Counter v-model="n" />
</template>

<style scoped>

</style>
