<template>
  <section class="organisms-releases">
    <h2>Releases</h2>
    <BookList />
  </section>
</template>

<style lang="scss" scoped>
.organisms-releases {
  display: grid;
  grid-gap: 1.3rem;
  h2 {
    font-size: 1.375rem;
    font-weight: 500;
    color: color(dark, darkest);
  }
}
</style>
