<template>
  <form v-on:submit.prevent="submitForm">

    <div class="form-control" v-bind:class="{invalid : userNameIsValid}">
      <label for="user-name">Your Name</label>
      <input id="user-name" name="user-name" type="text" v-model.trim="userName" v-on:blur="validateInput" />
      <p v-if="userNameIsValid">Please enter a valid username</p>
    </div>

    <div class="form-control">
      <label for="age">Your Age (Years)</label>
      <input id="age" name="age" type="number" v-model.number="userAge" />
    </div>

    <div class="form-control">
      <label for="referrer">How did you hear about us?</label>
      <select id="referrer" name="referrer" v-model="referrer">
        <option value="google">Google</option>
        <option value="wom">Word of mouth</option>
        <option value="newspaper">Newspaper</option>
      </select>
    </div>

    <div class="form-control">
      <h2>What are you interested in?</h2>
      <div>
        <input id="interest-news" name="interest" type="checkbox" 
                                      value="news" v-model="interest" />
        <label for="interest-news">News</label>
      </div>
      <div>
        <input id="interest-tutorials" name="interest" type="checkbox" 
                                 value="tutorials" v-model="interest" />
        <label for="interest-tutorials">Tutorials</label>
      </div>
      <div>
        <input id="interest-nothing" name="interest" type="checkbox" 
                                  value="nothings" v-model="interest" />
        <label for="interest-nothing">Nothing</label>
      </div>
    </div>

    <div class="form-control">
      <h2>How do you learn?</h2>
      <div>
        <input id="how-video" name="how" type="radio" value="video" v-model="how" />
        <label for="how-video">Video Courses</label>
      </div>
      <div>
        <input id="how-blogs" name="how" type="radio" value="blogs" v-model="how" />
        <label for="how-blogs">Blogs</label>
      </div>
      <div>
        <input id="how-other" name="how" type="radio" value="other" v-model="how" />
        <label for="how-other">Other</label>
      </div>
    </div>

    <div class="form-control">
      <rating-contol v-model="rating"></rating-contol>
    </div>

    <div class="form-control">
      <input type="checkbox" id="confirm-terms" name="confirm-terms" v-model="confirm"/>
      <label for="confirm-terms">Agree to terms of use?</label>
    </div>

    <div>
      <button>Save Data</button>
    </div>

  </form>
</template>

<!--------------------------------------------------------------------->
<script>
import RatingContol from './RatingContol.vue';

export default {
  components : {

      RatingContol
  },
  data() {
    return {
      userName: '',
      userAge: null,
      referrer: 'wom',
      interest: [], 
      how: null,
      confirm: false,
      userNameValidity: 'pending',
      rating: 'average'
    }
  },
  methods: {
    submitForm() {
      console.log('Username ' + this.userName);
      console.log('Referra ' + this.referrer);
      console.log('interest ' + this.interest);
      console.log('how ' + this.how);
      console.log('confirms ' + this.confirm);
      console.log('userNameValidity ' + this.userNameValidity);
      console.log('rating ' + this.rating);

      this.userName = '';
      this.age = null;
      this.referrer = 'wom';    
      this.interest = [];
      this.how = null;  
      this.confirm = false;  
      this.rating = null;  
    },

    validateInput() {
      this.userNameValidity = this.userName !== '' ? 'valid' : 'invalid';
    },


  },

  computed: {
    userNameIsValid() {
      return this.userNameValidity === 'invalid';
    }
  },
}
</script>

<!--------------------------------------------------------------------->

<style scoped lang='scss'>
form {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #ffffff;
}

.form-control {
  margin: 0.5rem 0;

  &.invalid input {
    border-color: red;
    border-radius: 3px;
  }
  &.invalid label {
    color: red;
  }
}

label {
  font-weight: bold;
}

h2 {
  font-size: 1rem;
  margin: 0.5rem 0;
}

input,
select {
  display: block;
  width: 100%;
  font: inherit;
  margin-top: 0.5rem;
}

select {
  width: auto;
}

input[type='checkbox'],
input[type='radio'] {
  display: inline-block;
  width: auto;
  margin-right: 1rem;
}

input[type='checkbox'] + label,
input[type='radio'] + label {
  font-weight: normal;
}

button {
  font: inherit;
  border: 1px solid #0076bb;
  background-color: #0076bb;
  color: white;
  cursor: pointer;
  padding: 0.75rem 2rem;
  border-radius: 30px;
}

button:hover,
button:active {
  border-color: #002350;
  background-color: #002350;
}
</style>