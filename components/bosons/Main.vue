<template>
  <main class="boson-container">
    <slot />
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss" scoped>
main {
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
