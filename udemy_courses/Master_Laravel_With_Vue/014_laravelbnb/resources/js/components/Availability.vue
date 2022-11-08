<template >
    <div>
        <h5 class="text-uppercase text-secondary font-weight-bolder">Check Availability</h5>

        <div class="form row g-3">
            <div class="col-md-6">
                <label for="from">From</label>
                <input type="text" class="form-control" placeholder="Start date" id="from" 
                v-model="from" v-on:keyup.enter="check">
            </div>
            <div class="col-md-6">
                <label for="to">To</label>
                <input type="text" class="form-control" placeholder="End date" id="to" v-model="to">
            </div>
        </div>

        <button class="btn btn-secondary w-100 mt-3" v-on:click="check">Check!</button>
    </div>
</template>

<!-- --------------------------------------------------------------- -->

<script>
export default {
    data() {
        return {
            from: null,
            to: null
        }
    },
    methods: {
        check() {
            alert("I'll check something!");
        }
    }
}
</script>

<!-- --------------------------------------------------------------- -->

<style lang="scss" scoped>
    label {
        font-size: 0.7rem;
        text-transform: uppercase;
        color: gray;
        font-weight: bolder;
    }
</style>