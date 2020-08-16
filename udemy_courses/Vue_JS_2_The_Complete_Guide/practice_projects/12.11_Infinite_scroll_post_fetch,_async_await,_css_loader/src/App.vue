<template>
  <div class="container">
            
        <app-title v-bind:title="title"></app-title>
            
        <app-filter v-model="term"></app-filter>
    
        <app-quotes-grids v-bind:posts="posts" v-bind:term="term"></app-quotes-grids>        
        
        <app-loader v-bind:showLoader="showLoader"></app-loader>

        <app-global-events v-on:scroll="scrollDown"></app-global-events>
  </div>
</template>


<script>
  import _QuotsGrids from './components/PostsGrid'
  import _GlobalEvents from 'vue-global-events'
  import _Loader from './components/Loader'
  import _Filter from './components/Filter'
  import _title from './components/Title'


  export default {

    data () {
      return {
        title: 'This is my Blog',
        page: 1,
        limit: 5,
        posts: [],
        showLoader: false,
        term: '',
      }
    },

    // mounted: function() {

    //   fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${this.limit}&_page=${this.page}`)
    //   .then(res=>res.json())
    //   .then(data=>console.log(data))

    // },
    
    mounted: async function() {
      
      const data = await this.getPost(this.limit, this.page);      
      this.posts = data
    },
    
    watch: {

      async page() {
        const data = await this.getPost(this.limit, this.page);
        
        this.showLoader = true

        setTimeout(()=>{
          
          this.showLoader = false

          setTimeout(()=>{
            this.posts = [...this.posts, ...data]
          },500);

        },500);        
      },

      term() {
        console.log(this.term)
      }
    },

    methods: {
      
      async getPost(limit, page) {
        try{
          const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`)
          const data = await res.json()
          
          return data;
        }catch(err){
          console.log('>>>',err);
          return null;
        }
      },

      scrollDown() {

        const {scrollTop, scrollHeight, clientHeight} = document.documentElement;

         if (scrollTop + clientHeight >= scrollHeight ){
           
           this.page++;
         }
      }
    },

    components: {
      AppQuotesGrids: _QuotsGrids,
      AppGlobalEvents: _GlobalEvents,
      AppLoader: _Loader,
      AppFilter: _Filter,
      AppTitle: _title
    }
  }
</script>


