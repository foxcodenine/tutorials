<template >
    <div class="row">
        <div class="col-lg-8 p-4">
            <div class="card  p-4">
                <div v-if="!loading">
                    <h2>{{bookable.title}}</h2>
                    <hr>
                    <article>{{bookable.description}}</article>
                </div>
                <div v-else >...</div>
            </div>
            <review-list :bookable-id="id"></review-list>
        </div>
        <div class="col-lg-4 p-4">
            <availability :bookable-id="id" @avalability="checkPrice" class="mb-4">
            </availability>          
            <transition name="fade">

                <div v-if="price">
                    <price-breakdown :price="price" class="mb-4"></price-breakdown>
                    <button class="btn btn-outline-secondary w-100" >Book now</button>
                </div>

            </transition>
        </div>
    </div>
</template>

<!-- --------------------------------------------------------------- -->

<script>
import Availability from '../components/Availability.vue';
import ReviewList from '../components/ReviewList.vue';
import PriceBreakdown from '../components/PriceBreakdown.vue';
import { mapGetters } from 'vuex';

export default {
    components: { Availability, ReviewList, PriceBreakdown },
    props: {
        id: String
    },
    data() {
        return {
            bookable: null,
            loading: false,
            price: null,
        };
    },
    async created() {
        // console.log(this.$route.params.id);
        // console.log(this.id);
        this.loading = true;
        const response = await axios.get(`/api/bookables/${this.id}`);
        this.bookable = response.data.data;
        this.loading = false;
    },
    computed: {
        ...mapGetters({
            lastSearchFrom: 'lastSearchFrom',
            lastSearchTo: 'lastSearchTo',
        }),
    },
    methods: {
        async checkPrice(hasAvailability) {

         
            
            if (!hasAvailability) {
                this.price = null;
                return;
            }

            try {
                this.price = (
                    await axios.get(`/api/bookables/${this.bookable.id}/price?from=${this.lastSearchFrom}&to=${this.lastSearchTo}`)
                ).data.data;
                console.log(this.price)
            } 
            catch (error) {

                this.price = null;
            }
        }
    }
}
</script>

<!-- --------------------------------------------------------------- -->

<style lang="scss" scoped>
    
</style>