<template>
  <div class="container">

    <h1 class="heading-1 mt-lg">Speech Text Reader</h1>
    <button 
      class="btn mt-sm"
      @click="toggleTextBox()"
      >Toogle Text Box</button>

    <BoxGrid class="mt-sm"></BoxGrid>

    <TextBox></TextBox>

    

    <transition name="fade">
    <NotSupported v-if="this.$store.getters.getNoBrowserSupport"></NotSupported>
    </transition>

  </div>
</template>

<script>
import BoxGrid from "@/components/BoxGrid";
import TextBox from "@/components/TextBox";
import NotSupported from "@/components/NotSupported";

export default {
  components: {
    BoxGrid,
    TextBox,
    NotSupported
  },
  methods: {
    toggleTextBox() {
      this.$store.dispatch('setTextBox', !this.$store.getters.getTextBoxOn);
    }
  },
  mounted() {

    if (['Unknown', 'IE'].includes(this.$detectBrowser())) {
        throw  'This browser do not support this application!'
    }  

    // this.$store.dispatch('nuxtServerInit'); // <- if spa

    // ---- get voices from pc
    
    let myPcVoices = window.speechSynthesis.getVoices();
    this.$store.dispatch('setVoices', myPcVoices);

    // ---- init SpeechSynthesisUtterance
    const utterance = new SpeechSynthesisUtterance
    this.$store.dispatch('setUtterance', utterance);
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

  color: rgba($color-gray-1, .9);
  position: relative;


}
</style>
