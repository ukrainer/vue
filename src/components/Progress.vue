<template lang="html">
  <div class="row">
    <div class="col-sm-8 col-sm-offset-2">
      <div class="progress">
        <div class="progress-bar" :style="{width: (quotesLength * 100 / maxQuotes)+'%'}">
          {{ quotesLength }} / {{ maxQuotes }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['maxQuotes', 'quotesLength']
}
</script>

<style lang="css">
</style>
