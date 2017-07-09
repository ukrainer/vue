<template lang="html">
  <div class="switch">
    <div
      class="switch-on"
      @click="setSwitch(true)"
      :class="{active: state}">
      On</div>
    <div
      class="switch-off"
      @click="setSwitch(false)"
      :class="{active: !state}">
      Off</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      state : true
    }
  },
  methods: {
    setSwitch(state) {
      this.state = state;
      this.$emit('input', state)
    }
  },
  props: ['value'],
  created() {
    this.state = this.value;
  }
}
</script>

<style lang="css" scoped>
.switch div {
  display: inline-block;
  width: 40px;
  height: 20px;
  background-color: lightgray;
  padding: 2px;
  margin:10px -2px;
  -webkit-box-sizing: padding-box;
  box-sizing: padding-box;
  cursor: pointer;
  text-align: center;
}
.switch-on:hover, .switch-on.active {
  background-color: lightgreen;
}

.switch-off:hover, .switch-off.active {
  background-color: lightcoral;
}
</style>
