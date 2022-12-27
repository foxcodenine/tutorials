<template >
    <div class="padding d-none d-md-block">
        <h6 class="text-uppercase text-secondary fw-bolder pt-4">Review List</h6>

        <div v-if="loading">Loading...</div>
        <div v-else>

                <div class="border-bottom" v-for="review, index in reviews" :key="index">
                    <div class="row pt-4">
                        <div class="col-md-6">Chris Farrugia</div>
                        <div class="col-md-6 d-flex justify-content-end">
                            <star-rating :modelValue="review.rating" class="fa-lg"></star-rating>
                        </div>
                    </div>

                    <div class="row ">
                        <div class="col-mf-12">{{ $filters.timeFromNow(review.created_at) }}</div>
                    </div>

                    <div class="row py-4">
                        <div class="col-md-12">
                            {{review.content}}
                        </div>
                    </div>
                </div>

        </div>


    </div>
</template>

<!-- --------------------------------------------------------------- -->

<script>
import moment from "moment";
export default {
    props: {
        bookableId: String
    },
    data() {
        return {
            loading: false,
            reviews: null
        }
    },
    computed: {

    },
    methods: {
        fromNow(value) {
            return moment(value).fromNow();
        }
    },

    async  created() {
        this.loading = true;

        const response = await axios.get(`/api/bookables/${this.bookableId}/reviews`);
        this.reviews = response.data.data;
        console.log(response.data.data);

        this.loading = false;
    }
}
</script>

<!-- --------------------------------------------------------------- -->

<style lang="scss" scoped>
    .padding {
        padding: 1.25rem;
    }
</style>