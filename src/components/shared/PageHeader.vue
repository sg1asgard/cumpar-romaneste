<script setup>
const props = defineProps({
  title: String,
  subtitle: String,
  required: true
})
</script>
<template>
  <h1 class="fs-1">{{ props?.title }}</h1>
  <h2 class="fs-4 text-gray-700">{{ props?.subtitle }}</h2>
</template>

<style lang="scss" scoped></style>
