<template>
  <section class="layout-ibook">
    <Header />

    <Main>
      <Nuxt />
    </Main>

    <Footer />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss" scoped>
section {
  margin-top: 3rem;
  display: grid;
  grid-gap: 6.75rem;

  main {
    padding-bottom: 6.75rem;
  }

  footer {
    position: absolute;
    bottom: 0;
    left: 0;
  }
}
</style>
