<template >
<div>

	<nav class="navbar navbar-expand-lg bg-white border-bottom navbar-light px-4">
		<div class="container-fluid">

			<router-link class="navbar-brand me-auto" :to="{name:'home'}">LaravelBnb</router-link>
			

			<div class="collapse navbar-collapse" id="navbarText">
				<ul class="navbar-nav ms-auto mb-2 mb-lg-0">
					<li class="nav-item me-3" v-if="isLoggedIn">				
						<router-link :to="{name:'basket'}" class="nav-link   position-relative">
							Basket
							<span class="position-absolute top-25 start-100 translate-middle badge rounded-pill bg-danger text-small" v-if="itemsInBasket">{{ itemsInBasket }}</span>
						</router-link>
					</li>
					<li class="nav-item" v-if="!isLoggedIn">
						<router-link class="nav-link" :to="{name: 'register'}">Register</router-link>
					</li>
					<li class="nav-item" v-if="!isLoggedIn">
						<router-link class="nav-link" :to="{name: 'login'}">Login</router-link>
					</li>
					<li class="nav-item" v-if="isLoggedIn">
						<router-link class="nav-link" :to="{name: 'login'}" @click.prevent="signOut">Sign-out</router-link>
					</li>
				</ul>	
			</div>

		</div>
	</nav>

	<div class="container my-4 px-4">
		<router-view></router-view>
	</div>
</div>
</template>

<!-- --------------------------------------------------------------- -->

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
export default {
    computed: {
		...mapState({
			isLoggedIn: 'isLoggedIn',
		}),
		...mapGetters({
			itemsInBasket: 'itemsInBasket',
		})
	},
    methods: {
		...mapActions({
			logout: 'logout'
		}),
		async signOut() {
			try {
				axios.post("logout");
				this.logout();
				
			} catch (error) {
				this.logout();
			}
		}
	},
    async  beforeCreate() {
		this.$store.dispatch('loadStoredState');
		this.$store.dispatch('loadUser');

		// await axios.get('/sanctum/csrf-cookie');
		// await axios.post('/login', {
		// 	email: '*****@*****.com',
		// 	password: '******',
		// })

		// await axios.get('/user');

	},
    mounted() {
		if (!this.isLoggedIn) {
			this.$router.replace({name: 'login'});
		}
	}
}
</script>

<!-- --------------------------------------------------------------- -->

<style lang="scss " scoped >
    .top-25 {
		top: 25%
	}
</style>