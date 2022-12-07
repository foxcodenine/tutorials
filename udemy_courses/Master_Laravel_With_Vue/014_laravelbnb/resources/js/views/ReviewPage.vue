<template >
    <div>
        <div class="row" v-if="error">Unknown error has occured, please try again later!</div>
        <div class="row" v-else>
            <div :class="{'col-md-4': twoColumn, 'd-none':  oneColumn}">
                <div class="card">
                    <div class="card-body">
                        <div v-if="loading">Loading...</div>
                        <div v-if="hasBooking">
                            <p>
                                Stayed at 
                                <router-link :to="{name: 'bookable', params: {id: booking.bookable.bookable_id} }">{{booking.bookable.title}}</router-link>
                            </p>
                            <p>From {{ booking.from }} to {{ booking.to }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div :class="{'col-md-8': twoColumn, 'col-md-12':  oneColumn}" >
                <div v-if="loading">Loading...</div>
                <div v-else>
                    <div v-if="alreadyReviewed">
                        <h3>You've have aleardy left a review for this booking!</h3>
                    </div>
                    <div v-else>
                        <div class="from-group">
                            <label  class="text-muted">
                                Select the star rating (1 is worst - 5 is best)
                                <star-rating  class="fa-3x"                 
                                v-model="review.rating"
                                ></star-rating>
                            </label>
                        </div>
                        <div class="from-group">
                            <label for="content" class="text-muted">
                                Describe your expirience with us:
                            </label>
                            <textarea name="content" cols="30" rows="10"
                            class="form-control" v-model="review.content">
                            </textarea>
                        </div>
                        <button class="btn btn-lg btn-primary mt-4 w-100">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<!-- --------------------------------------------------------------- -->

<script>
import { is404 } from "../components/shared/utils/response.js";

export default {
    data() {
        return {
            loading: false,
            review: {
                rating: 5,
                content: null
            },
            existingReview: null,
            booking: null,
            error: false,
        }
    },
    methods: {
        onRatingChanged(rating){            
            this.review.rating = rating;
        }
    },
    computed: {
        alreadyReviewed() {            
           return this.hasReview || !this.hasBooking;
        },
        hasReview() {
            return this.existingReview !== null;
        },
        hasBooking() {
            return this.booking !== null;
        },
        oneColumn() {
            return !this.loading && this.alreadyReviewed;
        },
        twoColumn() {
            return this.loading && !this.alreadyReviewed;
        },
    },
    async created() {
        this.loading = true;
        // - 1. If review already exits (in review table by id)
        
        try {

            let response = await axios.get(`/api/reviews/${this.$route.params.id}`);
            this.existingReview = response.data.data;
            this.loading = false;            

        } catch(error) {
            
            if ( is404(error) ) {
                
                // - 2. Fetch a booking by a review key
                try {
                    let response = await axios.get(`/api/booking-by-review/${this.$route.params.id}`);
                    this.booking = response.data.data;
                    this.loading = false;

                } catch (error) {
                    console.log(error)
                    this.error = true;
                }                
                
            } else {
                console.log(error);
                
                // if ( !is404(error) ) {
                //     this.error = true;
                // }                

                // is404(error) ? {} :(this.error = true);

                this.error = !is404(error);
            }

        } finally { 
            
         
        }
        

        // - 3. Store the review
    },
}
</script>

<!-- --------------------------------------------------------------- -->

<style lang="scss" scoped>
    
</style>