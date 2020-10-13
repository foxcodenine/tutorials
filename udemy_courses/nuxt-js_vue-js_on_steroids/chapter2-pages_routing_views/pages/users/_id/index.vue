<template>
  <div class="container">
      <h2>A single user, with ID: {{ $route.params.id }}</h2>
  </div>
</template>

<script>
export default {
  validate(data) {
    return /^\d+$/.test(data.params.id)
  }
}
</script>

<style>

</style>