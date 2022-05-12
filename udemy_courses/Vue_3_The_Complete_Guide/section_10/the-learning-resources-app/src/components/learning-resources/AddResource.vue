<template>

    <teleport to="body">
    <base-dialog v-if="inputIsInvalid" title="Invalid Input" v-on:closeDialog="confirmError">
        <template v-slot:default>
            <p>Unfortunately, at least one input value is invalid.</p>
            <p>Please check all inputs and make sure you enter a few characters into each input field.</p>
        </template>
        <template v-slot:actions>
            <base-button v-on:click="confirmError">Okay</base-button>
        </template>
    </base-dialog>
    </teleport>

    <base-card>
        <form v-on:submit.prevent="submitData">
            
            <div class="form-control">
                <label for="title">Title</label>
                <input type="text" id="title" name="title" ref="titleInput">
            </div>
            
            <div class="form-control">
                <label for="description">Description</label>
                <textarea type="text" id="description" name="description" rows="3" 
                          ref="descriptionInput">
                </textarea>
            </div>
            
            <div class="form-control">
                <label for="link">Link</label>
                <input type="url" id="link" name="link" ref="linkInput">
            </div>

            <div>
                <base-button type="submit">Add Resource</base-button>
            </div>

        </form>
    </base-card>
</template>

<!--------------------------------------------------------------------->

<script>
import BaseButton from '../UI/BaseButton.vue'
import BaseDialog from '../UI/BaseDialog.vue'

export default {
  components: {BaseButton, BaseDialog  },
  inject: [ 'addResource' ],
  data() {
      return {
          inputIsInvalid: false
      }
  },
  methods: {
      
      submitData() {
            console.log(this.$refs.descriptionInput.value)
            const enteredTitle = this.$refs.titleInput.value;
            const enteredDescription = this.$refs.descriptionInput.value;
            const enteredUrl = this.$refs.linkInput.value;
    
            if (enteredTitle.trim() === '' || 
                enteredDescription.trim() === '' || 
                enteredUrl.trim() === '') {
                    this.inputIsInvalid = true;
                    return;
            }
            this.addResource(enteredTitle, enteredDescription, enteredUrl);
      },
      confirmError() {
          this.inputIsInvalid = false;
      }
  }

}
</script>

<!--------------------------------------------------------------------->

<style lang="scss" scoped>
label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
}

input,
textarea {
    display: block;
    width: 100%;
    font: inherit;
    padding: 0.15rem;
    border: 1px solid #ccc;
}

input:focus,
textarea:focus {
    outline: none;
    border-color: #3a0061;
    background-color: #f7ebff;
}

.form-control {
    margin: 1rem 0;
}
</style>