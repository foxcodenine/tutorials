<template>
  <div>
      <h2>{{ userData.fullname }}</h2>
      <h3>{{ userData.age }}</h3>
  </div>
</template>

<!-- --------------------------------------------------------------- -->

<script>
export default {
    props: ['userData']
}
</script>

<!-- --------------------------------------------------------------- -->

<style>

</style>