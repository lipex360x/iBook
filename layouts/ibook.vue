<template>
  <section class="layout-ibook">
    <Header />

    <Container>
      <Nuxt />
    </Container>

    <Footer />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss" scoped>
.layout-ibook {
  margin-top: 2rem;
  display: grid;
  grid-gap: 4rem;

  footer {
    margin-top: 2rem;
    position: absolute;
    bottom: 0;
    left: 0;
  }
}
</style>
