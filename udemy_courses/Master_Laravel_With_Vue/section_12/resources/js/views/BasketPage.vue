<template >
    <div>
        <SussessMessage v-if="success">
            Congratulations on your purchase
        </SussessMessage>
        <div class="row" v-else>

            <div class="col-md-8" v-if="!itemsInBasket">
                <div class="h-100 p-5 bg-light border rounded-3">
                    <div class="container-fluid py-5">
                        <h1 class="display-8 fw-bold text-center">Basket is Empty</h1>
                    </div>
                </div>
            </div>
            <div class="col-md-8" v-else>
                <div class="row mt-3">
                    <div class="col-md-6 form-group">
                        <label for="firstname">First name</label>
                        <input type="text" class="form-control" id="firstname" name="firstname" v-model="customer.firstname" 
                        :class="{'is-invalid': errorFor('customer.firstname')}">
                        <ValidationErrors :errors="errorFor('customer.firstname')" />
                    </div>
                    <div class="col-md-6 form-group">
                        <label for="lastname">Last name</label>
                        <input type="text" class="form-control" id="lastname" name="lastname" v-model="customer.lastname"
                        :class="{'is-invalid': errorFor('customer.lastname')}">
                        <ValidationErrors :errors="errorFor('customer.lastname')" />
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-12 form-group">
                        <label for="email">Email</label>
                        <input type="text" class="form-control" id="email" name="email" v-model="customer.email"
                        :class="{'is-invalid': errorFor('customer.email')}">
                        <ValidationErrors :errors="errorFor('customer.email')" />
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-6 form-group">
                        <label for="street">Street</label>
                        <input type="text" class="form-control" id="street" name="street" v-model="customer.street"
                        :class="{'is-invalid': errorFor('customer.street')}">
                        <ValidationErrors :errors="errorFor('customer.street')" />
                    </div>
                    <div class="col-md-6 form-group">
                        <label for="city">City</label>
                        <input type="text" class="form-control" id="city" name="city" v-model="customer.city"
                        :class="{'is-invalid': errorFor('customer.city')}">
                        <ValidationErrors :errors="errorFor('customer.city')" />
                    </div>
                </div>
                <div class="row mt-3 mb-5">
                    <div class="col-md-6 form-group">
                        <label for="country">Country</label>
                        <input type="text" class="form-control" id="country" name="country" v-model="customer.country"
                        :class="{'is-invalid': errorFor('customer.country')}">
                        <ValidationErrors :errors="errorFor('customer.country')" />
                    </div>
                    <div class="col-md-4 form-group">
                        <label for="State">State</label>
                        <input type="text" class="form-control" id="State" name="state" v-model="customer.state"
                        :class="{'is-invalid': errorFor('customer.state')}">
                        <ValidationErrors :errors="errorFor('customer.state')" />
                    </div>
                    <div class="col-md-2 form-group">
                        <label for="zip">Zip</label>
                        <input type="text" class="form-control" id="zip" name="zip" v-model="customer.zip"
                        :class="{'is-invalid': errorFor('customer.zip')}">
                        <ValidationErrors :errors="errorFor('customer.zip')" />
                    </div>
                </div>
                <hr>
                <div class="row my-5">
                    <div class="col-md-12 form-group">
                        <button class="btn btn-lg btn-primary w-100"
                            :disabled="loading"
                            type="submit" @click.preivent="bookBasket">
                            Book now!
                        </button>
                    </div>
                </div>
            </div>

            <div class="col-md-4">
                <div class="d-flex justify-content-between">
                    <h6 class="text-uppercase text-secondary fw-bolder">
                        Your Cart
                    </h6>
                    <h6 class="badge bg-secondary text-uppercase">
                        <span v-if="itemsInBasket">Items {{ itemsInBasket }}</span>
                        <span v-else>Empty</span>
                    </h6>
                </div>

                <TransitionGroup name="fade" tag="div">
                    <div v-for="item in basket" :key="item.bookable.id">
                        <div class="py-2 border-top d-flex justify-content-between">
                            <span>
                                <router-link :to="{name: 'bookable', params: {id: item.bookable.id} }">
                                    {{ item.bookable.title }}
                                </router-link>
                            </span>
                            <span class="fw-bold">${{ item.price.total }}</span>
                        </div>
                        <div class="py-2 d-flex justify-content-between">
                            <span>From: {{ item.dates.from }}</span>
                            <span>To: {{ item.dates.to }}</span>
                        </div>
                        <div class="py-2 text-end">
                            <button class="btn btn-sm btn-outline-secondary" @click="$store.dispatch('removeFromBasket', item)">
                                <font-awesome-icon icon="fa-solid fa-trash" />
                            </button>
                        </div>
                    </div>
                </TransitionGroup>

            </div>

        </div>
    </div>
</template>

<!-- --------------------------------------------------------------- -->

<script>
import { mapGetters, mapState, mapActions } from 'vuex';
import validationErrorsMixin from '../components/shared/mixins/validationErrorsMixin.js';
export default {
    mixins: [
        validationErrorsMixin
    ],
    data() {
        return {
            customer : {
                firstname: null,
                lastname: null,
                email: null,
                street: null,
                city: null,
                country: null,
                state: null,
                zip: null,
            },
            loading: false,
            bookingAttempted: false
        }
    },
    computed: {
        ...mapGetters({
            itemsInBasket: 'itemsInBasket',
        }),
        ...mapState({
            basket: state => state.basket.items,
            isLoggedIn: 'isLoggedIn'
        }),
        success() {
            return !this.loading && this.itemsInBasket === 0 && this.bookingAttempted;
        }
    },
    methods: {
        ...mapActions({
            clearBasket: 'clearBasket'
        }),
        
        async bookBasket() {
            this.bookingAttempted = false;
            this.loading = true;
            this.errors  = null;
            try {

                let data = {
                    customer: this.customer,
                    bookings: this.basket.map((bastketItem) => {
                        return {
                            bookable_id: bastketItem.bookable.id,
                            from: bastketItem.dates.from,
                            to: bastketItem.dates.to,
                        }
                    })
                }
                await axios.post(`/api/checkout`, data);
                this.clearBasket();
                this.bookingAttempted = true

            } catch (error) {
                this.errors = error.response && error.response.data.errors;
            } finally {
                this.loading = false;
            }
        }
    },
    mounted() {
		if (!this.isLoggedIn) {
			this.$router.replace({name: 'login'});
		}
	}
}
</script>

<!-- --------------------------------------------------------------- -->

<style lang="scss" scoped>
    h6.badge {
        font-size: 90%;
    }
    a:link, a:visited {
        color: black;
        text-decoration: none;
        &:hover {
           text-decoration: underline; 
        }
    }
    .is-invalid {
        border-color: #b22222;
        background-image: none;
    }
</style>