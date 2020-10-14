<template>
  <div class="users_section">
      <h2 style="color: crimson;">USERS LAYOUT</h2>
      <Nuxt />
      <Header />
  </div>
</template>

<script>

  import Header from '@/components/Header';

  export default {
    components: {
      Header
    }
  }
  
</script>




<style>
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}


.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}
.users_section {
    display: flex;
    flex-direction: column;
    align-items: center;
}

</style>