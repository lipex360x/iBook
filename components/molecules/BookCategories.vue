<template>
  <section class="molecules-bookcategories">
    <Chip
      v-for="category in $book.categories"
      :key="category.id"
      :text="category.name"
    />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { books } from '@/store'

export default Vue.extend({
  computed: {
    $book() {
      return books.$single
    }
  }
})
</script>

<style lang="scss" scoped>
.molecules-bookcategories {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  grid-gap: 0.5rem;
}
</style>
