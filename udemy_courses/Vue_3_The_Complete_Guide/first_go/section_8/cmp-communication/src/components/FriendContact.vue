<template>
    <li>
        <h2>{{ name }} <small>{{ friendIsFavorite ? ' Favorite Friend' : '' }}</small></h2>

        <button v-on:click="toggleFavorite" >Toggle Favorite</button>

        <button v-on:click="toggleDetails" >{{ deatailsAreVisible ? 'Hide' : 'Show Details' }}</button>

        <ul v-if="deatailsAreVisible">
            <li><strong>Phone:</strong> {{ phoneNumber }} </li>
            <li><strong>Email:</strong> {{ emailAddress }} </li>
        </ul>
    </li>
</template>

<!-- --------------------------------------------------------------- -->

<script>
export default {
    // props: ['name', 'phoneNumber', 'emailAddress', 'isFavorite' ],

    // props: {'name': String, 'phoneNumber': String, 'emailAddress': String, 'isFavorite': String },

    props: {
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

    data() {
        return {
            deatailsAreVisible: false,
            friendIsFavorite: this.isFavorite
        }
    },
    methods: {
        toggleDetails() {
            this.deatailsAreVisible = !this.deatailsAreVisible;
        },
        toggleFavorite() {
            this.friendIsFavorite = Number(!this.friendIsFavorite);
        }
    }
}
</script>

<!-- --------------------------------------------------------------- -->

<style lang="scss">
</style>