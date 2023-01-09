
### Binding Multiple Properties Using an Object

https://vuejs.org/guide/components/props.html#prop-passing-details

If you want to pass all the properties of an object as props, you can use 
v-bind without an argument (v-bind instead of :prop-name).

        <BlogPost v-bind="post" />

    Will be equivalent to:
    
        <BlogPost :id="post.id" :title="post.title" />



# Global Filters & globalProperties

https://v3-migration.vuejs.org/breaking-changes/filters.html#global-filters


You can make your global filters available to all components through 
globalProperties since filters has been removed in vue3:

// main.js

    const app = createApp(App)

    app.config.globalProperties.$filters = {
        currencyUSD(value) {
            return '$' + value
        }
    }

Then you can fix all templates using this $filters object like this:


    <template>
        <h1>Bank Account Balance</h1>
        <p>{{ $filters.currencyUSD(accountBalance) }}</p>
    </template>


# v-model on components

For this to work, the <CustomInput> component must have two things:

1. Bind the value attribute of a native <input> element to the 'modelValue' prop 
    (prop must be named 'modelValue') (not necessary an <input> check my StarRating Component)

2. When a native input event is triggered, emit an 'update:modelValue' custom event with the new value
    (emit tage must be named 'update:modelValue')

    <!-- CustomInput.vue -->

        <script>
        export default {
            props: ['modelValue'],
            emits: ['update:modelValue']
        }
        </script>

        <template>
        <input
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
        />
        </template>

    <!-- Parent.vue -->
        <MyComponent @some-event="callback" />


### Vuex Getters , Method-Style Access

You can also pass arguments to getters by returning a function. This is
particularly useful when you want to query an array in the store:

    getters: {
        // ...
        getTodoById: (state) => (id) => {
            return state.todos.find(todo => todo.id === id)
        }
    }

    store.getters.getTodoById(2) // -> { id: 2, text: '...', done: false }

Note that getters accessed via methods will run each time you call them,
and the result is not cached.


### Vue Transition - Move Transitions - v-move 

(Adding v-move or in case of name class: fade-move, flip-move ... etc)

https://vuejs.org/guide/built-ins/transition-group.html#move-transitions
https://v2.vuejs.org/v2/guide/transitions.html#List-Move-Transitions 

When an item is inserted or removed, its surrounding items instantly
"jump" into place instead of moving smoothly. We can fix this by adding
a few additional CSS rules