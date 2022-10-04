<template>
    <div forAnimation>
        <base-dialog 
            v-bind:show="!!error" 
            v-on:close="handleError"
            title="An error occurred!"
            >
            <p>{{ error }}</p>
        </base-dialog>

        <section>
            <coach-filter v-on:change-filter="setFilter"></coach-filter>
        </section>

        <section>
            
            <base-card>
                <div class="controls">
                    <base-button mode="outline" v-on:click="loadCoaches(true)">Refresh</base-button>

                    <base-button :isLink="true" :linkTo="{name: 'register'}" 
                    v-if="!isCoach && !isLoading && isLoggedIn">Register as Coach</base-button>

                    <base-button isLink :to="{'name': 'auth', query: {redirect: 'register'} }" 
                    v-if="!isLoggedIn">Login to Register as a Coach</base-button>
                </div>



                <base-spinner v-if="isLoading"></base-spinner>

                <ul v-else-if="hasCoaches">
                    <li v-for="(coach) in filteredCoaches" :key="coach.id">
                        <coach-item :coach="coach"></coach-item>
                    </li>
                </ul>

                <h3 v-else>No coaches found.</h3>

            </base-card>
            
        </section>
    </div>
</template>

<!-- --------------------------------------------------------------- -->

<script>
/* eslint-disable */ 
import { mapGetters, mapActions } from "vuex";
import CoachItem from '../../components/coaches/CoachItem.vue'
import CoachFilter from '../../components/coaches/CoachFilter.vue'

export default {
    components: {
        CoachItem, CoachFilter
    },

    data() {
        return {
            isLoading: false,
            error: null,
            activeFilters: {
                frontend: true,
                backend:  true,
                career:   true
            },
        }
    },

    computed: {
        ...mapGetters( {
            isLoggedIn: 'isAuthenticated',
        }),
        ...mapGetters('coaches', {
            coaches: 'coaches',
            hasCoaches: 'hasCoaches',
            isCoach: 'isCoach',
            shouldUpdate: 'shouldUpdate'
        }),
        filteredCoaches() {
            const self = this;
            return this.coaches.filter(function(coach) {

                if (self.activeFilters.frontend && !coach.areas.includes('frontend')) return false;
                if (self.activeFilters.backend && !coach.areas.includes('backend')) return false;
                if (self.activeFilters.career && !coach.areas.includes('career')) return false;
                
                if (self.activeFilters.frontend && coach.areas.includes('frontend')) return true;
                if (self.activeFilters.backend && coach.areas.includes('backend')) return true;
                if (self.activeFilters.career && coach.areas.includes('career')) return true;
            });
        }
    },
    methods: {
        ...mapActions('coaches', {
            actionLoadCoaches: 'loadCoaches'
        }), 

        // ...mapActions('requests', {
        //     fetchRequest: 'fetchRequest'
        // }), 

        async loadCoaches(forceRefresh = false) {
            this.isLoading = true;

            try {
                await this.actionLoadCoaches({forceRefresh});

            } catch(error) {
                this.error = error.message || 'Somthing went wrong';

            } finally {
                this.isLoading = false
            }

        },

        setFilter(updateFilters) {
            this.activeFilters = updateFilters;
        },
        
        handleError() {
            this.error = null;
        }
    },
    created() {
        
        this.loadCoaches();
        // this.fetchRequest();
    }
}
</script>

<!-- --------------------------------------------------------------- -->

<style lang="scss" scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>

