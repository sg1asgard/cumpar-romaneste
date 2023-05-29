<script setup>
import FooterNav from '@/components/shared/FooterNav.vue'
import PageHeader from '@/components/shared/PageHeader.vue'
</script>

<template>
  <div class="container-full container-xl">
    <PageHeader
      title="Susține Economia Românească"
      subtitle="Cumpară de la producătorii Români si companiile Românesti cu pachet deținut majoritar sau 100% Românesc."
      class="has-separator"
    />
    <main>
      <h3 class="mt-5 text-capitalize">Cum pot sa ajut?</h3>
      <div>...</div>
    </main>

    <FooterNav />
  </div>
</template>

<style lang="scss" scoped>
.header-imagine-iconica {
  width: 100%;
  height: 300px;
  background-size: cover;
  background-position: center;
}
.drapel {
  width: 180px;
  img {
    width: 100%;
    height: auto;
  }
}
.search-results {
  margin: 0px -8px;
  &__items {
    word-wrap: break-word;
    border: 1px solid $gray-700;
    border-radius: $res-border-radius-m;
  }
}
.quick-search {
  &.with-bg {
    min-height: 260px;
    background-size: cover;
    background-position: center center;

    > div {
      max-width: 600px;
    }
    .search-box {
      label {
        color: $gray-300;
      }

      .descriere {
        color: $gray-300;
      }
    }
  }
  .floating-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 10;
  }
  .search-box {
    position: relative;
    z-index: 20;
  }
  .foto-credit {
    text-align: right;
  }
}
</style>
