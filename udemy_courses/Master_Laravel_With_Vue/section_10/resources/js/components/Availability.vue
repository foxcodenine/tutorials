<template >
    <div>
        <h5 class="text-uppercase text-secondary font-weight-bolder">
            Check Availability
            <Transition name="fade">
                <span v-if="noAvailability" class="text-danger">(NOT AVAILABLE)</span>
            </Transition>
            <Transition name="fade">
                <span v-if="hasAvailability" class="text-success">(AVAILABLE)</span>
            </Transition>
        </h5>

        <div class="form row g-3">
            <div class="col-md-6">
                <label for="from">From</label>
                <input type="date" class="form-control" placeholder="Start date" id="from" 
                v-model="from" v-on:keyup.enter="check" :class="{'is-invalid': errorFor('from')}">
                <ValidationErrors :errors="errorFor('from')" />
            </div>
            <div class="col-md-6">
                <label for="to">To</label>
                <input type="date" class="form-control" placeholder="End date" id="to" v-model="to"
                :class="{'is-invalid': errorFor('to')}">
                <ValidationErrors :errors="errorFor('to')" />
            </div>
        </div>

        <button class="btn btn-secondary w-100 mt-3" v-on:click="check" :disable="loading">
            <span v-if="!loading">Checking</span>
            <span v-else>
                <font-awesome-icon icon="fa-solid fa-circle-notch" spin-pulse /> Checking...
            </span>
        </button>
    </div>
</template>

<!-- --------------------------------------------------------------- -->

<script>
import { is422 } from "../components/shared/utils/response.js";
import validationErrorsMixin from "../components/shared/mixins/validationErrorsMixin.js";
import {mapGetters, mapActions} from 'vuex';

export default {
    mixins: [validationErrorsMixin],
    props: {
        bookableId: [String, Number, Array],
    },
    data() {
        return {
            from: null,
            to: null,
            loading: false,
            status: null,
        }
    },
    computed: {
        ...mapGetters({
            lastSearchFrom: 'lastSearchFrom',
            lastSearchTo: 'lastSearchTo',
        }),
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
        ...mapActions({
            setLastSearch: 'setLastSearch'
        }),

        async check() {
            try {
                this.loading = true;                
                this.errors = null;
                
                this.setLastSearch({ from: this.from, to: this.to });

                // `/api/bookables/${this.$route.params.id}/availability?from=${this.from}&to=${this.to}`

                this.status = (await axios.get(
                    `/api/bookables/${this.bookableId}/availability?from=${this.from}&to=${this.to}`
                )).status;

            } catch(error) {

                if ( is422(error) ) {
                    this.errors = error.response.data.errors;                    
                }
                this.status = error.response.status;

            } finally {
                
                this.$emit('avalability', this.hasAvailability)
                this.loading = false;                
            }

        }
    },
    created() {
        
		this.$store.dispatch('loadStoredState')
        this.from = this.lastSearchFrom;
        this.to = this.lastSearchTo;
	
    },
    mounted() {
        console.log(this.$store.state)
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