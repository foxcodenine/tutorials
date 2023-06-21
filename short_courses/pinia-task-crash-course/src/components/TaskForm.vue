<template >
    <form @submit.prevent="handleSubmit">
        <input type="text" placeholder="I need to..." v-model="newTask">
        <button type="submit">Add</button>
    </form>
</template>

<!-- --------------------------------------------------------------- -->

<script>
import { useTaskStore } from '../stores/TaskStore';
import { v4 as uuidv4 } from 'uuid';
export default {
    setup() {
        const taskStore = useTaskStore();
        return { taskStore }
    },
    data() {
        return {
            newTask: '',
        }
    },
    methods: {
        handleSubmit() {
            if (this.newTask.length <= 0) return;

            this.taskStore.addTask({
                title: this.newTask,
                isFave: false,
                id: uuidv4()
            });

            this.newTask = '';
        }
    }
}
</script>

<!-- --------------------------------------------------------------- -->

<style lang="sass" >
    
</style>