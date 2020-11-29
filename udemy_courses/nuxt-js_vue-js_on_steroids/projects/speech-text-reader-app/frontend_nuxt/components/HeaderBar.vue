<template>
  <header class="header" :class="{'header__hide': this.$store.getters.getTextBoxOn}">
      <div class="header__bar">

        <p class="header__name">{{isAdmin}} Christopher</p>
        <p class="header__view-as">View As :<input type="text" placeholder="id"></p>

        

        <div class="header__btns">
          <button class="header__btn">Home</button>
          <button class="header__btn" @click="openForm('signInOn')">Log in</button>
          <button class="header__btn" @click="openForm('signUpOn')">Sign up</button>          
          <button class="header__btn">Sign out</button>
        </div>        

      </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      admin: false
    }
  },
  computed: {
    isAdmin() {
      return this.admin ? 'Admin' : 'Hello';
    }
  },
  methods: {
    openForm(name) {
      const payload = {
        name: name,
        action: true
      }
      this.$store.dispatch('setForm', payload);
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
      height: 4rem;
      border-radius: 0 0 1rem 1rem;
      border-top: none;
      background-color: $color-gray-1;

      display: grid;
      grid-template-columns: repeat(3, 1fr);
      align-items: center;

      @media only  screen and (max-width: $bp-small) {
        height: 8rem;
      }
      

    }

    &__btns {
      // border: 1px solid #fff;
      display: flex;
      grid-template-columns: repeat(4, 1fr);
      align-items: center;
      justify-content: flex-end;

    }

    &__btn {
      cursor: pointer;
      margin-right: 1rem;
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
    }
    &__view-as {

      
      margin: 0 auto;
      display: flex;
      align-items: center;
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