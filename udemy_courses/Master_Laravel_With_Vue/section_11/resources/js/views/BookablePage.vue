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
                    <button class="btn btn-outline-secondary w-100"
                        @click="addToBasket({bookable, price})" :disabled="inBasketAlready" v-if="!inBasketAlready">
                        Book now
                    </button>
                    <button class="btn btn-outline-secondary w-100 " v-else
                        @click="removeFromBasket({bookable})">
                        Remove from basket
                    </button>
                </div>

            </transition>
            <div class="mt-4 text-muted warning" v-if="inBasketAlready">
                Seems like your're added this to your basket already. 
                I if you like to change dates, 
                you need to remove it from basket first.
            </div>
        </div>
    </div>
</template>

<!-- --------------------------------------------------------------- -->

<script>
import Availability from '../components/Availability.vue';
import ReviewList from '../components/ReviewList.vue';
import PriceBreakdown from '../components/PriceBreakdown.vue';
import { mapGetters, mapActions } from 'vuex';

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
            inBasketAlreadyVuex: 'inBasketAlready'
        }),
        inBasketAlready() {
    
            if (!this.bookable?.id) return;  
            return this.inBasketAlreadyVuex(this.bookable.id);
        }
    },
    methods: {
        ...mapActions({
            addToBasket: 'addToBasket',
            removeFromBasket: 'removeFromBasket',
        }),

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
    .warning {
        font-size: .7rem;
    }
</style>