<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-xs-8 col-xs-offset-2">
          <div >
            {{ text | to-lower }}
          </div>

          <h1>{{ x }}</h1>
<button @click="animals.push('rat')">Add rat</button>
<button @click="animalMixin.push('donkey')">Add donkey</button>
          <h3>Animals I</h3>
          <input type="text" v-model="animalFilter">
          <ul>
            <li v-for="animal in filteredAnimals">{{ animal }}</li>
          </ul>

          <hr>

          <app-list></app-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import List from './List.vue'
import { animalMixin } from './animalMixin'

export default {
  data: function() {
    return {
      text : 'Hello darkness my old friend',
      x: 'true'
    }
  } ,
  components: {
    appList: List
  },
  mixins: [animalMixin]
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 20px;
}
</style>
