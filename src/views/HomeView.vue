<script setup>
import { ref, onMounted, computed } from "vue";
import { apiCalls } from "@/utilities/apiCalls.js";
import NavBar from "@/components/shared/NavBar.vue";
import FooterNav from "@/components/shared/FooterNav.vue";
import PageHeader from "@/components/shared/PageHeader.vue";

// init const
let data = ref();
let searchTerm = ref();

// get json placeholder data
// Get Profile ID
const getFakeJson = async () => {
  searchTerm.value = '';
  try {
    const response = await apiCalls.getTestData();
    // Check if the user has a Resume
    if (response.status === 200) {
      data.value = response.data;
      console.log("fake data", data.value);
    }

    return true;
  } catch (error) {
    return error;
  }
};

const filterData = (searchTerm) => {
  data.value = data.value.filter((produs) => {
    return produs.title.toLowerCase().includes(searchTerm.toLowerCase());
  });
};

const dude = computed(() => {
  data.value = data.value.filter((produs) => {
    return produs.title.toLowerCase().includes(searchTerm.toLowerCase());
  });
});

onMounted(() => {
  getFakeJson();
});
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
              @keyup="filterData(searchTerm)"
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

          <div id="ajutorAautareRapida" class="form-text fs-5">
            Poti sa cauti dupa numele de producator, produs, locatie sau orice
            combinatie doresti.
          </div>
        </div>
      </div>

      <div v-if="data" class="search-results">
        <dl v-for="(produs, index) in data" :key="index">
          <dt>id: {{ produs.id }}</dt>
          <dd>{{ produs.title }}</dd>
        </dl>
      </div>
    </main>
    <FooterNav />
  </div>
</template>
