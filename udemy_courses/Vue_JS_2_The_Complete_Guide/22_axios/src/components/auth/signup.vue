<template>
    <div id="signup">
        <div class="signup-form">
            <form @submit.prevent="onSubmit">

                <div class="input">
                    <label for="email">Mail</label>
                    <input 
                            type="email"
                            id="email"
                            v-model="email">
                </div>

                <div class="input">
                    <label for="email">Your Age</label>
                    <input 
                            type="number"
                            id="age"
                            v-model.number="age">
                </div>

                <div class="input">
                    <label for="password">Password</label>
                    <input 
                            type="password"
                            id="password"
                            v-model="password">
                </div>

                <div class="input">
                    <label for="confirm-password">Confirm Password</label>
                    <input 
                            type="password"
                            id="confirm-password"
                            v-model="confirmPassword">
                </div>

                <div class="input">
                    <label for="country">Country</label>
                    <select  id="country" v-model="country" >
                        
                        <option 
                                v-for="land in countries"
                                :value="land"
                                :key="land"                                
                                >
                                
                            {{land}}
                        </option>
                        
                    </select>
                </div>

                <div class="hobbies">
                  <h3>Add some Hobbies</h3>
                  <button type="button" @click="onAddHobby">Add Hobby</button>
                  
                  <div class="hobby-list">
                    <div 
                        class="input"
                        v-for="(hobbyInput, index) in hobbyInputs"
                        :key="hobbyInput.id">
                        <label :for="hobbyInput.id">Hobby #{{ index }}</label>
                        <input 
                            type="text"
                            :id="hobbyInput.id"
                            v-model="hobbyInput.value">
                        <button @click="onDeleteHobby(hobbyInput.id)" type="button">X</button>
                    </div>
                  </div>

                </div>

                <div class="input inline">
                  <input type="checkbox" id="terms" v-model="terms" class="regular-checkbox">
                  <label for="terms">Accept Terms of Use</label>
                </div>

                <div class="submit">
                    <button type="submit">Submit</button>
                </div>
                
            </form>
        </div>
    </div>
</template>

<script>
    import countries from "../../data/countries";
    import axios from 'axios';


    export default {
        data() {
            return {
                email: '',
                age: null,
                password: '',
                confirmPassword: '',
                country: 'Malta', 
                hobbyInputs: [],
                terms: false,
                countries,                
            }
        },
        computed: {
            countriesList() {
                return this.countries;
            }
        },
        methods: {
            async onSubmit() {
                const formData = {
                    email: this.email,
                    age: this.age,
                    password: this.password,
                    confirmPassword: this.confirmPassword,
                    country: this.country,
                    hobbies: this.hobbyInputs.map(hobby => hobby.value),
                    terms: this.terms
                }
                console.log(formData);

                try {
                                   

                  const response = await axios.post('/users.json', formData);
                  // we are using baseURL in main.js so we only need the '/user.json'
                  // users.json not required bu axios it is how firebase works 

                  console.log(response)

                } catch(err) {
                  console.log(err);
                }
                

            },
            onAddHobby() {
              const newHobby = {
                id: Math.random() * Math.random() * 1000,
                value: ''
              }
              this.hobbyInputs.push(newHobby);
            },
            onDeleteHobby(id) {
              this.hobbyInputs = this.hobbyInputs.filter(hobbyInput => {
                return hobbyInput.id !== id;
              });
            }   

        }
    }

</script>


<style scoped>
  .signup-form {
    width: 400px;
    margin: 30px auto;
    border: 1px solid #eee;
    padding: 20px;
    box-shadow: 0 2px 3px #ccc;
  }

  .input {
    margin: 10px auto;
  }

  .input label {
    display: block;
    color: #4e4e4e;
    margin-bottom: 6px;
  }

  .input.inline label {
    display: inline;
  }

  .input input, select {
    font: inherit;
    width: 100%;
    padding: 6px 12px;
    box-sizing: border-box;
    border: 1px solid #ccc;
  }

  .input.inline input {
    width: auto;
  }

  .input input:focus {
    outline: none;
    border: 1px solid #521751;
    background-color: #eee;
  }

  .input select {
    border: 1px solid #ccc;
    font: inherit;
  }

  .hobbies h3 {
    font-weight: 400;
    color: #4e4e4e;
    margin-bottom: 10px;
  }

  .hobbies button {
    border: 1px solid #521751;
    background: #521751;
    color: white;
    padding: 6px;
    font: inherit;
    cursor: pointer;
  }

  .hobbies button:hover,
  .hobbies button:active {
    background-color: #8d4288;
  }

  .hobbies input {
    width: 90%;
  }

  .submit button {
    border: 1px solid #521751;
    color: #521751;
    padding: 10px 20px;
    font: inherit;
    cursor: pointer;
  }

  .submit button:hover,
  .submit button:active {
    background-color: #521751;
    color: white;
  }

  .submit button[disabled],
  .submit button[disabled]:hover,
  .submit button[disabled]:active {
    border: 1px solid #ccc;
    background-color: transparent;
    color: #ccc;
    cursor: not-allowed;
  }

  .regular-checkbox {
	appearance: none;
	background-color: #fafafa;
	border: 1px solid #cacece;
	box-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px -15px 10px -12px rgba(0,0,0,0.05);
	padding: 9px 5px;
	border-radius: 3px;
	display: inline-block;
	position: relative;
  height: 15px;

  transform: translateY(5px);
  
  
}
.regular-checkbox:active, .regular-checkbox:checked:active {
	box-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px 1px 3px rgba(0,0,0,0.1);
}

.regular-checkbox:checked {
	background-color: #e9ecee;
	border: 1px solid #adb8c0;
	box-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px -15px 10px -12px rgba(0,0,0,0.05), inset 15px 10px -12px rgba(255,255,255,0.1);
	color: #99a1a7;
}
.regular-checkbox:checked:after {
	content: '\2714';
	font-size: 14px;
	position: absolute;
	top: -3px;
	left: 6px;
	color: #521751;
}

  
</style>