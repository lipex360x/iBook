<template>
  <section class="molecules-bookcover">
    <img :src="$book.cover" :alt="`Cover from book ${$book.title}`" />
    <NuxtLink class="read-book" :to="`/book/${$book.id}/read`">
      Read Book
    </NuxtLink>
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
.molecules-bookcover {
  img {
    width: 100%;
  }
  .read-book {
    background: #292929;
    color: #f7f7f7;
    text-transform: uppercase;
    font-weight: 700;
    width: 100%;
    height: 42px;
    font-size: 1.1rem;
    display: grid;
    justify-content: center;
    align-items: center;
    transition: all 300ms ease;
    &:hover {
      opacity: 0.89;
    }
  }
}
</style>
