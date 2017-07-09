<template lang="html">
  <div class="row">
    <app-quote

      @click.native="editQuote(index)"
      key="index"
      v-for="(quote, index) in quotes">
      {{ quote }}
      <button class="btn btn-sm btn-danger" @click.stop="deleteQuote(index)" slot="button">x</button>
    </app-quote>
  </div>
</template>

<script>
import { eventBus } from '../main';
import Quote from './Quote';

export default {
  components: {
    appQuote : Quote
  },
  props: {
    quotes: Array
  },
  methods: {
    deleteQuote(index) {
      eventBus.$emit('quoteDeleted', index)
    },
    editQuote(index) {
      eventBus.$emit('quoteEdited', index)
    }
  }
}
</script>

<style lang="css">
  .row {
    display: flex;
    flex-wrap: wrap;
  }

  .row > div { margin-bottom: 20px;}
</style>
