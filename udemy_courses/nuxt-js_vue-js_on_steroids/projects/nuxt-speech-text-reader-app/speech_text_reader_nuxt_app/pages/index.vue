<template>
  <div class="container ">

    <h1 class="heading-1 mt-lg">Speech Text Reader</h1>
    <button class="btn mt-sm">Toogle Text Box</button>
    <BoxGrid class="mt-sm"></BoxGrid>
    <TextBox></TextBox>
  </div>
</template>

<script>
import BoxGrid from "@/components/BoxGrid";
import TextBox from "@/components/TextBox";

export default {
  components: {
    BoxGrid,
    TextBox
  },
  mounted() {
    let myPcVoices = window.speechSynthesis.getVoices();


    this.$store.dispatch('setVoices', myPcVoices);
  }
}
</script>

<style lang='scss' scoped>
.container {
  background-color: $color-primary;  
  min-height: 100vh;  
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: flex-start;
}




</style>
