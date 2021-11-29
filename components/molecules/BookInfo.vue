<template>
  <section class="molecules-bookinfo">
    <h2>{{ $book.title }}</h2>
    <div v-html="$book.description"></div>

    <BookCategories />

    <div class="book-details">
      <ul>
        <li>
          <p>Release</p>
          <p>{{ $book.releaseDate }}</p>
        </li>

        <li>
          <p>Author</p>
          <p>{{ $book.author }}</p>
        </li>
      </ul>
    </div>
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
.molecules-bookinfo {
  h2 {
    margin-bottom: 2rem;
  }
  div {
    line-height: 1.625rem;
  }

  .molecules-bookcategories {
    margin-top: 2rem;
  }
  .book-details {
    margin-top: 1rem;
    ul {
      display: grid;
      grid-gap: 0.65rem;
      li {
        display: grid;
        grid-template-columns: 160px 1fr;
        font-weight: 700;
        font-size: 13px;
      }
    }
  }
}
</style>
