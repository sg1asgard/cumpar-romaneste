<script setup>
import { ref, reactive, onMounted, watch, computed } from 'vue'
import { apiCalls } from '@/utilities/apiCalls.js'
import NavBar from '@/components/shared/NavBar.vue'
import FooterNav from '@/components/shared/FooterNav.vue'
import PageHeader from '@/components/shared/PageHeader.vue'
import { faker } from '@faker-js/faker'

let randomCompany = faker.company.name()
let randomProduct = faker.commerce.product()

let entries = ref([])
const generateEntries = () => {
  entries.value = []
  for (let i = 0; i < 100; i++) {
    entries.value.push({
      product_name: faker.commerce.product(),
      company_name: faker.company.name()
    })
  }
}

onMounted(() => {
  generateEntries()
})

const searchTerm = ref('')

const filteredEntries = computed(() => {
  let search = searchTerm.value
  return entries.value.filter(
    (produs) =>
      produs.product_name.toLowerCase().includes(search.toLowerCase()) ||
      produs.company_name.toLowerCase().includes(search.toLowerCase())
  )
})
</script>

<template>
  <div class="container-full container-xl">
    <NavBar />
    <PageHeader
      title="Susține Economia Românească"
      subtitle="Cumpară de la producătorii Români si companiile Românesti cu pachet deținut majoritar sau 100% Românesc."
    />
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

          {{ searchTerm }}

          <div id="ajutorAautareRapida" class="form-text fs-5">
            Poti sa cauti dupa numele de producator, produs, locatie sau orice
            combinatie doresti.
          </div>
        </div>
      </div>

      <div class="search-results d-flex flex-wrap">
        <div
          v-for="(produs, index) in filteredEntries"
          :key="index"
          class="col-md-3"
        >
          <dl class="p-3 mx-2 search-results__items">
            <dt>{{ produs.product_name }}</dt>
            <dd>{{ produs.company_name }}</dd>
          </dl>
        </div>
      </div>
    </main>
    <FooterNav />
  </div>
</template>

<style lang="scss" scoped>
.search-results {
  margin: 0px -8px;
  &__items {
    border: 1px solid $gray-700;
    border-radius: $res-border-radius-m;
  }
}
</style>
