<template>
  <div class="container">
    <HeaderBar></HeaderBar>
    <h1 class="heading-1 mt-lg error">Speech Text Reader</h1>
    <button 
      class="btn mt-sm"
      @click="toggleTextBox()"
      >Toogle Text Box</button>

    <BoxGrid class="mt-sm"></BoxGrid>

    <TextBox></TextBox>    

    <transition name="fade">
      <NotSupported 
        v-if="this.$store.getters.getNoBrowserSupport" 
        errorMessage='Your browser does not support this application!'>
      </NotSupported>
    </transition>

  </div>
</template>

<script>
import BoxGrid from "@/components/BoxGrid";
import TextBox from "@/components/TextBox";
import NotSupported from "@/components/NotSupported";
import HeaderBar from "@/components/HeaderBar";

export default {
  components: {
    BoxGrid,
    TextBox,
    NotSupported,
    HeaderBar
  },
  methods: {
    toggleTextBox() {
      this.$store.dispatch('setTextBox', !this.$store.getters.getTextBoxOn);
    }
  },
  created() {
    this.$store.dispatch('nuxtServerInit'); // <- if spa
  },
  beforeMount() {
    if (this.$detectBrowser() === 'IE' || this.$detectBrowser() === 'Unknown') {
        throw new Error('Application is not supported by this browser!!');
    }
  },
  mounted() {
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

</style>
