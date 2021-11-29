<template>
  <section class="organisms-bookdetails">
    <BookCover />
    <BookInfo />
  </section>
</template>

<!-- Nuxt Script Tag Snippet: scriptTemplate -->

<style lang="scss" scoped>
.organisms-bookdetails {
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-gap: 1.4rem;

  @include screen('small', 'medium') {
    grid-template-columns: 1fr;
  }
}
</style>
