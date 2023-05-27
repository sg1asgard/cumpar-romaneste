<script setup>
import { ref, reactive, onMounted, watch } from 'vue'
import { apiCalls } from '@/utilities/apiCalls.js'
import NavBar from '@/components/shared/NavBar.vue'
import FooterNav from '@/components/shared/FooterNav.vue'
import PageHeader from '@/components/shared/PageHeader.vue'
import { faker } from '@faker-js/faker'

// Faker.JS
let randomCompany = faker.company.name()
let randomProduct = faker.commerce.product()

let entries = ref()
const generateEntries = () => {
  entries.value = []
  for (let i = 0; i < 100; i++) {
    entries.value.push({
      product_name: faker.commerce.product(),
      company_name: faker.company.name()
    })
  }
}

// init const
let data = ref()
let searchTerm = ref('')

// get json placeholder data
// Get Profile ID
const getFakeJson = async () => {
  searchTerm.value = ''
  try {
    const response = await apiCalls.getTestData()
    // Check if the user has a Resume
    if (response.status === 200) {
      data.value = response.data
      generateEntries()
    }

    return true
  } catch (error) {
    return error
  }
}

const filterData = () => {
  let search = searchTerm.value
  entries.value = entries.value.filter((produs) => {
    return produs.product_name.toLowerCase().includes(search.toLowerCase()) || produs.company_name.toLowerCase().includes(search.toLowerCase())
  })
}

onMounted(() => {
  getFakeJson()
})

watch(searchTerm, () => {
  filterData()
})
</script>

<template>
  <div class="container-full container-xl">
    <NavBar />
    <PageHeader
      title="Sustin Producatorii Romani"
      subtitle="Cumpara de la producatorii Romani si companiile Romanesti cu pachet detinut majoritar sau 100% Romanesc."
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
              @click="getFakeJson()"
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


      <div v-if="data" class="search-results">
        <dl v-for="(produs, index) in entries" :key="index">
          <dt>{{ produs.product_name }}</dt>
          <dd>{{ produs.company_name }}</dd>
        </dl>
      </div>
    </main>
    <FooterNav />
  </div>
</template>
