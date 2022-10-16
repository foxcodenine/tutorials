<template>
     <base-card>
     
        <base-button 
            v-on:click="setSelectedTab('stored-resources')"
            v-bind:mode="storedResButtonMode('stored-resources')"       
        >Stored Resouces</base-button>

        <base-button v-on:click="setSelectedTab('add-resources')"
            v-bind:mode="storedResButtonMode('add-resources')"            
        >Add Resouce</base-button>

    </base-card>
    
    <keep-alive>
        <component :is="selectedTab"></component>
    </keep-alive>
    
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResources from './AddResources.vue';
export default {
    components: {
        StoredResources,
        AddResources
    },
    data() {
        return {
            currentId: 4,
            selectedTab: 'stored-resources',
            storedResouces: [
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
                    id: 'php-manula', 
                    title: 'PHP', 
                    description: 'PHP: Hypertext Preprocessor', 
                    link: 'https://www.php.net/'
                },
                {
                    id: 'laravel-docs', 
                    title: 'Laravel', 
                    description: 'The PHP Framework for Web Artisans', 
                    link: 'https://laravel.com/'
                },
            ]
        };
    },

    provide() {
        return {
            resouces: this.storedResouces,
            addResources: this.addResources,
            removeResources: this.removeResources
        }
    },
    computed: {

    },

    methods: {
        setSelectedTab(tab) {
            this.selectedTab = tab;
        },
        storedResButtonMode(componentName) {
            return this.selectedTab === componentName ? null : 'flat'
        },
        addResources(title, description, link) {
            const id = ++this.currentId;
            const newResources = {id, title, description, link}
            this.storedResouces.unshift(newResources);
            this.selectedTab = 'stored-resources';
        },
        removeResources(id) {
            
            // * This code will create a new Array in memory & Vue does
            // *  not re-provided to the related component
            
            // this.storedResouces = this.storedResouces.filter((res) => {
            //     return res.id !== id;
            // }) 

            // * However the following code is modifing the original
            // *  array and the changes will be pased to the related
            // *  components

            const resIndex = this.storedResouces.findIndex(function(res) {
                return res.id = id;
            })

            this.storedResouces.splice(resIndex, 1);
        }
    }
}
</script>