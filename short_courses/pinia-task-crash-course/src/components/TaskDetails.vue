<template >
    <div class="task">
        <h3>{{ task.title }}</h3>
        <div class="icons">
            <i class="material-icons" @click="taskStore.deleteTask(task.id)">delete</i>
            <i class="material-icons" @click="taskStore.toggleFav(task.id)" :class="{'active': task.isFav}">favorites</i>
        </div>
    </div>
</template>

<!-- --------------------------------------------------------------- -->

<script>
import { useTaskStore } from '../stores/TaskStore';
export default {
    setup() {
        const taskStore = useTaskStore();
        return { taskStore }
    },
    props: {
        task: Object,
    }
}
</script>

<!-- --------------------------------------------------------------- -->

<style lang="sass" >
    
</style>