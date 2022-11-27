
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