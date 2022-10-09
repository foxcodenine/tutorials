<template>
	<section class="container">
		<h2>{{ fullName }}</h2>
		<h3>{{ userAge }}</h3>

		<button v-on:click="setAge">change age</button>
		<div>
			<input type="text" placeholder="First Name" v-model="firstName">
			<input type="text" placeholder="Last Name"  v-model="lastName">
		</div>
	</section>
</template>

<!-- --------------------------------------------------------------- -->

<script>
	/* eslint-disable */
import { ref, reactive, computed, isRef, isReactive, toRefs } from 'vue';

export default {
    components: {},

    props: {},

    setup() {
		const firstName = ref('');
		const lastName = ref('');
		
		const uName = ref('Maximilian');
		const uAge  = ref(31);

		const user = reactive({
			name: 'Maximilian',
			age: 31,
		})

		// -------------------------------------------------------------
		const fullName = computed(function() {
			return firstName.value + ' ' + lastName.value;
		});

		// -------------------------------------------------------------

		function setNewAge() {
			user.age = 33;
			uAge.value = 33;
		}

		// -------------------------------------------------------------

		return {
			userName: uName,
			userAge:  uAge,

			user: user,

			setAge: setNewAge,

			firstName,
			lastName,
			fullName
		}
	},
};
</script>

<!-- --------------------------------------------------------------- -->

<style>
* {
	box-sizing: border-box;
}

html {
	font-family: sans-serif;
}

body {
	margin: 0;
}

.container {
	margin: 3rem auto;
	max-width: 30rem;
	border-radius: 12px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
	padding: 1rem;
	text-align: center;
}
</style>