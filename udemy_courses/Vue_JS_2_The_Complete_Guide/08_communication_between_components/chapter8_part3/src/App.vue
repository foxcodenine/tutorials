<template>

    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <app-User></app-User>
        </div>
      </div>
    </div>

  
</template>

<script>
  import User from './components/User'

  export default {
    components: {
      appUser: User
    }
  }
</script>

<style lang="scss">
  div.component {
    border: 1px solid black;
    padding: 30px;
  }
</style>
