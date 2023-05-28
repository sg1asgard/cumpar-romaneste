<script setup>
// tag_type can have `produs` or `desfacere` as values
const props = defineProps({
  tag_type: {
    type: String,
    required: true,
  },
}) 
</script>

<template>
  <span :class="`tag tag-${tag_type} py-1 px-2 rounded-2`"><slot></slot></span>
</template>

<style lang="scss" scoped>
.tag {
  &-produs {
    background-color: lighten($color: $primary, $amount: 52);
    font-weight: bold;
  }
  &-desfacere {
    background-color: lighten($color: $primary, $amount: 52);
    font-weight: bold;
  }
}
</style>
