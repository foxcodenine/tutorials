<template>
  <header class="header">
      <ul>
          <nuxt-link tag="li" to="/">Home</nuxt-link>
          <nuxt-link tag="li" to="/users">User</nuxt-link>
      </ul>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .header {
        position: absolute;
        top: 0;
        left: 0;

        width: 100%;
        padding: 10px 0;
        background: #00C58E;

        ul {
            display: flex;
            justify-content: flex-end;
            
        }

        li {
            display: inline-block;
            margin: 0 10px;
            background: transparent;
            color: #3b8070;
            padding: 10px 30px;
            border-radius: 4px;
            border: 1px solid #3b8070;
            text-decoration: none;

                &:hover {
                    color: #fff;
                    background-color: #3b8070;
                }
            }
        }

</style>