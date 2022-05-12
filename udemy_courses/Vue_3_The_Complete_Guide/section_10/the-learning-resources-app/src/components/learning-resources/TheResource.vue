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

    <keep-alive>
    <component :is="selectedTab"></component>
    </keep-alive>
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
                    description: 'The offical Vue.js documentation', 
                    link: 'https://vuejs.org'
                },
                {
                    id: 'google', 
                    title: 'Google', 
                    description: 'Learn to google...', 
                    link: 'https://google.com'
                },
                {
                    id: 'laravel docs', 
                    title: 'Laravel', 
                    description: 'The PHP Framework for Web Artisans', 
                    link: 'https://laravel.com/'
                },
            ],   
        }
    },
    provide() {
        return {
            resources: this.storedResources, 
            addResource: this.addResource,
            removeResource: this.removeResource
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
            // console.log(this.selectedTab)
        },
        addResource(title, description, link) {
            
            const newRescorce = {
                    id: new Date().toISOString(), 
                    title, 
                    description,
                    link,
            };

            this.storedResources.unshift(newRescorce);
            this.selectedTab = 'stored-resource';
        },
        removeResource(id) {
            const index = this.storedResources.findIndex(res => res.id === id);
            this.storedResources.splice(index, 1);
        }
    }
}

</script>

<!--------------------------------------------------------------------->

<style lang="scss" scoped>

</style>