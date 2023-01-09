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
            <availability :bookable-id="id"></availability>            
        </div>
    </div>
</template>

<!-- --------------------------------------------------------------- -->

<script>
import Availability from '../components/Availability.vue';
import ReviewList from '../components/ReviewList.vue';


export default {
    components: { Availability, ReviewList },
    props: {
        id: String
    },
    data() {
        return {
            bookable: null,
            loading: false
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
}
</script>

<!-- --------------------------------------------------------------- -->

<style lang="scss" scoped>
    
</style>