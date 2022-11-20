
### Binding Multiple Properties Using an Object

https://vuejs.org/guide/components/props.html#prop-passing-details

If you want to pass all the properties of an object as props, you can use 
v-bind without an argument (v-bind instead of :prop-name).

        <BlogPost v-bind="post" />

    Will be equivalent to:
    
        <BlogPost :id="post.id" :title="post.title" />