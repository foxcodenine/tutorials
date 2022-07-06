<template>
    <li>
        <h2>{{ name }} {{ isFavorite ? '- Favorite Friend' : '' }}</h2>

        <button v-on:click="toggleFavorite" >Toggle Favorite</button>

        <button v-on:click="toggleDetails" >{{ deatailsAreVisible ? 'Hide' : 'Show Details' }}</button>

        <ul v-if="deatailsAreVisible">
            <li><strong>Phone:</strong> {{ phoneNumber }} </li>
            <li><strong>Email:</strong> {{ emailAddress }} </li>
        </ul>

        <button v-on:click="$emit('delete', index)" >Delete</button>
    </li>
</template>

<!-- --------------------------------------------------------------- -->

<script>
export default {
    // props: ['name', 'phoneNumber', 'emailAddress', 'isFavorite' ],

    // props: {'name': String, 'phoneNumber': String, 'emailAddress': String, 'isFavorite': String },

    props: {
        'index':        {type: Number, required:true},
        'name':         {type: String, required:true}, 
        'phoneNumber':  {type: String, required:true}, 
        'emailAddress': {type: String, required:true}, 
        'isFavorite':   {
                            type: Number, 
                            required:false, 
                            default: 0,
                            validator : function(val) {
                                return val === 1 || val === 0;
                            }
                        } 
    },
    // https://v3.vuejs.org/guide/component-props.html

    // emits: ['toggle-favorite', 'delete-friend'],
    emits: {
        'toggle-favorite': function(index) {
            return index >= 0 ? true : console.warn('index is missing !!!');
        },
        'delete': function() {return true}
    },
    // https://vuejs.org/guide/components/events.html#declaring-emitted-events

    data() {
        return {
            deatailsAreVisible: false,            
        }
    },
    methods: {
        toggleDetails() {
            this.deatailsAreVisible = !this.deatailsAreVisible;
        },
        toggleFavorite() {
            // this.friendIsFavorite = Number(!this.friendIsFavorite);
            this.$emit('toggle-favorite', this.index);
        },
    }
}
</script>

<!-- --------------------------------------------------------------- -->

<style lang="scss">
</style>