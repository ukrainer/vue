<template lang="html">
  <div class="col-xs-4">
    <div class="quote">
      <slot></slot>
    </div>
    <div class="quote-btn">
      <slot name="button"></slot>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
  .quote {
    user-select:none;
    border: 1px solid teal;
    min-height: 100px;
    transition: all .3s ease-out;
    padding: 15px;
    font-family: 'Pacifico', cursive;
    font-size: 20px;
  }
  .quote:hover {background-color: pink;}

  .quote-btn {
    position: absolute;
    right: 7.5px;
    top: 5px;
  }
</style>
