<template>
  <div id="signin">
      <div class="signin-form">
          <form @submit.prevent="onSubmit">
              <div class="input">
                  <label for="email">Mail</label>
                  <input 
                        type="email" 
                        id="email"
                        v-model="email">
              </div>
              <div class="input">
                  <label for="password">Password</label>
                  <input 
                        type="password" 
                        id="password"
                        v-model="password">
              </div>
              <div class="submit">
                  <button type="submit">Submit</button>
              </div>
          </form>
          
      </div>
      <div class="signin-form">
        <p :class="{'display-class': !inValidEmail}" style="color: red;">In Valid Email!</p>
        <p :class="{'display-class': !inValidPassword}" style="color: red;">In Valid Password!</p>
        <p :class="{'display-class': !userLogedIn}" style="color: blue;">Your are loged in as: {{ email }}</p>
      </div>
      
  </div>
</template>



<script>

    import axiosAuth from '../../axios-auth'

    export default {
        data() {
            return {
                email: '',
                password: '',
                inValidEmail: false,
                inValidPassword: false,
                userLogedIn: false,
            }
        },
        methods: {
            async onSubmit() {
                const formData = {
                    email: this.email,
                    password: this.password,
                }
                // console.log(formData);

                const response = await axiosAuth.get('/users.json');

                const responseDataArray = [];

                for (let key in response.data) {
                  responseDataArray.push(response.data[key])
                }
                
                const currentUser = responseDataArray.find(user => {
                  return user.email === this.email
                });

                if (!currentUser) {
                  this.inValidEmail = true;
                  this.inValidPassword = false;
                  this.userLogedIn = false;

                } else {
                  this.inValidEmail = false;
                  

                  if (currentUser.password !== this.password) {
                    this.inValidPassword = true                      
                  } else {
                    this.inValidPassword = false;
                    this.userLogedIn = true;
                  }
                }
                // sarah.magri@yahoo.com



                console.log('>>', currentUser); 
            }
        }
    }

</script>



<style scoped>
  .signin-form {
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

  .input input {
    font: inherit;
    width: 100%;
    padding: 6px 12px;
    box-sizing: border-box;
    border: 1px solid #ccc;
  }

  .input input:focus {
    outline: none;
    border: 1px solid #521751;
    background-color: #eee;
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

  .display-class {
    display: none;
  }
</style>