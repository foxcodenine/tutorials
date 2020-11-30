<template>
    <div class="formbox" >

        <CloseAll></CloseAll>

        <h2 class="heading-2 mb-tn">{{mainTitle}}</h2>
        <p class="formbox__text mb-sm">{{subTitle}}</p>
        

        <form class="formbox__content" @submit.prevent="signUp()">
            <input 
                v-model="userInfo.firstname" 
                @blur="$v.userInfo.firstname.$touch()"
                :class="{'invalid': validateField('firstname')}"
                type="text" 
                placeholder="First name">
            <!-- <small>{{$v}}</small> -->
            <input 
                v-model="userInfo.lastname" 
                @blur="$v.userInfo.lastname.$touch()"
                :class="{'invalid': validateField('lastname')}"
                type="text" 
                placeholder="Last name">
            <input 
                v-model="userInfo.email" 
                @blur="$v.userInfo.email.$touch()"
                :class="{'invalid': validateField('email')}"
                type="email" 
                placeholder="Email">
            <input 
                v-model="userInfo.password" 
                @blur="$v.userInfo.password.$touch()"
                :class="{'invalid': validateField('password')}"
                type="password" 
                placeholder="New password">
            <input 
                v-model="userInfo.dob" class="full-span" 
                @blur="$v.userInfo.dob.$touch()"
                :class="{'invalid': validateField('dob')}"
                type="date" 
                placeholder="Birthday">

            <button 
                class="btn formbox__btn full-span mt-md"
                :disabled="$v.userInfo.$invalid" 

                type="submit">Sign Up</button>
        </form>
        <!-- <small>{{$v}}</small> -->
        <!-- <small>{{$v.userInfo.$invalid}}</small> -->

        
    </div>
    
</template>

<script>
    import CloseAll from "@/components/CloseAll";
    import {required, minLength, email} from 'vuelidate/lib/validators'
    export default {
        components: {
            CloseAll
        },
        data() {
            return {
                mainTitle: 'Sign Up',
                subTitle: 'It’s quick and easy.',
                userInfo: {
                    firstname: '',
                    lastname: '',
                    email: '',
                    password: '',
                    dob: ''
                }
            }
        },
        validations: {
            userInfo: {
                firstname: {
                    required,
                },
                lastname: {
                    required
                },
                email: {
                    required,
                    email
                },
                password: {
                    required,
                    minLength: minLength(6)
                },
                dob: {
                    required
                },
            }
        },
        methods: {
            signUp() {    
                console.log(this.userInfo)   
                
                // this.$axios.get('/TSA/user/')
                // .then(data => {
                //     console.log(data)
                // })

                this.$axios.$post('/TSA/user/', {...this.userInfo})
                .then(data => {
                    console.log(data)
                    this.clearUserInfo();
                })

            },
            clearUserInfo() {
                this.userInfo = {
                    firstname: '',
                    lastname: '',
                    email: '',
                    password: '',
                    dob: ''
                }
            },
            validateField(field) {
                return  this.$v.userInfo[`${field}`].$invalid && 
                        this.$v.userInfo[`${field}`].$dirty
            }
        },
    }

</script>

