<script setup>
import { ref, reactive, onMounted, watch, computed } from 'vue'
import { apiCalls } from '@/utilities/apiCalls.js'
import FooterNav from '@/components/shared/FooterNav.vue'
import PageHeader from '@/components/shared/PageHeader.vue'
import { getProduse, getDesfacere } from '@/data/doar-romaneste.js'

// init const
const { produse } = getProduse()
const { desfacere } = getDesfacere()
const doarProduse = ref(produse)
const doarDesfacere = ref(desfacere)

const searchTerm = ref('')

const filteredEntries = computed(() => {
  let search = searchTerm.value  
  return doarProduse.value.filter(
    (produs) =>
      produs.denumire.toLowerCase().includes(search.toLowerCase()) ||
      produs.brand.toLowerCase().includes(search.toLowerCase())
  )
})

const filteredEntries2 = computed(() => {
  let search = searchTerm.value  
  return doarDesfacere.value.filter(
    (item) =>
      item.nume.toLowerCase().includes(search.toLowerCase()) ||
      item.oras.toLowerCase().includes(search.toLowerCase())
  )
})
</script>

<template>
  <div class="container-full container-xl">
    <div class="d-flex flex-row mt-5 align-items-top">
      <div class="flex-fill">
        <PageHeader
          title="Susține Economia Românească"
          subtitle="Cumpară de la producătorii Români si companiile Românesti cu pachet deținut majoritar sau 100% Românesc."
        />
      </div>
      <div class="drapel ps-3">
        <img
          src="@/assets/images/drapel_stema_Romaniei.png"
          alt="Drapel cu Stema Romaniei"
        />
      </div>
    </div>
    <main>
      <div class="quick-search mt-5 mb-5">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label fs-4"
            >Cautare rapida</label
          >
          <div class="input-group mb-3">
            <input
              v-model="searchTerm"
              type="text"
              class="form-control form-control-lg"
              placeholder="ex: miere lapte Tulcea"
              aria-label="cauta rapid"
              aria-describedby="buton-cauta-rapid"
            />
            <button
              @click="generateEntries()"
              class="btn btn-primary btn-lg text-capitalize"
              type="button"
              id="buton-cauta-rapid"
            >
              reseteaza cautarea
            </button>
          </div>

          <div id="ajutorAautareRapida" class="form-text fs-5">
            Poti sa cauti dupa numele de producator, produs, locatie sau orice
            combinatie doresti.
          </div>
        </div>
      </div>

      <h3>Produse</h3>
      <div class="search-results d-flex flex-wrap">
        <div
          v-for="(produs, index) in filteredEntries"
          :key="index"
          class="col-md-3"
        >
          <div class="p-3 mx-2 search-results__items">
            <div class="mb-2"><span class="tag tag-produs py-1 px-2 rounded-2">{{ produs?.denumire }}</span></div>
            <div>{{ produs?.brand }}</div>
            <div>{{ produs?.url }}</div>
          </div>
        </div>
      </div>

      <hr class="mt-5" />

      <h3 class="mt-5">Magazine / Puncte de Desfacere</h3>
      <div class="search-results d-flex flex-wrap">
        <div
          v-for="(item, index) in filteredEntries2"
          :key="index"
          class="col-md-3"
        >
          <div class="p-3 mx-2 search-results__items">
            <div class="fw-bold">{{ item?.oras }}</div>
            <div>{{ item?.nume }}</div>
            <div><a href="" target="_blank">{{ item?.url }}</a></div>
          </div>
        </div>
      </div>
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
.tag {
  &-produs {
    background-color: lighten($color: $primary, $amount: 52);
    font-weight: bold;
  }
}
</style>
