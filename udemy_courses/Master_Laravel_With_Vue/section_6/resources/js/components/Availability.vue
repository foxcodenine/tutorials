<template >
    <div>
        <h5 class="text-uppercase text-secondary font-weight-bolder">
            Check Availability
            <span v-if="noAvailability" class="text-danger">(NOT AVAILABLE)</span>
            <span v-if="hasAvailability" class="text-success">(AVAILABLE)</span>
        </h5>

        <div class="form row g-3">
            <div class="col-md-6">
                <label for="from">From</label>
                <input type="text" class="form-control" placeholder="Start date" id="from" 
                v-model="from" v-on:keyup.enter="check" :class="{'is-invalid': errorFor('from')}">
                <div class="invalid-feedback" v-for="(error, index) in errorFor('from')" :key="'f'+index">{{error}}</div>
            </div>
            <div class="col-md-6">
                <label for="to">To</label>
                <input type="text" class="form-control" placeholder="End date" id="to" v-model="to"
                :class="{'is-invalid': errorFor('to')}">
                <div class="invalid-feedback" v-for="(error, index) in errorFor('to')" :key="'t'+index">{{error}}</div>
            </div>
        </div>

        <button class="btn btn-secondary w-100 mt-3" v-on:click="check" :disable="loading">Check!</button>
    </div>
</template>

<!-- --------------------------------------------------------------- -->

<script>
export default {
    data() {
        return {
            from: null,
            to: null,
            loading: false,
            status: null,
            errors: null
        }
    },
    computed: {
        hasErrors() {
            return this.status === 422  && this.errors !== null;
        },
        hasAvailability() {
            return this.status === 200;
        },
        noAvailability() {
            
            return this.status === 404;
        }
    },
    methods: {
        errorFor(field) {
            return this.hasErrors && this.errors[field] ? this.errors[field] : null;
        },

        async check() {
            try {
                this.loading = true;                
                this.errors = null;                

                const response = await axios.get(
                    `/api/bookables/${this.$route.params.id}/availability?from=${this.from}&to=${this.to}`
                );

                this.status = response.status;

                // console.log(this.status);
                

            } catch(error) {
                if (error.response.status === 422) {
                    this.errors = error.response.data.errors;                    
                }
                this.status = error.response.status;

            } finally {
                this.loading = false;                
            }

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
    .is-invalid {
        border-color: #b22222;
        background-image: none;
    }
    .invalid-feedback {
        color: #b22222;
    }
</style>