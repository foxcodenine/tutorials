<template>
  <div class="container">
    <HeaderBar></HeaderBar>
    <NuxtChild/>
    <h1 class="heading-1 mt-lg error">Trava! Speech And Text Reader</h1>

    <div class="btns">      
      <button  class="btn mt-sm" @click="toggleTextBox()">Toogle Text Box</button>
      <button  class="btn mt-sm" @click="toggleNewBox()" 
            v-if="isUserLogedIn">Add New Frame</button>
      <button  class="btn mt-sm" @click="deleteSelectedFrames()" 
            v-if="framesToDelete > 0" style="background-color: coral;">
              {{framesToDelete > 1 ? 'Delete Frames' : 'Delete Frame'}}
      </button>
    </div>

    <BoxGrid class="mt-sm"></BoxGrid>    

    <transition name="fade">
      <ErrorMessage 
        v-if="this.$store.getters.getNoBrowserSupport" 
        errorMessage='It seems that your browser does not support this application! Try to refresh or use a different browser.'>
      </ErrorMessage>
    </transition>

    <transition name="moveintop" mode="out-in">
      <TextBox v-if="this.$store.getters.getTextBoxOn"></TextBox>  
      <SignUp v-if="this.$store.getters.getSignUpOn"></SignUp>
      <SignIn v-if="this.$store.getters.getSignInOn"></SignIn>
      <NewBox v-if="this.$store.getters.getNewBoxOn"></NewBox>    
      <ResetPassword v-if="this.$store.getters.getResetPasswordOn"/> 
      <ResendEmailPassword  
        v-if="this.$store.getters.getResendValEmailOn"
        mainTitle="Send Confirmation Email"
        subTitle="Make it quick!"
        taskSendEmail="true"/>
      <ResendEmailPassword 
        v-if="this.$store.getters.getResendPasswordOn"
        mainTitle="Recover Password"
        subTitle="Don't worry, have you covered!"
        taskSendPassword="true"/> 

      <DeleteAccount v-if="this.$store.getters.getDeleteAccountOn" />
    </transition>

    <FlashMessage :position="'right bottom'" v-if="this.$route.path === '/'"></FlashMessage>

  </div>
</template>

<script>
import BoxGrid from "@/components/BoxGrid";
import TextBox from "@/components/TextBox";
import ErrorMessage from "@/components/ErrorMessage";
import HeaderBar from "@/components/HeaderBar";
import SignUp from "@/components/forms/SignUp";
import SignIn from "@/components/forms/SignIn";
import NewBox from "@/components/forms/NewBox";
import ResetPassword from "@/components/forms/ResetPassword";
import ResendEmailPassword from "@/components/forms/ResendEmailPassword";
import DeleteAccount from "@/components/forms/DeleteAccount";

export default {
  components: {
    BoxGrid,
    TextBox,
    ErrorMessage,
    HeaderBar,
    SignUp,
    SignIn,
    NewBox,
    ResendEmailPassword,
    DeleteAccount,
  },
  computed: {
    isUserLogedIn() {
      return this.$store.getters.getIsUserLogedIn
    },
    framesToDelete() {
      return this.$store.state.boxToDelete.length
    }
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
    async deleteSelectedFrames() {
      const response = await this.$store.dispatch('pictures/deletePicture');

      if (response && response.state === 'success') {

        // ---- deleteing image from UI
        // const myBoxes = this.$store.getters.getMyBoxes;
        let tokenObject = await this.$store.dispatch('getFromCookie');

        let myBoxes = tokenObject.userBoxes;
    
        let updatedBoxes = myBoxes.filter(b => {
          
          return !this.$store.state.boxToDelete.includes(b.image)
        })
        
        await this.$store.commit('setMyBoxes', updatedBoxes)
 

        // ---- deleing image from cookie

        const payload_cookie = {
          userInfo: this.$store.getters.getUserInfo, 
          token: this.$store.getters.getToken, 
          userBoxes: this.$store.getters.getMyBoxes
        };

        this.$store.dispatch('saveToCookie', payload_cookie);
            
        // ---- crear boxToDelete in state
        this.$store.state.boxToDelete = [];
        location.reload();
        
      }
      else {
        return
      }
    }
  },
  created() {
    this.$store.dispatch('serverInit'); // <- if SPA
  },
  beforeMount() {
    if (this.$detectBrowser() === 'IE' || this.$detectBrowser() === 'Unknown') {
        throw new Error('Application is not supported by this browser!!');
    }
  },
  async mounted() {
    if(!this.$store.getters.getIsUserLogedIn) {
      await this.$store.dispatch('autoLogin');   //<- 
    }
    
      
       
                    

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

    // console.log( this.$route.path === '/')

  }
}
</script>

<style lang='scss' scoped>

</style>
