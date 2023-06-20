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
      <h2 class="mt-5 text-capitalize">Cum pot sa ajut?</h2>
      <p>
        Cand mergi la cumparaturi aloca-ti timpul necesar sa te uiti pe
        ambalajul produsului pe care vrei sa-l cumperi, vezi cine este
        producatorul si originea produsului. Daca nu esti ferm convins cauta
        detalii online despre companie si verifici daca compania este cu pachet
        de investitii majoritar sau integral detinut de o firma Romaneasca.
      </p>

      <h3 class="mt-5">
        Recomand un produs Romanesc
      </h3>
      <p>
        Trimite un email pe adresa urmatoare:
        <a href="mailto:george.antohi78@gmail.com">george.antohi78@gmail.com</a>
      </p>

      <p>Mesajul tau ar trebui sa contina urmatoarele:</p>
      <ul>
        <li>Tip produs <em>(ex: Miere de albine)</em></li>
        <li>Nume brand <em>(ex: Apicola)</em></li>
        <li>Nume companie <em>(ex: Apicola SRL)</em></li>
        <li>
          Website companie <em>(ex: www.apicola.ro)</em> / optional, daca exista
        </li>
      </ul>

      <h3 class="mt-5">
        Recomand un magazin sau super market Romanesc
      </h3>

      <p>Mesajul tau ar trebui sa contina urmatoarele:</p>
      <ul>
        <li>Nume magazin / super market</li>
        <li>Share adresa / optional, de preferat share</li>
        <li>Orasul in care se afla magazinul / supermaket-ul</li>
      </ul>
    </main>

    <FooterNav />
  </div>
</template>

<style lang="scss" scoped></style>
