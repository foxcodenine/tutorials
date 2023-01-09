<template >
    <div class="card mb-2 w-100">
        <div class="card-body">
            <router-link :to="{name:'bookable', params: { id: getId } }">
                <h2 class="card-title">{{ title }}</h2>
            </router-link>
            <p class="card-text">{{ description }}</p>
        </div>
    </div>
</template>

<!-- --------------------------------------------------------------- -->

<script>
export default {
    props: {
        'title': String, 
        'description': String, 
        'id': Number
    },
    computed: {
        getId() {
            return this.id || false;
        }
    },
    mounted() {
        // console.log(this.id)
    }
}
</script>

<!-- --------------------------------------------------------------- -->

<style lang="scss" scoped>
    
</style>