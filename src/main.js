// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'/

Vue.config.productionTip = false

export const eventBus = new Vue({
  methods: {
    updateQuote(index) {},
    editQuote(index) {},
    deleteQuote(index) {},
    addQuote(newQuote) {
      this.$emit('quoteAdded', newQuote)
    }
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
