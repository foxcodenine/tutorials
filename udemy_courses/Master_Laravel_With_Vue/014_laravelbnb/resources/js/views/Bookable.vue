<template >
    <div class="row">
        <div class="col-md-8">
            <div class="card  p-4">
                <div v-if="!loading">
                    <h2>{{bookable.title}}</h2>
                    <hr>
                    <article>{{bookable.description}}</article>
                </div>
                <div v-else >...</div>
            </div>
        </div>
        <div class="col-md-4">avalability & prices</div>
    </div>
</template>

<!-- --------------------------------------------------------------- -->

<script>
export default {
    props: {
        id: String
    },
    data() {
        return {
            bookable: null,
            loading:false
        }
    },
    async created() {
        // console.log(this.$route.params.id);
        // console.log(this.id);
        this.loading = true;

        const response = await axios.get(`/014/api/bookables/${this.id}`);
        this.bookable = response.data.data;        
        this.loading = false;

    }
}
</script>

<!-- --------------------------------------------------------------- -->

<style lang="scss" scoped>
    
</style>