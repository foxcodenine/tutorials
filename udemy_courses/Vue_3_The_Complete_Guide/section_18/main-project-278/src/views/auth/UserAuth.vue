<template >
    <div>
        <base-dialog v-bind:show="!!error" v-on:close="error=null" title="An error occurred!">
            <p>{{ error }}</p>
        </base-dialog>
        
        <base-dialog v-bind:show="isLoading" title="Authenticatiing..." fixed >
            <base-spinner></base-spinner>
        </base-dialog>
        
        <base-card>
            <form v-on:submit.prevent="submitForm">
                <div class="form-control">
                    <label for="email">Email</label>
                    <input type="email" id="email" v-model.trim="email">
                </div>
                <div class="form-control">
                    <label for="password">Password</label>
                    <input type="password" id="password" v-model.trim="password">
                </div>
                <p v-if="!formIsValid">
                    Please enter a valid email and password (must be at least 6 characters long).
                </p>
                <base-button>{{submitButtonCaption}}</base-button>
                <base-button v-on:click="switchAuthMode" type="button" mode="flat">{{switchModeButtonCaption}}</base-button>
            </form>
        </base-card>
    </div>
</template>

<!-- --------------------------------------------------------------- -->

<script>
    /* eslint-disable */
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            email: '',
            password: '',
            formIsValid: true,
            mode: 'login',
            isLoading: false,
            error: null
        }
    },

    computed: {
        submitButtonCaption() {
            return this.mode === 'login' ? 'Login' : 'Signup';
        },
        switchModeButtonCaption() {
            return this.mode === 'login' ? 'Signup instead' : 'Login instead';
        }
    },

    methods: {
        ...mapActions( {
            signup: 'signup',
            login: 'login',
        }),
        async submitForm() {
            this.formIsValid = true;
            this.error = null;

            if (this.email === '' || !this.email.includes('@') || this.password.length < 6) {
                    this.formIsValid = false;
                    return;
            }

            this.isLoading = true;

            try {
                // send http request...
                if (this.mode === 'login') {
                    await this.login({email: this.email, password: this.password});

                } else {
                    await this.signup({email: this.email, password: this.password});
                }

                const redirect = this.$route.query.redirect ?? 'coaches';

                this.$router.replace({name: redirect});

            } catch (err) {
                this.error = err.message || 'Failed to authenticate, try later.';
    
            } finally {
                this.isLoading = false;
            }
            },
            switchAuthMode() {
            this.mode = this.mode === 'login' ? 'signup' : 'login';
        },
    }
}
</script>

<!-- --------------------------------------------------------------- -->

<style lang="scss" scoped>
    
form {
  margin: 1rem;
  border: 1px solid #ccc;

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
</style>