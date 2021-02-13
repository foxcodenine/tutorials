<template>
    <div class="formbox" >

        <CloseAll></CloseAll>

        <h2 class="heading-2 mb-tn">{{mainTitle}}</h2>
        <div class="formbox__text mb-sm"><div>{{subTitle}}</div> <div>{{ retuneEmail }}</div></div>

        <form class="formbox__content" @submit.prevent="updatePassword()">

            
            <input 
                v-if="this.$store.getters.getIsUserLogedIn"
                v-model="password0" 
                class="full-span" 
                type="password" 
                placeholder="Enter current password"
                @blur="$v.password0.$touch()"
                :class="{'invalid': validateField('password0')}">

            <input 
                v-model="password1" 
                class="full-span" 
                type="password" 
                placeholder="Enter new password"
                @blur="$v.password1.$touch()"
                :class="{'invalid': validateField('password1')}">

            <input 
                v-model="password2" 
                class="full-span" 
                type="password" 
                placeholder="Re-enter new password"
                @blur="$v.password2.$touch()"
                :class="{'invalid': validateField('password2')}">        

            <button                  
                class="full-span btn formbox__btn mb-sm mt-sm" 
                type="submit"
                :class="{'disabled': $v.$invalid}">
                Update Password 
            </button>

        </form>
        <small></small>       
        
    </div>     
</template>

<script>

    import CloseAll from "@/components/CloseAll";
    import { required, minLength, sameAs} from "vuelidate/lib/validators";
    export default {
        components: {
            CloseAll
        },
        data() {
            return {

                subTitle: 'Keep it secret!',
                password0: '111111',
                password1: '', 
                password2: '',
                email: null
                
            }
        },
        validations: {
            password0: {
                required,
                minLength: minLength(6)                
            },
            password1: {
                required,
                minLength: minLength(6)                
            },
            password2: {                
                sameAsPassword: sameAs('password1')             
            },
        },
        computed: {
            retuneEmail() {
                return this.email ?  this.email : '';
            },
            mainTitle() {
                return this.$store.getters.getIsUserLogedIn ? 'Change Password' : 'Reset Password'
            }
        },
        methods: {
            updatePassword() {
                if (this.$v.$invalid) {
                    this.flashMessageInvalid();
                    return
                } 
                let dispatch_function, payload;
                if (this.$store.getters.getIsUserLogedIn){

                    dispatch_function = 'updatePassword';
                    payload = {
                        current_password: this.password0, 
                        new_password: this.password1,
                        token: this.$store.getters.getToken
                    };
                } else {

                    dispatch_function = 'changePassword';
                    payload = {email: this.email, password: this.password1}
                }
                this.$store.dispatch(dispatch_function, {...payload})
                .then(data => {
                 
                    this.myThenFunction(data);
                })
                .catch(err => console.log(err))
            },
            async myThenFunction(data) {
   
                if (data.state === 'error') {  
                

                    this.flashMessage.show({
                        html: data.message,
                        time: 8000,
                        status: 'warning',
                        blockClass: 'flash_massage_markup'
                    }); 

                } else if (!await this.$store.getters.getIsUserLogedIn) {

                    this.$store.dispatch('closeAll');

                } else {


                    this.$store.commit('setUserInfo', data.userInfo);
                    this.$store.commit('setToken', data.token);

                    let cookie = await this.$store.dispatch('getFromCookie');
                    let userBoxes = [];

                    if (cookie.userBoxes) {            
                        // await this.$store.dispatch('autoLogin', cookie.userBoxes); 
                        userBoxes = cookie.userBoxes;
                    }

                    const payload_cookie = {userInfo: data.userInfo, token: data.token, userBoxes};
                    this.$store.dispatch('saveToCookie', payload_cookie); 
    
                    this.$store.dispatch('closeAll');

      

                    this.flashMessage.show({
                        html: data.message,
                        time: 8000,
                        status: 'info',
                        blockClass: 'flash_massage_markup'
                    });
                }
            },
            flashMessageInvalid() {                

                let markup = ``;

                // statments

                if (!this.$v.password1.$dirty) {
                    markup += '<li>Password is required!</li>'
                } else if (this.$v.password1.$invalid) {
                    markup += '<li>Password is too short!</li>'
                } else if (this.$v.password2.$invalid) {
                    markup += '<li>Passwords does not match!</li>'
                }               
                

                const html = `<ul class="flash_massage_markup">${markup}</ul>`

                this.flashMessage.show({
                    html,
                    time: 10000,
                    status: 'warning',
                    blockClass: 'custom-block-class'
                })
            },

            validateField(field) {
                return  this.$v[`${field}`].$invalid && 
                        this.$v[`${field}`].$dirty

            },
        },
        async mounted() {
            await this.$store.dispatch('autoLogin', skip);   //<-
            this.email = this.$store.getters.getUserInfo.email;
            if (this.$store.getters.getIsUserLogedIn) {
                this.password0 = null;
            }
        }
    }

</script>

