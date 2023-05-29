<script setup>
import { ref, reactive, onMounted, watch, computed } from 'vue'
import { apiCalls } from '@/utilities/apiCalls.js'
import FooterNav from '@/components/shared/FooterNav.vue'
import PageHeader from '@/components/shared/PageHeader.vue'
import { getProduse, getDesfacere } from '@/data/doar-romaneste.js'
import { getFotoRomania } from '@/data/foto-romania.js'
import TagEntitati from '@/components/shared/TagEntitati.vue'

// init const
const { produse } = getProduse()
const { desfacere } = getDesfacere()
const { fotoRomania } = getFotoRomania()
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

const arrNumber = ref(0)
const fotoRandom = () => {
  let max = fotoRomania.length
  arrNumber.value = Math.floor(Math.random() * max)
}

onMounted(() => {
  fotoRandom()
})
</script>

<template>
  <div class="container-full container-xl">
    <PageHeader
      title="Susține Economia Românească"
      subtitle="Cumpară de la producătorii Români si companiile Românesti cu pachet deținut majoritar sau 100% Românesc."
    />

    <main>
      <div
        class="position-relative d-flex flex-row align-items-center justify-content-center rounded-3 overflow-hidden mt-3 px-5 quick-search with-bg"
        :style="`background-image: url(/foto/${fotoRomania[arrNumber].url})`"
      >
        <div>
          <div class="search-box">
            <label for="exampleFormControlInput1" class="form-label fs-4"
              >Cautare rapida</label
            >
            <div class="input-group mb-3 rounded-3">
              <input
                v-model="searchTerm"
                type="text"
                class="form-control form-control-lg"
                placeholder="ex: miere lapte Tulcea"
                aria-label="cauta rapid"
                aria-describedby="buton-cauta-rapid"
              />
              <button
                @click="searchTerm = ''"
                class="btn btn-primary btn-lg text-capitalize"
                type="button"
                id="buton-cauta-rapid"
              >
                Sterge
              </button>
            </div>

            <div id="ajutorAautareRapida" class="form-text fs-5 descriere">
              Poti sa cauti dupa numele de producator, produs sau locatie.
            </div>
          </div>
          <div class="floating-overlay"></div>
        </div>
      </div>
      <div class="foto-credit mt-2 mb-5 text-end">
        <span class="d-inline-block text-gray-700 me-2"
          >Fotografie fundal de</span
        >
        <a :href="fotoRomania[arrNumber].url_autor" target="_blank">{{
          fotoRomania[arrNumber].autor
        }}</a>
      </div>

      <h3>Produse</h3>
      <div class="search-results d-flex flex-wrap">
        <div
          v-for="(produs, index) in filteredEntries"
          :key="index"
          class="col-md-3"
        >
          <div class="p-3 mx-2 search-results__items">
            <div class="mb-3">
              <TagEntitati tag_type="produs">{{
                produs?.denumire
              }}</TagEntitati>
            </div>
            <div>{{ produs?.brand }}</div>
            <div>
              <a :href="produs?.url" target="_blank">{{ produs?.url }}</a>
            </div>
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
            <div class="mb-3">
              <TagEntitati tag_type="desfacere">{{ item?.oras }}</TagEntitati>
            </div>
            <div>{{ item?.nume }}</div>
            <div>
              <a :href="item?.url" target="_blank">{{ item?.url }}</a>
            </div>
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
