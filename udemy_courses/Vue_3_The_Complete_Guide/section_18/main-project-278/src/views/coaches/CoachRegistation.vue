<template >
    <base-card>
        <section>
            <h2>Register as a coach now!</h2>
            <coach-form v-on:save-data="saveData" ></coach-form>
        </section>
    </base-card>
</template>

<!-- --------------------------------------------------------------- -->

<script>

import CoachForm from "../../components/coaches/CoachForm.vue";
import { mapActions } from "vuex";

export default {

    components: {
        CoachForm
    },

    methods: {
        
        ...mapActions('coaches', {
            registerCoach: 'registerCoach'
        }),

        saveData(formData) {
            this.registerCoach(formData);
            this.$router.replace({name: 'index'})
        }
    }
}
</script>

<!-- --------------------------------------------------------------- -->

<style lang="" >
    
</style>