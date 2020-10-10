<template>
    <div id="signup">
        <div class="signup-form">
            <form @submit.prevent="onSubmit">

                <div class="input" :class="{'invaled': $v.email.$error}">
                    <label for="email">Mail</label>
                    <input 
                            type="email"
                            id="email"
                            @blur="$v.email.$touch()"
                            v-model="email">
                    <!--we used @blur instead of @input or you can v-on:click with a button-->
                    <!-- <small>{{ $v.email }} To Check Error Fields</small>  -->
                    <small v-if="!$v.email.email && $v.email.$error">Please provide a valid email address.</small>
                    <small v-if="!$v.email.required && $v.email.$error">This field must not be empty.</small>
                    <small v-if="!$v.email.uniqueCustomValidator">Email already in use.</small>
                </div>
                

                <div class="input" :class="{'invaled': $v.age.$error}">
                    <label for="age">Your Age</label>
                    <input 
                            type="number"
                            id="age"
                            @blur="$v.age.$touch()"
                            v-model.number="age">
                    <small v-if="!$v.age.minVal && $v.age.$error">You have to be at least {{ $v.age.$params.minVal.min }} years.</small>
                    <small v-if="!$v.age.required && $v.age.$error">This field must not be empty.</small>
                    <!-- <small>{{ $v }} To Check Error Fields</small>   -->
                </div>

                <div class="input" :class="{'invaled': $v.password.$error}">
                    <label for="password">Password</label>
                    <input 
                            type="password"
                            id="password"
                            @blur="$v.password.$touch()"
                            v-model="password">
                    <!-- <small>{{$v.password}}</small> -->
                    <small v-if="!$v.password.minLen && $v.password.$error">Your password must at lest {{ $v.password.$params.minLen.min}} characters</small>
                    <small v-if="!$v.password.required && $v.password.$error">This field must not be empty.</small>
                </div>

                <div class="input" :class="{'invaled': $v.confirmPassword.$error}">
                    <label for="confirm-password">Confirm Password</label>
                    <input 
                            type="password"
                            id="confirm-password"
                            @blur="$v.confirmPassword.$touch()"
                            v-model="confirmPassword">
                    <small v-if="!$v.confirmPassword.sameAs && $v.confirmPassword.$error">Passwords does not match!</small>
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
                        :key="hobbyInput.id"                        
                        :class="{'invaled': $v.hobbyInputs.$each[index].$error}">
                        <label :for="hobbyInput.id">Hobby #{{ index }}</label>
                        <input 
                            type="text"
                            :id="hobbyInput.id"
                            v-model="hobbyInput.value"
                            @blur="$v.hobbyInputs.$each[index].value.$touch()"> 
                        <button @click="onDeleteHobby(hobbyInput.id), $v.hobbyInputs.$touch()" type="button">X</button>
                    </div>
                    <small v-if="!$v.hobbyInputs.required && $v.hobbyInputs.$dirty">Please add a hobby.</small>
                    <!-- <small>{{$v.hobbyInputs}}</small> -->
                  </div>

                </div>

                <!-- we set $v.terms.$invalid not error to be invalid from the start-->
                <div class="input inline" :class="{'invaled': $v.terms.$invalid}"> 
                  <input 
                      type="checkbox" 
                      id="terms" 
                      v-model="terms"
                      class="regular-checkbox"
                      @change="$v.terms.$touch()">
                  <label for="terms">Accept Terms of Use</label>
                  
                  <!-- You need to set watch (as below) to validate as required, and set defalte value to "" -->
                  <!-- false value is not threted as an empty string, so you need to change it to "" an empty string manualy, I do this in watch.-->
                </div>

                <div class="submit">
                    <button type="submit" :disabled="$v.$invalid">Submit</button>
                    <!-- <small>{{$v}}</small> -->
                </div>
                
            </form>
        </div>
    </div>
</template>

<script>
    import countries from "../../data/countries";
    import { mapActions, mapGetters } from "vuex";

    import { required, email, minValue, integer, minLength, sameAs, requiredUnless } from "vuelidate/lib/validators";

    import { api_01 } from '../../axios-auth';
    import axiosGlobal from "axios";

    export default {
        data() {
            return {
                email: '',
                age: null,
                password: '',
                confirmPassword: '',
                country: 'Malta', 
                hobbyInputs: [],
                terms: '',
                countries,                
            }
        },        
        validations: {
          // These shuold have the same name of the data field you are vadidating.
          email: {            
            required,
            email,
            // customValidator: val => {
            //   // check if email is not 'dorothy@yahoo.com'
            //   return val !== 'dorothy@yahoo.com'
            // },
            uniqueCustomValidator: val => {
              if (val === '') return true;
              return fetch('https://vue-axios-cf540.firebaseio.com/users.json')
                    .then(res => res.json())
                    .then(data => {
                      let emails = [];
                      for (let user in data) {
                        emails.push(data[user].email)
                      }
                      return !emails.includes(val);
                    })                     
            }
          },
          age: {
            integer,
            required,
            minVal : minValue(18),
          },
          password: {
            required,
            minLen: minLength(8),
          },
          confirmPassword: {
            // sameAs: sameAs('password') //or you can do
            sameAs: sameAs(function(vm) {
              return vm.password
            })
          },
          terms: {
            // false is validate as a valid not an empty string (i did a quick fix in watch)
            required: requiredUnless(vm => {
              return vm.country === 'Malta'
            }),
            // you can also to the following for a simple required (however the watch quick fix is better)
            // required: sameAs(() => {
            //   return true
            // }) 
          },
          hobbyInputs: {
            // minLen: minLength(1),
            required : required,
            // $each represents each item in the array, here we are vadidting the value of each item
            $each: {
              value: {
                required,
                minLen: minLength(3)
              }
            }
          }
        },
        computed: {
          ...mapGetters({
            isAuthenticated: 'isAuthenticated'
          }),
            countriesList() {
                return this.countries;
            }
        },
        watch: {
          terms() {
            if (!this.terms) {
              this.terms = '';
            }
          }
        },
        methods: {
            ...mapActions({
              signUp: 'signUp',
              logIn: 'logIn'
            }),
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
                // console.log(formData); 
                
                await this.signUp(formData); 
                // await this.logIn(formData); 
                this.resetData(); 

                if (this.isAuthenticated) {
                  // this.$router.push({name: 'dashboard'})
                  this.$router.replace({name: 'dashboard'}) // <- this will replace the current route so we can't go back
                  
                  // you can use the router instead this.$router, you need to imported 
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
            },
            resetData() {
                this.email =  '';
                this.age =  null;
                this.password =  '';
                this.confirmPassword =  '';
                this.country =  'Malta';
                this.hobbyInputs =  [];
                this.terms =  false;
            }   

        }
    }

</script>


<style scoped lang="scss">
  .input.invaled  {

    input {
      border: 1px crimson solid;
      background-color: rgb(243, 205, 213);
    }
    label {
      color: crimson;
    }
    
  }
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