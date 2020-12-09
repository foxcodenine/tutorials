<template>
  <header class="header" :class="{'header__hide': this.$store.getters.getTextBoxOn}">
      <div class="header__bar">

        <p class="header__name" v-if="isUserLogedIn">{{isAdmin}}</p>
        <p class="header__name" v-else>Sign up to use all features</p>
        <p class="header__view-as" v-if="isUserAdmin">View As :<input type="text" placeholder="id"></p>

        

        <div class="header__btns">
          <button class="header__btn" v-if="isUserLogedIn" @click="$router.push('/profile')">Profile</button>
          <button class="header__btn" v-if="!isUserLogedIn" @click="openForm('signInOn')">Log in</button>
          <button class="header__btn" v-if="!isUserLogedIn" @click="openForm('signUpOn')">Sign up</button>          
          <button class="header__btn" v-if="isUserLogedIn"  @click="signOut()">Sign out</button>
        </div>        

      </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  computed: {
    isAdmin() {
      return this.isUserAdmin ? 'Admin' : `Hi ${this.getUserInfo.firstname}, nice to see you!`;
    },
    getUserInfo() {
      return this.$store.getters.getUserInfo
    },
    isUserLogedIn() {
      return this.$store.getters.getIsUserLogedIn
    },
    isUserAdmin() {
      return this.$store.getters.getIsUserAdmin
    },
  },
  methods: {
    openForm(name) {
      const payload = {
        name: name,
        action: true
      }
      this.$store.dispatch('setForm', payload);
    },
    signOut() {
      this.$store.dispatch('userSignOut')
    }
  }

}
</script>

<style lang="scss">
  .header {
    
    width: 100%;    
    display: block;
    padding: 0 2rem;
    transform: translateY(0);
    transition: all .3s;



    &__bar {
      margin: 0 auto;
      border: 1px solid #000;
      max-width: 108rem;
      padding: 1rem;
      border-radius: 0 0 1rem 1rem;
      border-top: none;
      background-color: $color-gray-1;

      display: grid;
      grid-gap: 1rem;
      grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
      align-items: center;


      @media only  screen and (max-width: $bp-medium) {
        
        grid-template-columns: repeat(1, 1fr);
      }
      

    }

    &__btns {
      // border: 1px solid #fff;
      display: flex;
      width: 100%;
      grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
      align-items: center;
      justify-content:flex-end;
      justify-self: end;

      @media only  screen and (max-width: $bp-medium) {
        grid-column: 1 / -1;
        
      }
      @media only  screen and (max-width: $bp-medium) {
        justify-self: stretch; 
        justify-content: center;       
        

        
      }
    }

    &__btn {
      min-width: 7.5rem;
      cursor: pointer;
      margin: 0 1rem;
      background-color: $color-gray-1;
      color: $color-primary;
      border: 1px solid $color-primary;
      border-radius: .5rem;
      padding: .2rem .8rem;
      font-size: 1.4rem;
      line-height: 1.6rem;
      font-family: 'Quicksand', 'Source Sans Pro';
      font-weight: 500; 
      transition: all .3s;

  
      
      &:hover {
        background-color: $color-primary-dark;
      }
    }

    &__hide {
      transform: translateY(-100%);
    }

    &__name, &__view-as {
      color: $color-primary;
      justify-self: flex-start;
      font-size: 1.8rem;
      font-family: 'Quicksand', 'Source Sans Pro';
      font-weight: 500;
      margin-left: 1rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      // border: 1px solid #fff;

      @media only  screen and (max-width: $bp-medium) {
        justify-self: center;       

        
      }
      
    }
    &__view-as {

      
      margin: 0 auto;
      display: flex;
      align-items: center;
      @media only  screen and (max-width: $bp-medium) {
        margin: 0 1rem 0 auto ;
      }
      @media only  screen and (max-width: $bp-medium) {
        margin: 0 auto 0 auto ;
        justify-self: center;        
      }
      input {
        padding: .5;
        font-size: 1rem;
        margin-left: 1rem;
        max-width: 5rem;
        background-color: $color-gray-1;
        color: $color-primary;
        border: 1px solid $color-primary;        
        border-radius: .5rem;
        padding: .2rem .8rem;
        font-size: 1.4rem;
        line-height: 1.6rem;
        text-align: center;
      }
    }
  }
</style>