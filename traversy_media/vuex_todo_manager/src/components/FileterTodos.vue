<template>
  <div>
      Filter Todos:
      <select  @change="updateFilter($event.target.value)">
          <option value="200" selected>200</option>
          <option value="100">100</option>
          <option value="50">50</option>
          <option value="20">20</option>
          <option value="10">10</option>
          <option value="5">5</option>
      </select>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'FilterTodos',
    methods: {
        ...mapActions({
            updateFilter: 'todos/updateFilter'
        })
    }
}
</script>

<style>
    select {
        margin-top: 10px;
        padding: 6px;
        border: #41b883 1px solid;
        background: #fff;
        
    }

</style>