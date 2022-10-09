<template>
	<section class="container">
		<h2>{{ userName }}</h2>
		<h3>{{ user.age }}</h3>
	</section>
</template>

<!-- --------------------------------------------------------------- -->

<script>
	/* eslint-disable */
import { ref, reactive, isRef, isReactive, toRefs } from 'vue';

export default {
    components: {},

    props: {},

    setup() {
		const uName = ref('Maximilian');
		const uAge  = ref(31);

		const user = reactive({
			name: 'Maximilian',
			age: 31,
		})

		// ----- Just testing function ---------------------------------
		console.log(isRef(uName),     isRef(uName.value));
		console.log(isReactive(user), isReactive(user.name));

		const userRefs = toRefs(user);

		console.log(isRef(userRefs.name), isRef(userRefs.age));
		// -------------------------------------------------------------

		setTimeout(function() {

			uName.value = 'Max';
			// uAge.value  = 32;

			user.name = 'Max';
			user.age  = 32;

		}, 2000)

		return {
			userName: uName,
			// userAge:  uAge,

			user: user
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