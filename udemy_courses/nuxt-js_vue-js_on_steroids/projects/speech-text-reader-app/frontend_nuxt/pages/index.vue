<template>
  <div class="container">
    <HeaderBar></HeaderBar>
    <h1 class="heading-1 mt-lg error">Speech Text Reader</h1>

    <div class="btns">      
      <button  class="btn mt-sm" @click="toggleTextBox()">Toogle Text Box</button>
      <button  class="btn mt-sm" @click="toggleNewBox()">Add New Frame</button>
    </div>

    <BoxGrid class="mt-sm"></BoxGrid>

    

    <transition name="fade">
      <NotSupported 
        v-if="this.$store.getters.getNoBrowserSupport" 
        errorMessage='Your browser does not support this application!'>
      </NotSupported>
    </transition>

    <transition name="moveintop" mode="out-in">
      <TextBox v-if="this.$store.getters.getTextBoxOn"></TextBox>  
      <SignUp v-if="this.$store.getters.getSignUpOn"></SignUp>
      <SignIn v-if="this.$store.getters.getSignInOn"></SignIn>
      <NewBox v-if="this.$store.getters.getNewBoxOn"></NewBox>    
    </transition>

  </div>
</template>

<script>
import BoxGrid from "@/components/BoxGrid";
import TextBox from "@/components/TextBox";
import NotSupported from "@/components/NotSupported";
import HeaderBar from "@/components/HeaderBar";
import SignUp from "@/components/forms/SignUp";
import SignIn from "@/components/forms/SignIn";
import NewBox from "@/components/forms/NewBox";

export default {
  components: {
    BoxGrid,
    TextBox,
    NotSupported,
    HeaderBar,
    SignUp,
    SignIn,
    NewBox,
  },
  methods: {
    toggleTextBox() {
      const payload = {
        name: 'textBoxOn',
        action: !this.$store.getters.getTextBoxOn
      }
      this.$store.dispatch('setForm', payload);
    },
    toggleNewBox() {
      const payload = {
        name: 'newBoxOn',
        action: !this.$store.getters.getNewBoxOn
      }
      this.$store.dispatch('setForm', payload);
    },
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
