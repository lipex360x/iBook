<template>
  <section class="organisms-presentation">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, ab sint ex
      sed blanditiis quam velit? Laborum harum vel iste. Voluptas deleniti
      suscipit ducimus quo sit ipsa autem ipsum eaque!
    </p>
    <img src="@/assets/img/presentation.svg" alt="iBook Presentation" />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  // vue here
})
</script>

<style lang="scss" scoped>
.organisms-presentation {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  align-items: center;
  @include screen('small', 'medium') {
    grid-template-columns: 1fr;
  }
  p {
    line-height: 26px;
  }
  img {
    max-width: 100%;
  }
}
</style>
