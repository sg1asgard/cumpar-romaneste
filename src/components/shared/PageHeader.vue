<script setup>
const props = defineProps({
  title: String,
  subtitle: String,
  required: true
})
</script>
<template>
  <div class="d-flex flex-row mt-5 align-items-top">
    <div class="flex-fill">
      <h1 class="fs-1 text-primary">{{ props?.title }}</h1>
      <h2 class="fs-4 text-gray-700">{{ props?.subtitle }}</h2>
    </div>
    <div class="drapel ps-3">
      <RouterLink :to="{ name: 'home' }">
        <img
          src="@/assets/images/drapel_stema_Romaniei.png"
          alt="Drapel cu Stema Romaniei"
        />
      </RouterLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.drapel {
  width: 180px;
  img {
    width: 100%;
    height: auto;
  }
}
</style>
