<template>
	<div class="main">
		<nav>
			<ul>
				<li v-for="lesson in lessons" @click="currntLesson=lesson">{{ lesson }}</li>
			</ul>
		</nav>
		<component :is="currntLesson"></component>
	</div>
</template>
<!-- --------------------------------------------------------------- -->

<script>
import Lesson2 from './components/Lesson2.vue';
import Lesson4_1 from './components/Lesson4_1.vue';
import Lesson4_2 from './components/Lesson4_2.vue';
import Lesson5 from './components/Lesson5.vue';
import Lesson6 from './components/Lesson6.vue';
import Lesson9 from './components/Lesson9.vue';

import { ref, reactive, toRef, toRefs } from 'vue';
export default {
    components: {
		Lesson2,
		Lesson4_1,
		Lesson4_2,
		Lesson5,
		Lesson6,
		Lesson9,
	},
    setup() {
		const lessons = ['Lesson2', 'Lesson4_1', 'Lesson4_2', 'Lesson5', 'Lesson6', 'Lesson9'];
		const currntLesson = ref('Lesson2');

		return {lessons, currntLesson}
	}
}
</script>

<!-- --------------------------------------------------------------- -->
<style lang="scss" scoped>

nav {
	max-width: 480px;
	margin: 0 auto;
	padding: 0;

	ul {
		cursor: pointer;
		display: flex;
		justify-content: center;
		// border: crimson dashed 1px;
		list-style: none;
		margin: 0 !important;
		margin-block-start:  0 !important;
		padding-inline-start:  0 !important;		
	}

	li {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 5px 10px;
		border: 1px solid black;
		min-width: 90px;
		

		&:not(:first-child) {
			border-left: none;
		}
	}

}

</style>
