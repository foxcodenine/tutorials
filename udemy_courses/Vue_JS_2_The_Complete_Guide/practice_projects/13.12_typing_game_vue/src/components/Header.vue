<template>
  <div class="header" :class="{'header__on': headerOn}">
      <p class="header__text">Difficalty</p>

      <select class="header__select" v-model="selectedValue" @change="changedLevel(selectedValue)">                  
          <option v-for="level in levels" :value="level" :key="level">{{level}}</option>
      </select>

  </div>
</template>

<script>
export default {
    props: ['headerOn', 'selectedLevel'],
    data() {
        return {
            levels: ['Easy', 'Medium', 'Hard'],
            selectedValue: this.selectedLevel,            
        }
    },
    methods: {
        changedLevel(val) {
            this.$emit('changedLevel', val)
        }
    }
}
</script>

<style lang="scss">
    .header {
        background-color: rgba(0,0,0,.3);
        height: 7rem;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        transform: translateY(-100%);
        transition: all .4s;

        &__on {
            transform: translateY(0);
        }
        
        &__text {
            color: #fff;
            margin-right: .7rem;
        }

        &__select {
            width: 20rem;
            padding: .5rem;
            appearance: none;
            border: none;
            border-radius: 0;
            background-color: var(--col-tertiary);
        }
    }
</style>