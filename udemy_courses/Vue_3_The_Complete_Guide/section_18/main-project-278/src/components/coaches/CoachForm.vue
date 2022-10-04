<template>
    <form v-on:submit.prevent="submitForm">
        <div class="form-control" :class="{invalid: !firstname.isValid}">
            <label for="firstname">First name</label>
            <input type="text" id="firstname" v-model.trim="firstname.val" v-on:blur="clearValidety('firstname')">
            <p v-if="!firstname.isValid">Firstname must not be empty.</p>
        </div>

        <div class="form-control" :class="{invalid: !lastname.isValid}">
            <label for="lastname">Last name</label>
            <input type="text" id="lastname" v-model.trim="lastname.val" v-on:blur="clearValidety('lastname')">
            <p v-if="!lastname.isValid">Lastname must not be empty.</p>
        </div>

        <div class="form-control" :class="{invalid: !description.isValid}">
            <label for="description">Description</label>
            <textarea rows="5" id="description" v-model.trim="description.val" v-on:blur="clearValidety('description')">
            </textarea>
            <p v-if="!description.isValid">Description must not be empty.</p>
        </div>

        <div class="form-control" :class="{invalid: !rate.isValid}">
            <label for="rate">Hourly Rate</label>
            <input type="text" id="rate" v-model.number="rate.val" v-on:blur="clearValidety('rate')">
            <p v-if="!rate.isValid">Rate must be greater then 0.</p>
        </div>

        <div class="form-control" :class="{invalid: !areas.isValid}">
          <h3>Areas of Expertise</h3>
            <div>
                <input type="checkbox" id="frontend" value="frontend" v-model="areas.val" v-on:change="clearValidety('areas')">
                <label for="frontend">Frontend Development</label>
            </div>
            <div>
                <input type="checkbox" id="backend" value="backend" v-model="areas.val" v-on:change="clearValidety('areas')">
                <label for="backend">Backend Development</label>
            </div>
            <div>
                <input type="checkbox" id="career" value="career" v-model="areas.val" v-on:change="clearValidety('areas')">
                <label for="career">Career Advisory</label>
            </div>
            <p v-if="!areas.isValid">At least one expertise.</p>
        </div>
        <p style="color: red" v-if="!formIsValid">Please fix the above errors and submit again.</p>
        <base-button>Register</base-button>
    </form>
</template>

<!-- --------------------------------------------------------------- -->

<script>
/* eslint-disable */
export default {
  emits: ['save-data'],

  data() {
		return {
			firstname:       {val: '', isValid: true},
			lastname:       {val: '', isValid: true},
			description:    {val: '', isValid: true},
			rate:           {val: null, isValid: true},
			areas:          {val: [], isValid: true},
      formIsValid: true
		}
	},

  methods: {
    clearValidety(input) {
      this.formIsValid = true;
      this[input].isValid = true;
    },

    validateFrom() {     

      // ____________________________

      ['firstname', 'lastname', 'description'].forEach(function(field) {

        if (this[field].val === '') { this[field].isValid = false; this.formIsValid = false; }

      }.bind(this));

      // ____________________________

      if (!this.rate.val || this.rate.val < 0) {
        this.rate.isValid = false; this.formIsValid = false;
      }

      // ____________________________

      if (this.areas.val.length === 0) {
        this.areas.isValid = false; this.formIsValid = false;
      }
    },

		submitForm() {

      this.validateFrom();

      if (!this.formIsValid) { return };
      
			const formData = {
				first: this.firstname.val,
				last: this.lastname.val,
				desc: this.description.val,
				rate: this.rate.val,
				areas: this.areas.val,
			}

      this.$emit('save-data', formData);
		}
	}
}
</script>

<!-- --------------------------------------------------------------- -->

<style lang="scss" scoped >
    .form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label, .invalid p {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>