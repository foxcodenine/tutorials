<template >
    <div class="w-50 m-auto align-items-center">
        <div class="card card-body">
            <form action="">

                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="text" class="form-control" name="email"
                    placeholder="Enter your e-mail" v-model="email"
                    :class="{'is-invalid': errorFor('email')}">
                    <ValidationErrors :errors="errorFor('email')" />
                </div>

                <div class="form-group mt-3">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" name="password"
                    placeholder="Enter your password" v-model="password"
                    :class="{'is-invalid': errorFor('password')}">
                    <ValidationErrors :errors="errorFor('password')" />
                </div>

                <button type="button" class="btn btn-primary btn-lg w-100 my-4 " @click="submitForm" :disabled="loading"> Log-in</button>

                <hr>

                <div>
                    No account yet?
                    <router-link :to="{name: 'register'}" class="fw-bold link-primary"> Register</router-link>
                </div>

                <div>
                    Forgotten password?
                    <router-link :to="{name: 'home'}" class="fw-bold link-primary"> Reset password</router-link>
                </div>
            </form>
        </div>
    </div>
</template>

<!-- --------------------------------------------------------------- -->

<script lang="js">
import validationErrorsMixin from '../../components/shared/mixins/validationErrorsMixin.js';
import { logIn } from '../../components/shared/utils/auth';
export default {
    mixins: [
        validationErrorsMixin
    ],
    data() {
        return {
            email: null,
            password: null,
            loading: false
        }
    },    
    methods: {
        async submitForm() {
            this.loading = true;
            this.errors = null;

            try {
                await axios.get('/sanctum/csrf-cookie');
                await axios.post('/login', {
                	email: this.email,
                	password: this.password,
                });

                // ~~> MOVED TO: store.js->loadUser()
                // let currentUser =  await axios.get('/user');

                logIn();
                this.$store.dispatch("loadUser");

                // this.$router.push({name: "home"});
                this.$router.replace({name: "home"});

            } catch (error) {
                console.log(error)
                this.errors = error.response && error.response.data.errors;

            } finally {
                this.loading = false;
            }
        }
    }
}
</script>

<!-- --------------------------------------------------------------- -->

<style lang="scss" scoped>
    .link-primary {
        text-decoration: none;
    }
</style>