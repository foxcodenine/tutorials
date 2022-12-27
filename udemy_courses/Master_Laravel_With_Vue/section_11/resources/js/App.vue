<template >
<div>
	<nav class="navbar bg-white border-bottom navbar-light px-4">
		<router-link class="navbar-brand me-auto" :to="{name:'home'}">LaravelBnb</router-link>
		<!-- <router-link class="btn " :to="{name: 'second'}">Second</router-link> -->
		<router-link :to="{name:'basket'}" class="btn   position-relative">
			Basket
			<span class="position-absolute top-25 start-100 translate-middle badge rounded-pill bg-danger" v-if="itemsInBasket">{{ itemsInBasket }}</span>
		</router-link>
	</nav>

	<div class="container my-4 px-4">
		<router-view></router-view>
	</div>
</div>
</template>

<!-- --------------------------------------------------------------- -->

<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
		...mapGetters({
			itemsInBasket: 'itemsInBasket',
		})
	},
	mounted() {
		this.$store.dispatch('loadStoredState')
	}
}
</script>

<!-- --------------------------------------------------------------- -->

<style lang="scss " scoped >
    .top-25 {
		top: 25%
	}
</style>