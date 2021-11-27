<template>
  <section class="layout-ibook">
    <Header />

    <Container>
      <Nuxt />
    </Container>

    <Footer />
  </section>
</template>

<style lang="scss" scoped>
.layout-ibook {
  margin-top: 2rem;
  display: grid;
  grid-gap: 4rem;

  .organisms-footer {
    margin-top: 2rem;
    position: absolute;
    bottom: 0;
    left: 0;
  }
}
</style>
