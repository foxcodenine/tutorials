<template >
	<main>
		<!-- heading -->
		<header>
			<img src="./assets/pinia-logo.svg" alt="pinia logo">
			<h1>{{ name }}</h1>
		</header>

		<!-- new-task-form -->
		<div class="new-task-form">
			<TaskForm></TaskForm>
		</div>
		
		<!-- filter -->
		<nav class="filter">
			<button @click="filter='all'">All tasks</button>
			<button @click="filter='favs'">Fav tasks</button>
			<button @click="taskStore.$reset">Reset State</button>
		</nav>

		<!-- loading -->
		<div class="loading" v-if="taskStore.isLoading">Loading tasks...</div>

		<!-- task list -->
		<div class="task-list" v-if="filter === 'all'">
			<p>You have {{ taskStore.totalCount }} task left todo!</p>
			<div v-for="task in taskStore.tasks">
				<TaskDetails :task="task"/>
			</div>
		</div>

		<div class="task-list" v-if="filter === 'favs'">
			<p>You have {{ taskStore.favCount }} favs todo!</p>
			<div v-for="task in taskStore.favs">
				<TaskDetails :task="task"/>
			</div>
		</div>

		

	</main>
</template>

<!-- --------------------------------------------------------------- -->

<script>
import { useTaskStore } from './stores/TaskStore.js';
import TaskDetails from './components/TaskDetails.vue';
import TaskForm from './components/TaskForm.vue';
import { storeToRefs } from 'pinia';

export default {

    setup() {
		const taskStore = useTaskStore();
		const { name, tasks, isLoading, favs, totalCount, favCount } = storeToRefs(taskStore);
		return { taskStore, name }
	},
    components: {
		TaskDetails,
		TaskForm
	},
    data() {
		return {
			filter: 'all',
		}
	},
    created() {
		this.taskStore.getTask();
	}
}
</script>

<!-- --------------------------------------------------------------- -->

<style lang="" >
  
</style>