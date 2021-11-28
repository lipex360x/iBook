<template>
  <section class="organisms-booklist">
    <BookCard v-for="book in $books" :key="book.id" :book="book" />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { books } from '@/store'

export default Vue.extend({
  computed: {
    $books() {
      return books.$all
    }
  }
})
</script>

<style scoped>
.organisms-booklist {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: auto;
  grid-gap: 2rem;

  @include screen('small') {
    grid-template-columns: repeat(2, 1fr);
  }

  @include screen('medium') {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
