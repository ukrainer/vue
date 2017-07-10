export const animalMixin = {
  data: function() {
    return {
      animals : ['dog', 'cow', 'cat', 'bat'],
      animalFilter: '',
      x: 'false'
    }
  },
  computed: {
    filteredAnimals() {
      return this.animals.filter((el) => {
        return el.match(this.animalFilter)
      })
    }
  }
}
