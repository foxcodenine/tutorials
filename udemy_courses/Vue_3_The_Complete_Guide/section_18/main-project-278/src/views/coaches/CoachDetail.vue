<template lang="en">
    <div forAnimation>
        <section>
            <base-card>
                <h2>{{ fullName }}</h2>
                <h3>${{ rate }}/hour</h3>
            </base-card>
        </section>

        <section>
            <base-card>
                <header>

                <h2>Interested? Reach out now!</h2>

                <base-button :isLink="true" :linkTo="{ name: 'contact', params: {id:  id  } }">
                Contact
                </base-button>

                </header>
            </base-card>
        </section>

        <section>
            <base-card>

                <base-badge  v-for="area in areas" :key="area" :type="area" :title="area"></base-badge>

                <p>{{ description }}</p>

            </base-card>
        </section>

        <!-- <router-link :to="{ name: 'contact', params: {id: '1'} }">contact</router-link> -->

        <router-view></router-view>
    </div>
</template>

<!-- --------------------------------------------------------------- -->

<script>
    import { mapGetters } from "vuex";
export default {

    props: {'id': String},

    data() {
        return {
            selectedCoach: null
        }
    },
    
    computed: {

        ...mapGetters('coaches', {
            getCoachs: 'coaches'
        }),

        fullName() {
            return this.selectedCoach?.firstName + ' ' + this.selectedCoach?.lastName; 
        },

        rate() {
            return this.selectedCoach?.hourlyRate;
        },

        areas() {
            return this.selectedCoach?.areas
        },

        description() {
            return this.selectedCoach?.description;
        },
    },

    created() {
        // const id =  this.$route.params.id

        const self = this;        
        this.selectedCoach = this.getCoachs.find(function(coach) {
            return coach.id === self.id;
        });
    }
}
</script>

<!-- --------------------------------------------------------------- -->

<style lang="scss" scoped>
    
</style>