<template>
    <base-card>

        <base-button 
        v-on:click="setSelectedTab('stored-resource')"
        v-bind:mode="storedResourcesModeBtn ">
            Stored Resources
        </base-button>

        <base-button 
        v-on:click="setSelectedTab('add-resource')"
        v-bind:mode="addResourcesModeBtn">
            Add Resources
        </base-button> 

    </base-card>
    <component :is="selectedTab"></component>
</template>

<!--------------------------------------------------------------------->

<script>
import StoredResource from './StoredResource.vue';
import AddResource from './AddResource.vue';

export default {
    components: {
        StoredResource,
        AddResource,
    },
    data() {
        return {
            selectedTab: 'stored-resouces',
            storedResources: [
                {
                    id: 'official-guide', 
                    title: 'Official Vue Guide', 
                    desciption: 'The offical Vue.js documentation', 
                    link: 'https://vuejs.org'
                },
                {
                    id: 'google', 
                    title: 'Google', 
                    desciption: 'Learn to google...', 
                    link: 'https://google.com'
                },
                {
                    id: 'laravel docs', 
                    title: 'Laravel', 
                    desciption: 'The PHP Framework for Web Artisans', 
                    link: 'https://laravel.com/'
                },
            ],
        }
    },
    provide() {
        return {
            resources: this.storedResources
        }
    },
    computed: {
        storedResourcesModeBtn () {
            return this.selectedTab === 'stored-resource' ? null : 'flat';
        },
        addResourcesModeBtn () {
            return this.selectedTab === 'add-resource' ? null : 'flat';
        },
    },
    methods: {
        setSelectedTab(tab) {
            this.selectedTab = tab;
            console.log(this.selectedTab)
        }
    }
}

</script>

<!--------------------------------------------------------------------->

<style lang="scss" scoped>

</style>