<template >
    <div class="padding d-none d-md-block">
        <h6 class="text-uppercase text-secondary fw-bolder pt-4">Review List</h6>

        <div class="border-bottom" v-for="n in 3" :key="n">

            <div class="row pt-4">
                <div class="col-md-6">Chris Farrugia</div>
                <div class="col-md-6 d-flex justify-content-end">Star Rating</div>
            </div>

            <div class="row ">
                <div class="col-mf-12">Added 5 minutes ago</div>
            </div>

            <div class="row py-4">
                <div class="col-md-12">
                    Content of the review
                </div>
            </div>

        </div>
    </div>
</template>

<!-- --------------------------------------------------------------- -->

<script>
export default {
    
}
</script>

<!-- --------------------------------------------------------------- -->

<style lang="scss" scoped>
    .padding {
        padding: 1.25rem;
    }
</style>