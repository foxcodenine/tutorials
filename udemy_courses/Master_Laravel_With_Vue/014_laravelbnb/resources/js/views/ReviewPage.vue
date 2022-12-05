<template >
    <div class="row">
        <div :class="{'col-md-4': loading || !alreadyReviewed, 'd-none':  !loading && alreadyReviewed}">
            <div class="card">
                <div class="card-body">
                    <div v-if="loading">Loading...</div>
                    <div v-else>
                        <p>
                            Stayed at 
                            <router-link :to="{name: 'bookable', params: {id: booking.bookable.bookable_id} }">{{booking.bookable.title}}</router-link>
                        </p>
                        <p>From {{ booking.from }} to {{ booking.to }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div :class="{'col-md-8': loading || !alreadyReviewed, 'col-md-12':  !loading && alreadyReviewed}" >
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
</template>

<!-- --------------------------------------------------------------- -->

<script>
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
        }
    },
    async created() {
        this.loading = true;
        // - 1. If review already exits (in review table by id)
        
        try {

            let response = await axios.get(`/api/reviews/${this.$route.params.id}`);
            this.existingReview = response.data.data;            

        } catch(error) {
            
            if (error.response && error.response.status && error.response.status === 404 ) {
                
                // - 2. Fetch a booking by a review key
                try {
                    let response = await axios.get(`/api/booking-by-review/${this.$route.params.id}`);
                    this.booking = response.data.data;
                    this.loading = false;

                } catch (error) {
                    console.log(error)
                }                
                
            } else {
                
                console.log(error);
            }

        } finally { 
            
            console.log(this.existingReview)           
            console.log(this.booking) 
            console.log(this.loading, !this.alreadyReviewed)          
        }
        

        // - 3. Store the review
    },
}
</script>

<!-- --------------------------------------------------------------- -->

<style lang="scss" scoped>
    
</style>