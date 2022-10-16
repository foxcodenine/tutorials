<template>
    <li>
        <h2>{{ friend.name }} {{ friend.isFavorite  ? '(Favorite)' : '' }}</h2>
        <button v-on:click="toggleDetails" >{{ detailsAreVisable ? 'Hide Details' : 'Show Details' }}</button>
        &nbsp;
        <button v-on:click="toggleFavorites" >Toggle Favorite</button>
        <ul v-if="detailsAreVisable">
            <li><strong>Phone:</strong> {{ friend.phone }} </li>
            <li><strong>Email:</strong> {{ friend.email }} </li>
        </ul>
        &nbsp;
        <button v-on:click="deleteFriend" >Delete</button>
    </li>
</template>

<!-- -------------------------------------------------------------- -->

<script>
export default {
    data() {
        return {
            detailsAreVisable:  false,
        }
	},
    props: {
        friend: {
            type : Object, 
            required: true, 
            // default: {}
            // validator: function(){}
        }
    },
    emits: {'toggle-favorite': function(id) { 
            if (id) return true; 
            if (!id) console.info('Id is missing');             
        } ,
        'delete-friend' : function() {return true}
    },
    watch: {        
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisable = !this.detailsAreVisable;
        },
        toggleFavorites() {
            this.$emit('toggle-favorite', this.friend.id);
        },
        deleteFriend() {
            this.$emit('delete-friend', this.friend.id);
        },

	},
    computed: {

    }
}
</script>

<!-- -------------------------------------------------------------- -->

<style lang="scss" scoped>

</style>