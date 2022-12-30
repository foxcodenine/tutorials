<template >
    <div>
        <div class="row" v-if="success">
            <SussessMessage>You left a review. Thank you very much</SussessMessage>
        </div>
        <div class="row" v-else-if="error"><FatalError :errorMessage="errorMessage" /></div>
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
                            class="form-control" v-model="review.content"
                            :class="{'is-invalid': errorFor('content')}">
                            </textarea>
                            <ValidationErrors :errors="errorFor('content')" />
                        </div>
                        <button class="btn btn-lg btn-primary mt-4 w-100" @click.prevent="submit" :disabled="sending">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<!-- --------------------------------------------------------------- -->

<script>
import { is404, is422 } from "../components/shared/utils/response.js";
import validationErrorsMixin from "../components/shared/mixins/validationErrorsMixin.js";

export default {
    mixins: [validationErrorsMixin],
    data() {
        return {
            loading: false,
            review: {
                id: null,
                rating: 5,
                content: null
            },
            existingReview: null,
            booking: null,
            error: false,
            errorMessage: 'Unknown error has occured, please try again later!',
            sending: false,
            success: false,
        }
    },
    methods: {
        onRatingChanged(rating){            
            this.review.rating = rating;
        },

        async submit() {
            this.errors = null;
            this.sending = true;
            try {                
                // - 3. Store the review
                let response = await axios.post(`/api/reviews`, this.review);    
                console.log(response);
                this.success = response.status === 201 || response.status === 200;


            } catch (error) {
                if (is422(error)) {
                    const errors = error.response.data.errors;
                    if(errors["content"] && _.size(errors) === 1) {
                        this.errors = errors;
                        return;
                    }
                }
                console.log(error)
                this.error = true;

            } finally {
                this.sending = false;
            }
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
            return this.loading || !this.alreadyReviewed;
        },
    },
    async created() {
        this.review.id = this.$route.params.id;
        this.loading = true;
        // - 1. If review already exits (in review table by id)
        
        try {

            let response = await axios.get(`/api/reviews/${this.review.id}`);
            this.existingReview = response.data.data;
            this.loading = false;            

        } catch(error) {
            
            if ( is404(error) ) {
                
                // - 2. Fetch a booking by a review key
                try {
                    let response = await axios.get(`/api/booking-by-review/${this.review.id}`);
                    this.booking = response.data.data;
                    

                } catch (error) {
                    if (is404(error) ) {
                        this.errorMessage = 'Unknown review id!';
                        this.error = true;
                    } else {
                        this.errorMessage = 'Unknown error has occured, please try again later!';
                        this.error = true;
                    }
                } finally {
                    this.loading = false;
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
            
            this.loading = false;
        }
        

    },
    mounted() {
		// if (!this.isLoggedIn) {
		// 	this.$router.replace({name: 'login'});
		// }
	}
}
</script>

<!-- --------------------------------------------------------------- -->

<!-- <style lang="scss" scoped>
    .form-control.is-invalid ~  div .invalid-feedback{
        display: block;
    }
</style> -->