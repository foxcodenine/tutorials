<template >
    <div class="w-50 m-auto align-items-center">
        <div class="card card-body">
            <form action="">

                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" name="name"
                    placeholder="Enter your name" v-model="user.name"
                    :class="{'is-invalid': errorFor('name')}">
                    <ValidationErrors :errors="errorFor('name')" />
                </div>

                <div class="form-group mt-3">
                    <label for="email">Email</label>
                    <input type="text" class="form-control" name="email"
                    placeholder="Enter your e-mail" v-model="user.email"
                    :class="{'is-invalid': errorFor('email')}">
                    <ValidationErrors :errors="errorFor('email')" />
                </div>

                <div class="form-group mt-3">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" name="password"
                    placeholder="Enter your password" v-model="user.password"
                    :class="{'is-invalid': errorFor('password')}">
                    <ValidationErrors :errors="errorFor('password')" />
                </div>

                <div class="form-group mt-3">
                    <label for="password_confirmation">Re-type Password</label>
                    <input type="password" class="form-control" name="password_confirmation"
                    placeholder="Confirm your password" v-model="user.password_confirmation"
                    :class="{'is-invalid': errorFor('password_confirmation')}">
                    <ValidationErrors :errors="errorFor('password_confirmation')" />
                </div>

                <button type="button" class="btn btn-primary btn-lg w-100 my-4 " @click="submitForm" :disabled="loading"> Log-in</button>

                <hr>

                <div>
                    Aleady have an account?
                    <router-link :to="{name: 'login'}" class="fw-bold link-primary"> Log-in</router-link>
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
            user: {
                name: null,
                email: null,
                password: null,
                password_confirmation: null,
            },
            loading: false
        }
    },
    methods: {
        async submitForm() {
            this.loading = true;
            this.errors = null;

            try {
                const response = await axios.post('/register', this.user);

                if (201 == response.status) {

                    logIn();
                    this.$store.dispatch("loadUser");
                    // this.$router.push({name: "home"});
                    this.$router.replace({name: "home"});
                }            


            } catch (error) {
                console.log(error.response)
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