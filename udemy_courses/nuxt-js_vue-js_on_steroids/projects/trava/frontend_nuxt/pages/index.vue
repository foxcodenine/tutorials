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
      <ResetPassword v-if="this.$store.getters.getResetPasswordOn"/> 
      <ResendValEmail v-if="this.$store.getters.getResendValEmailOn"/>
      <ResendPassword v-if="this.$store.getters.getResendPasswordOn"/> 
    </transition>

    <FlashMessage :position="'right bottom'"></FlashMessage>

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
import ResetPassword from "@/components/forms/ResetPassword";
import ResendValEmail from "@/components/forms/ResendValEmail";
import ResendPassword from "@/components/forms/ResendPassword";

export default {
  components: {
    BoxGrid,
    TextBox,
    NotSupported,
    HeaderBar,
    SignUp,
    SignIn,
    NewBox,
    ResendPassword,
    ResendValEmail,
    ResetPassword,
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
    this.$store.dispatch('serverInit'); // <- if spa
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



    // ---- check if browser support app
    setTimeout(()=>{   

      if (this.$detectBrowser() === 'Chrome' || myPcVoices.length < 1) {
        myPcVoices = window.speechSynthesis.getVoices();

        if (myPcVoices.length < 1 || ['Unknown', 'IE'].includes(this.$detectBrowser())) {
            this.$store.dispatch('setNoBrowserSupport', true);
        }
      }
    },300);

  }
}
</script>

<style lang='scss' scoped>

</style>
