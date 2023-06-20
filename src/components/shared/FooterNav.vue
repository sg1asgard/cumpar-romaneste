<script setup></script>
<template>
  <div class="d-flex flex-column flex-md-row mt-5 pb-5">
    <div class="flex-fill">
      <div class="mb-2 fw-bold text-gray-700">Copyright&copy;2023</div>
      <div>
        <RouterLink :to="{ name: 'acasa' }" class="me-3"
          >Prima Pagina</RouterLink
        >
        <RouterLink :to="{ name: 'cum-ajut' }" class="me-3"
          >Cum ajut?</RouterLink
        >
        <RouterLink :to="{ name: 'politica-de-confidentialitate' }" class="me-3"
          >Politica de Confidentialitate</RouterLink
        >
        <RouterLink :to="{ name: 'termeni-si-conditii' }" class="me-3"
          >Termeni si Conditii</RouterLink
        >
        <RouterLink :to="{ name: 'politica-de-cookies' }" class="me-3"
          >Politica Cookies</RouterLink
        >
        <RouterLink :to="{ name: 'declinarea-raspunderii' }" class="me-3"
          >Declinarea Raspunderii</RouterLink
        >
      </div>
    </div>
    <div class="website-by text-left">
      <a href="https://www.supakyattsu.com" target="_blank" class="mt-3 mt-md-0">
        <img
          src="https://supakyattsu.com/assets/logo_horizontal.b0944399.svg"
          alt="Website creat de Supakyattsu.com"
        />
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.website-by {
  a {
    display: inline-block;
    img {
      width: 100%;
      height: 80px;
    }
  }
}
</style>
