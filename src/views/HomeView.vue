<script setup>
import NavBar from '@/components/shared/NavBar.vue'
import FooterNav from '@/components/shared/FooterNav.vue'
import PageHeader from '@/components/shared/PageHeader.vue'
</script>

<template>
  <div class="container-full container-xl">
    <NavBar />
    <main>
      <PageHeader
        title="Just Clean, Simple resume"
        subtitle="Accept or apply to jobs only when you want!"
      />
      <ResumeHeaderHome />
    </main>
    <FooterNav />
  </div>
</template>
