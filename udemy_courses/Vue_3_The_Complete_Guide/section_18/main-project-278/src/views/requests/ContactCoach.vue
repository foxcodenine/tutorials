<template >
    <form v-on:submit.prevent="submitForm">

        <div class="form-control">
            <label for="email">Your E-Mail</label>
            <input type="email" id="email" v-model.trim="email">
        </div>

        <div lass="form-control">
            <label for="message">Message</label>
            <textarea name="message" id="message" cols="30" rows="5" v-model.trim="message">
            </textarea>
        </div>

        <p class="errors" v-if="!formIsValid">Please enter a valid email and non-empty message</p>
        <div class="actions">
            <base-button>Send Message</base-button>
        </div>

    </form>
</template>

<!-- --------------------------------------------------------------- -->

<script>
import { mapActions } from "vuex";
export default {
  data() {
      return {
          email: '',
          message: '', 
          formIsValid: true
      }
  },

  methods: {

    ...mapActions('requests', {
      contactCoach: 'contactCoach'
    }),

    validateForm() {
        if (this.email === '' || !this.email.includes('@') || this.message === '') {
            this.formIsValid = false;
        } else {
            this.formIsValid = true;
        }
    },

    submitForm() {

        this.validateForm();

        if (!this.formIsValid) return;

        const coachId = this.$route.params.id;

        this.contactCoach({
          coachId: coachId, 
          email: this.email, 
          message: this.message
        });

        // console.log(this.$store.state.requests);
        // console.log(this.$store.getters['requests/requests']);

        this.$router.replace({name: 'index'});
    },

  }
}
</script>

<!-- --------------------------------------------------------------- -->

<style lang="scss" scoped>

form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  margin-top: 1rem;
  text-align: center;
}

</style>