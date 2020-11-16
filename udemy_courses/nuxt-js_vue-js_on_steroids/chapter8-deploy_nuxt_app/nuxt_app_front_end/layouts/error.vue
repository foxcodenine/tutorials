<template>
  <div class="error-layout">
    <h1>Oops, something went wrong!</h1>
    <p>Back to <a href="/">safety</a>!</p>
    <br>
    <p>{{error}}</p>
  </div>
</template>



<script>
export default {
  props: ['error']
}
</script>

<style scoped lang="scss">
.error-layout {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;

    a {
        text-decoration: none;
        color: red;
    }

    a:hover,
    a:active {
        color: salmon;
    }
}
</style>