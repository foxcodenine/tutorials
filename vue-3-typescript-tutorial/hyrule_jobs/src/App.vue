<template>
	<div class="app">
		<header>
			<div class="title">
				<img src="./assets/heart.svg" alt="site logo">
				<h1>Hyrule Jobs</h1>
			</div>
			<div class="order">
				<button @click="handleClick('title')">Order by title</button>
				<button @click="handleClick('salary')">Order by salary</button>
				<button @click="handleClick('location')">Order by location</button>
			</div>
		</header>
		<jobs-list :jobs="jobs" :order="order"></jobs-list>
	</div>
</template>

<!-- --------------------------------------------------------------- -->

<script setup lang="ts">
import { ref } from 'vue';
import type { Job } from './types/Job';
import JobsList from './components/JobsList.vue';
import type { OrderTerm } from './types/OrderTerm';

const jobs = ref<Job[]>([
	{ title: 'farm worker', location: 'lon lon ranch', salary: 30000, id: '1' },
	{ title: 'quarryman', location: 'death mountain', salary: 40000, id: '2' },
	{ title: 'flute player', location: 'the lost woods', salary: 35000, id: '3' },
	{ title: 'fisherman', location: 'lake hylia', salary: 21000, id: '4' },
	{ title: 'prison guard', location: 'gerudo valley', salary: 32000, id: '5' }
]);

const order = ref<OrderTerm>("title")

function handleClick(term: OrderTerm) {
	order.value = term;
}

</script>

<!-- --------------------------------------------------------------- -->

<style scoped>
header {
	text-align: center;
}

header .order {
	margin-top: 20px;
}

button {
	margin: 0 10px;
	color: #1195c9;
	border: 3px solid #1195c9;
	background: #d5f0ff;
	padding: 8px 16px;
	border-radius: 4px;
	cursor: pointer;
	font-weight: bold;
}

header .title {
	display: flex;
	justify-content: center;
}

header img {
	width: 60px;
	margin-right: 20px;
}

header h1 {
	font-size: 3em;
}
</style>
