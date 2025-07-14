<template>
    <div class="job-list">
        <transition-group name="list" tag="ul">
            <li v-for="job in orderJobs" :key="job.id">
                <h2>{{ job.title }} in {{ job.location }}</h2>
                <div class="salary"> <img src="../assets/rupee.svg" alt="rupee icon">
                    <p>{{ job.salary }} rupees</p>
                </div>
                <div class="description">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Culpa non sunt itaque deleniti doloribus illo voluptate amet
                        obcaecati qui, cumque, cum magnam eum? Quibusdam assumenda
                        officiis exercitationem minus sunt alias.</p>
                </div>
            </li>
        </transition-group>
    </div>
</template>

<!-- --------------------------------------------------------------- -->

<script setup lang="ts">
import type { Job } from '@/types/Job';
import type { OrderTerm } from '@/types/OrderTerm';
import { computed, type PropType } from 'vue';



const props = defineProps({
    jobs: {
        type: Array as PropType<Job[]>,
        reqired: true,
        defult: []
    },
    order: {
        type: String as PropType<OrderTerm>,
        required: true,
    }
});

const orderJobs = computed(() => {
    return [...props.jobs!].sort((a: Job, b: Job) => {
        return a[props.order] > b[props.order] ? 1 : -1
    });
})

</script>

<!-- --------------------------------------------------------------- -->

<style scoped>
.job-list {
    max-width: 960px;
    margin: 40px auto;
}

.job-list ul {
    padding: 0
}

.job-list li {
    list-style-type: none;
    background: white;
    padding: 16px;
    margin: 16px 0;
    border-radius: 4px;
}

.job-list h2 {
    margin: 0 0 10px;
    text-transform: capitalize;
}

.salary {
    display: flex;
}

.salary img {
    width: 30px;
}

.salary p {
    color: #17bf66;
    font-weight: bold;
    margin: 10px 4px;
}

.list-move {
    transition: all 1s;
}
</style>