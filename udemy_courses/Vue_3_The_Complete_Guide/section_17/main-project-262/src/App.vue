<template>

	<the-header></the-header>

	<router-view v-slot="slotProps">
		<transition name="router" mode="out-in">
			<component :is="slotProps.Component"></component>
		</transition>
	</router-view>

</template>

<!-- --------------------------------------------------------------- -->

<script>
/* eslint-disable */
import TheHeader from './components/layout/TheHeader.vue';
import { mapActions, mapGetters } from 'vuex';



export default {
    components: { TheHeader },

    watch: {
		didAutoLogout(curValue, oldValue) {
			if (curValue && curValue !== oldValue) {
				this.$router.replace({name: 'coaches'});
			}
		}
	},

    computed: {
		...mapGetters({
			didAutoLogout: 'didAutoLogout'
		})
	},

    methods: {
		...mapActions({
			tryToAutoLogin: 'tryToAutoLogin'
		})
	},

    created() {
		this.tryToAutoLogin();
	}
}

</script>

<!-- --------------------------------------------------------------- -->

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
	box-sizing: border-box;
}

html {
	font-family: "Roboto", sans-serif;
}

body {
	margin: 0;
}

.router-enter-from  { opacity: 0; transform: translateY(-30px); }
.router-enter-to    { opacity: 1; transform: translateY(0); }

.router-leave-from { opacity: 1; transform: translateY(0);  }
.router-leave-to   { opacity: 0; transform: translateY(30px);  }

.router-enter-active { transition: all 0.3s ease-out;}
.router-leave-active { transition: all 0.3s ease-in;}

</style>