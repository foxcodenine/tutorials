<template>
  <div>
      <h3>Add Todos</h3>
      <div class="add">
              <form>
        <input type="text" v-model="title" placeholder="Add todo...">
        <button>Submit</button>
        <!-- <input type="submit"> -->
      </form>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: ''
    }
  }
}
</script>

<style scoped>
  form {
    display: flex;
  }
    input[type='text']{
      flex: 10;
      padding: 10px;
      border: 1px solid #41b883;
      outline: 0;
    }
    input[type='submit'],
    button {
      flex: 2;
      background:  #41b883;
      color: #fff;
      cursor: pointer;
      border: 1px solid #41b883;
    }
</style>