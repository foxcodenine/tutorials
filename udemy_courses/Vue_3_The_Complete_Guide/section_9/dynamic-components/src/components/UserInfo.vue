<template>

  <base-card>

    <template v-slot:header >
      <h3>{{ fullName }}</h3>
      <base-badge 
        v-bind:type="role" 
        v-bind:caption="role.toUpperCase()">
      </base-badge>
    </template>  
            
    <template v-slot:default ><p>{{ infoText }}</p></template>

  </base-card>

</template>

<!--  -------------------------------------------------------------  -->

<script>
export default {
  props: ['fullName', 'infoText', 'role'],
};
</script>

<!--  -------------------------------------------------------------  -->

<style lang="scss" scoped>

section header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>