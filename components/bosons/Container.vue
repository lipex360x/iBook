<template>
  <main class="boson-container">
    <slot />
  </main>
</template>

<style lang="scss" scoped>
.boson-container {
  margin: 0 auto;
  max-width: 1070px;

  @include screen('small') {
    width: 90%;
  }
  @include screen('medium') {
    width: 85%;
  }
  @include screen('large', 'infinity') {
    width: 70%;
  }
}
</style>
