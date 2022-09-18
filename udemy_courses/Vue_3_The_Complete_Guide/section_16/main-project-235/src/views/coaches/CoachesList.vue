<template>
    <section>
        <coach-filter v-on:change-filter="setFilter"></coach-filter>
    </section>

    <section>
        <base-card>
            <div class="controls">
                <base-button mode="outline">Refresh</base-button>
                <base-button :isLink="true" :linkTo="{name: 'register'}">Register as Coach</base-button>
            </div>

            <ul v-if="hasCoaches">
                <li v-for="(coach) in filteredCoaches" :key="coach.id">
                    <coach-item :coach="coach"></coach-item>
                </li>
            </ul>
            <h3 v-else>No coaches found.</h3>
        </base-card>
        
    </section>
</template>

<!-- --------------------------------------------------------------- -->

<script>
/* eslint-disable */ 
import { mapGetters } from "vuex";
import CoachItem from '../../components/coaches/CoachItem.vue'
import CoachFilter from '../../components/coaches/CoachFilter.vue'

export default {
    components: {
        CoachItem, CoachFilter
    },

    data() {
        return {
            activeFilters: {
                frontend: true,
                backend:  true,
                career:   true
            },
        }
    },

    computed: {
        ...mapGetters('coaches', {
            coaches: 'coaches',
            hasCoaches: 'hasCoaches'
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
        setFilter(updateFilters) {
            this.activeFilters = updateFilters;
        }
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

