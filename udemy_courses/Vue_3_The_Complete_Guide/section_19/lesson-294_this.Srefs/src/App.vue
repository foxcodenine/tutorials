<template>
	<section class="container">
		<h2>{{ fullName }}</h2>
		<h3>{{ userAge }}</h3>

		<button v-on:click="setAge">change age</button>
		<div>
			<input type="text" placeholder="First Name" v-model="firstName">
			<input type="text" placeholder="Last Name"  ref="lastNameInput">	<!-- <~ ref (1) -->
			<button v-on:click="setLastName">Set Last Name</button>
		</div>
	</section>
</template>

<!-- --------------------------------------------------------------- -->

<script>
	/* eslint-disable */
import { ref, reactive, computed, watch,  isRef, isReactive, toRefs } from 'vue';

export default {
    components: {},

    props: {},

    setup() {
		const lastNameInput = ref('');											// <~ ref (1)

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
		// watch(uAge, function(newValue, oldValue) {
		// 	console.log(`uAge changes from ${oldValue} to ${newValue}`);
		// });

		watch([uAge, fullName], function(newValues, oldValues) {
			console.log({'newValues': newValues}, {'oldValues': oldValues});
		});


		// -------------------------------------------------------------

		function setNewAge() {
			user.age = 33;
			uAge.value = 33;
		}

		// -------------------------------------------------------------
		// refs function

		function setLastName() {												// <~ ref (1)
			lastName.value = lastNameInput.value.value;
			console.log(lastName);
		}


		// -------------------------------------------------------------

		return {
			userName: uName,
			userAge:  uAge,

			user: user,

			setAge: setNewAge,

			firstName,
			// lastName,
			fullName,

			lastNameInput,
			setLastName

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