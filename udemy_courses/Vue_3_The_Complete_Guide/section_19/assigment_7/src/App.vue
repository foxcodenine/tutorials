<template>
	<h2>My Course Goal</h2>
	<!--  1: Output your main course goal with help of the composition API -->
	<!-- Don't hardcode it into the template, instead hardcode it into the JS code -->



	<!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
    <button v-on:click="toggleGoal">Toggle Goal</button>


	<!-- Task 3: Manage data in three ways -->

	<!-- => Separate refs -->
	<!-- <h3 v-if="showGoal">{{courseGoal}}</h3> -->
	<!-- => Ref Object -->
    <!-- <h3 v-if="goalObject.show">{{goalObject.goal}}</h3> -->
	<!-- => Reactive Object -->
	<h3 v-if="show">{{goal}}</h3>

	<!-- Task 4: Also solve the assignment with the Options API -->
</template>

<script>
import { ref, reactive, toRefs} from 'vue';

export default {
    setup() {
		const courseGoal = ref('Learn Vue, finish the course and implement Vue in Laravel');
		const showGoal   = ref(true);

		const goalObject = reactive({
			goal: 'Learn Vue, finish the course and implement Vue in Laravel',
			show: true
		});

		const refsGoalObject = toRefs(goalObject);

		function toggleGoal() {
			showGoal.value = !showGoal.value;
			goalObject.show = !goalObject.show;
			refsGoalObject.show = !refsGoalObject.show;
		}

		return {
			courseGoal,
			showGoal,
			toggleGoal,
			goalObject,
			refsGoalObject,
			show: refsGoalObject.show,
			goal: refsGoalObject.goal,
		} 
	}	
}

</script>

<style>
html {
	font-family: sans-serif;
}

body {
	margin: 3rem;
	text-align: center;
}
</style>