<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <h1 class="text-center">Quotes</h1>
          <app-progress :maxQuotes="maxQuotes" :quotesLength="quotes.length"></app-progress>

          <div class="alert alert-danger" v-if="overload">
            The max count of quotes {{ maxQuotes }}! Please delete some quotes before add new.
          </div>
          <app-quote-add
            :editMode="editMode"
            :editedIndex="editedIndex"></app-quote-add>

          <app-quotes :quotes="quotes"></app-quotes>

          <div class="alert alert-info">
            <p>Click to edit</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from './main'

import Progress from './components/Progress.vue'
import Quotes from './components/Quotes.vue'
import QuoteAdd from './components/QuoteAdd.vue'

export default {
  components: {
    appProgress: Progress,
    appQuotes: Quotes,
    appQuoteAdd: QuoteAdd
  },
  data: function() {
    return {
      editMode: false,
      editedIndex: null,
      quotes: [
        'Just a simple quote'
      ],
      maxQuotes: 3
    }
  },
  computed: {
    overload() {
      return this.quotes.length === this.maxQuotes ? true : false
    }
  },
  created() {
    eventBus.$on('quoteAdded', (newQuote) => {
      if ( !this.overload  ) {
        this.quotes.push(newQuote);

        eventBus.$emit('quoteClear');
       }
    });

    eventBus.$on('quoteDeleted', (index) => {
      this.editMode = false;
      this.quotes.splice(index, 1);
    });

    eventBus.$on('quoteEdited', (index) => {
      this.editMode = true;
      this.editedIndex = index;

       eventBus.$emit('quoteEdit', this.quotes[index]);
    });

    eventBus.$on('quoteUpdated', (updatedQuote) => {
      this.editMode = false;
      this.quotes.splice(this.editedIndex,1, updatedQuote);
      this.editedIndex = null;

      eventBus.$emit('quoteClear');
    });

    eventBus.$on('quoteCanceled', (updatedQuote) => {
      this.editMode = false;
      this.editedIndex = null;

      eventBus.$emit('quoteClear');
    });
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
