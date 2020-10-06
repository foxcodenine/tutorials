<template>
  <div class="restart">
      <h1 class="restart__title">Time has ran out</h1>
      <p  class="restart__text">Your final score is {{score}}</p>
      <button class="btn restart-btn" @click="restartGame">Restart</button>
  </div>
</template>

<script>

  export default {
    props: ['score'],
    methods: {
      restartGame() {
        this.$emit('restartGame')
      }
    }
  }

</script>

<style lang="scss">
    .restart {
        width: 50rem;
        min-height: 25rem;
        border-radius: .3rem;
        background-color: var(--col-secondary);
        color: var(--col-display-text);

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        position: relative;

        &__title {
          margin: 5rem 0 2rem 0;
        }
    }
</style>