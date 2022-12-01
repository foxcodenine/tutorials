<template >
    <div>
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
            <textarea name="content" cols="30" rows="10" class="form-control">
            </textarea>
        </div>
        <button class="btn btn-lg btn-primary mt-4 w-100">Submit</button>
    </div>
</template>

<!-- --------------------------------------------------------------- -->

<script>
export default {
    data() {
        return {
            review: {
                rating: 5,
                content: null
            }
        }
    },
    methods: {
        onRatingChanged(rating){            
            this.review.rating = rating;
        }
    }
}
</script>

<!-- --------------------------------------------------------------- -->

<style lang="scss" scoped>
    
</style>