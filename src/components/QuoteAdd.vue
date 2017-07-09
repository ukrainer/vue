<template lang="html">
  <div class="row">
    <div class="col-sm-6 col-sm-offset-3">
      <h4>Add new quote:</h4>
      <textarea v-model="modelQuote" rows="5" class="form-control"></textarea>

      <div class="add">
        <button class="btn btn-primary" v-if="!editMode" @click="addQuote">Add Quote</button>
        <button class="btn btn-success" v-if="editMode" @click="updateQuote">Update</button>
        <button class="btn btn-default" v-if="editMode" @click="cancelQuote">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from '../main';

export default {
  data: function() {
    return {
      modelQuote: ''
    }
  },
  methods: {
    addQuote() {
      eventBus.$emit('quoteAdded', this.modelQuote)
    },
    updateQuote() {
      eventBus.$emit('quoteUpdated', this.modelQuote)
    },
    cancelQuote() {
      eventBus.$emit('quoteCanceled', this.modelQuote)
    }
  },
  props: ['editMode'],
  created() {
    eventBus.$on('quoteClear', () => {
      this.modelQuote = '';
    });

    eventBus.$on('quoteEdit', (quoteToEdit) => {
      this.modelQuote = quoteToEdit
    });
  }
}
</script>

<style lang="css" scoped>
.add {
  padding: 20px 0;
  text-align: center;
}
</style>
