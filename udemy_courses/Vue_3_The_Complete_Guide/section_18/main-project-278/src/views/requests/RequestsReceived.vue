<template >
    <section>

        <base-card>
            <header>
                <h2>Requests Received</h2>
            </header>
            
            <base-spinner v-if="isLoading"></base-spinner>

            <ul v-else-if="hasRequest">
                <request-item 
                    v-for="req in recivedRequest"
                    :key="req.id"
                    :email="req.userEmail"
                    :message="req.message">
                </request-item>
            </ul>

            <base-dialog v-else-if="error" 
                title="An error has occored while loading the requests!" 
                v-bind:show="!!error" 
                v-on:close="error=null">
                    <p>{{error}}</p>
            </base-dialog>

            <h3 v-else>You haven't received any request yet!</h3>

        </base-card>

    </section>
</template>

<!-- --------------------------------------------------------------- -->

<script>
import { mapGetters, mapActions } from 'vuex';
import RequestItem from '@/components/requests/RequestItem.vue';
import BaseDialog from '@/components/ui/BaseDialog.vue';

export default {
    components: { RequestItem, BaseDialog },

    data() {
        return {
            isLoading: false,
            error: null
        }
    },

    computed: {
        ...mapGetters("requests", {
            recivedRequest: "requests",
            hasRequest: "hasRequest"
        }),
    },

    methods: {
        ...mapActions('requests', {
            fetchRequest: 'fetchRequest'
        }),

        async loadRequest() {
            this.isLoading = true;
            try {
                await this.fetchRequest();
            } catch(e) {
                this.error = e.message || 'Something failed';
            } finally {
                this.isLoading = false;
            }
            
        }
    },
    
    created() {
        this.loadRequest();
    },
    mounted() {
        
    }
}
</script>

<!-- --------------------------------------------------------------- -->

<style lang="scss" scoped>
header {
    text-align: center;
}

ul {
    list-style: none;
    margin: 2rem auto;
    padding: 0;
    max-width: 30rem;
}

h3 {
    text-align: center;
}
</style>