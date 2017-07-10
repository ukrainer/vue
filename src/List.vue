<template lang="html">
  <div class="">
    <h3>Animals II</h3>
    <input type="text" v-model="animalFilter">
    <ul>
      <li v-for="animal in filteredAnimals">{{ animal }}</li>
    </ul>
  </div>
</template>

<script>
import { animalMixin } from './animalMixin';

export default {
  mixins: [animalMixin]
}
</script>

<style lang="css">
</style>
