<template>
    <div class="formbox" >

        <CloseAll v-if="!deleteAccountOn" />

        <h2 class="heading-2 mb-tn">{{mainTitle}}</h2>
        <div class="formbox__text mb-sm"><div>{{subTitle}}</div> <div>{{ retuneEmail }}</div></div>

        <div class="formbox__content" >            

            <input 
                v-model="password"
                @keyup.enter="deleteOrCancele()"
                class="full-span" 
                type="password" 
                placeholder="Enter accout password">        

                <!-- <p class="timer full-span ">Account will be delete in {{timer}}s</p> -->
            <button                  
                class="full-span btn formbox__btn mb-sm " 
                type="submit"
                :class="{
                    'disabled': password.length < 6 && !deleteAccountOn , 
                    'danger': deleteAccountOn,
                    'dangerdanger': timer < 20
                }"
                @click="deleteOrCancele()">
                {{this.deleteAccountOn ?`ACCOUNT DELETED in ${this.returnTimer} seconds - CANCELE NOW!` : 'Delete my Account'}} 
            </button>

            

        </div>        
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
                mainTitle: 'Delete Account',
                subTitle: 'We are sorry to lose you!', 
                email: null,
                password: '',
                deleteAccountOn : false,
                
                timer: 60,
            }
        },
        validations: {
        },
        watch: {
            deleteAccountOn() {
                if (this.deleteAccountOn) {
                    this.password = '';
                    this.myTimer()
                } else {

                    clearInterval(this.t)
                    this.timer = 60
                }                
            },
            timer() {
                if (this.timer === 0 && this.deleteAccountOn) {
                    clearInterval(this.t)
                    this.timer = 0;

                    this.$store.dispatch('deleteAccount')
                    .then(data => {
                        if (data.state === 'success') {
                            this.$store.dispatch('userSignOut')

                            this.flashMessage.show({
                                html: data.message,
                                time: 8000,
                                status: 'info',
                                blockClass: 'flash_massage_markup'
                            });
                        }
                    })
                    .catch(err => console.log(err))
                }
            }
        },
        computed: {
            retuneEmail() {
                return this.email ?  this.email : '';
            },
            returnTimer() {
                return this.timer
            }
        },
        methods: {
            myTimer() {
                this.t = setInterval(() => {
                    this.timer -= 1
                }, 1000)
            },
            deleteOrCancele() {
                if (this.deleteAccountOn ){
                    this.canceleDelete()
                } else {
                    this.startDelete()
                }
            },
            canceleDelete() {
                this.deleteAccountOn = false;
            },
            async startDelete() {
                if (this.password.length < 6) return;
                this.deleteAccountOn = await this.checkPassword();
            },
            async checkPassword() {                
                const result =  await this.$store.dispatch('checkPassword', this.password);
                if (!result) {
                    this.flashMessage.show({
                        html: `<ul class="flash_massage_markup">Invalid password!</ul>`,
                        time: 6000,
                        status: 'warning',
                        blockClass: 'custom-block-class'
                    })
                }
                return result;
            },
        },
        async mounted() {
            await this.$store.dispatch('autoLogin');   //<-
            this.email = this.$store.getters.getUserInfo.email;
            if (!this.$store.getters.getIsUserLogedIn) {
                this.$store.dispatch('userSignOut')
            }
        }
    }

</script>

<style lang="scss" scoped>
.danger {
    background-color: coral;
}
.dangerdanger {
    background-color: crimson;
}
</style>

