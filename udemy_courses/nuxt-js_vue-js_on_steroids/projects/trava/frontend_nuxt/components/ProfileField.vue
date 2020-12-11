<template>

    <div class="profile__field" >
        <div class="profile__text">
            <small>{{ getFieldName }}:</small>
            <p class="profile__text" v-if="!fieldEdited">{{fieldValue}}</p>
            <input v-model="fieldData" class="profile__input" :type="myInputType" v-if="fieldEdited">
        </div>
        <button 
            @click="fieldEdited=true"
            class="profile__btn--1 btn" 
            v-if="fieldKey !=='signup' && fieldEdited === false">
                <svg class="icon icon-play3"><use xlink:href="@/assets/icomoon/symbol-defs.svg#icon-pencil"></use></svg>
        </button>
        
        <div class="profile__confirm" v-if="fieldKey !=='signup' && fieldEdited === true">
            <span class="yes" @click="confirm()">&#10003;</span>

            <span class="no" @click="reject()">&#10007;</span>
        </div>

    </div>

</template>

<script>
import { email } from "vuelidate/lib/validators";
export default {
    props: ['fieldKey', 'fieldValue'],
    data() {
        return {
            fieldData: '',
            fieldEdited: false,
            
        }
    },
    validations: {
        fieldData: {
            email
        }
    },
    watch: {
    },
    computed: {
        getFieldName() {
            let fieldName;

            switch (this.fieldKey) {
                case 'dob':
                    fieldName = 'date of birth';
                    break;

                case 'signup':
                    fieldName = 'register on';
                    break;
            
                default:
                    fieldName = this.fieldKey;
                    break;                
            }
            return fieldName;
        },
        myInputType() {

            if (this.fieldKey === 'email') {
                return 'text'
            } else if ( this.fieldKey === 'dob') {
                return 'date'
            } else {
                return 'text'
            }
        }
    },
    methods: {
        confirm() {
            if (this.fieldKey === 'dob') {


                // Splite string date into an array
                const d = this.fieldData.split('-');

                // Check if there is an undefined field (day, month or year)
                if(!d[2] || !d[1] || !d[0]) {
  
                    this.reject();
                } else
                // Check if user is under 13 years old
                if(parseInt(d[0]) > new Date().getFullYear()-12) {
                    this.reject();

                } else {
                // Reformating Date String
    
                    this.fieldData = new Date(d[0], d[1]-1, d[2])
                        .toLocaleString('en-MT',{
                            weekday: 'short', year: 'numeric', month: 'short', day: 'numeric'
                        })

                }
            }

            if (this.fieldKey === 'email') {
                if (!this.$v.fieldData.email) {
                    this.reject();
                }
            }

            if (this.fieldData.trim() !== '') {
                this.fieldEdited = false;
                this.$emit('fieldChange', this.fieldData)
            } else {
                this.reject();
            }
            
        },
        reject() {
            this.fieldData = '';
            this.fieldEdited = false;
        },

    }
}
</script>

<style lang="scss">
.profile {
    &__input {

        width: 90%;
        background: rgba(#fff, .02);
        padding: .2rem;
        font-size: 1.6rem;
        padding: .2rem .8rem;
        height: 100%;
        // border-radius: .3rem;
        border: none;
        color: #fffdd0;


    }
}
</style>