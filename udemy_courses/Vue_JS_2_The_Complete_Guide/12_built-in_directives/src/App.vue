<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Built-in Directive</h1>
        <p v-text="'Some text with v-text'"></p>
        <p v-html="'<i>More text using <strong>v-html</strong></i>'"></p>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Custom Directives</h1>
        <p v-highlight:background="'gold'">Highlight this!</p>
        <p v-highlight="'lime'">And color this!</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style>

</style>