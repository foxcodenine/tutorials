<template >
    <div>
        <!-- Bookables -->
        <div class="container"  >
            <div class="row" v-if="bookables" v-for="(row, index) in rows" :key="index + 'row'">

                <div class="col-4 d-flex align-items-stretch" 
                    v-for="(bookable, index) in rowBookables(bookables, row, columns)" :key="index + 'col'">
                    <!-- If you want to pass all the properties of an object 
                        as props, you can use v-bind without an argument -->
                    <bookable-list-item  v-bind="bookable"></bookable-list-item>
                    
                </div>

            </div>
            <p v-else>Data is loading...</p>
        </div>



        
    </div>
</template>

<!-- --------------------------------------------------------------- -->

<script>
import BookableListItem from '../components/BookableListItem.vue'
export default {
    components: {
        BookableListItem
    },
    data() {
        return {
            bookables: null,
            loading: false,
            columns: 3
        }
    },
    computed: {
        rows() {
            return Math.ceil(this.bookables?.length / this.columns) || 0;
        }
    },
    methods: {
        rowBookables(array, row, columns) {
            const index = row - 1;
            return array.slice(index*columns, (index*columns) + columns);
        }
    },
    async created() {
        this.loading = true;

        // const p = new Promise((resolve, reject) => {
        //     console.log(resolve);
        //     console.log(reject);

        //     setTimeout(()=>{
        //         reject('Hello!');                
        //     }, 3000);
        // }).then((result)=>{
        //     console.log(`Success ${result}`);
        // }).catch((result)=>{
        //     console.log(`Error ${result}`);
        // });

        // console.log(p);
        

        // const waitForMe = await new Promise((resolve, reject)=>{
        //     setTimeout(()=>{resolve(true)}, 2000);
        // })

        const request = await axios.get('/api/bookables');
        this.bookables = request.data.data;

        // this.bookables.push({title: 'x', description: 'x'});
        this.loading = false;


    }
}
</script>

<!-- --------------------------------------------------------------- -->

<style lang="scss" scoped>

</style>