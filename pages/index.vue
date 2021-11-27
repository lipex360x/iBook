<template>
  <!-- <HomeTemplate /> -->
  <div class="count">
    <h1>{{ $count }}</h1>
    <button @click="increment">increment</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { books } from '@/store'

export default Vue.extend({
  layout: 'ibook',

  computed: {
    $count(): number {
      return books.$count
    }
  },

  methods: {
    increment(): void {
      return books.increment()
    }
  }
})
</script>
