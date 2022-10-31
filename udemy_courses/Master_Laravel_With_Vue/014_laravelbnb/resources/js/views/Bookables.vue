<template >
    <div>
        <!-- Bookables -->
        <div class="container"  >
            <div class="row" v-for="(row, index) in rows" :key="index + 'row'">

                <div class="col-4" 
                    v-for="(book, index) in rowBookables(bookables, row, columns)" :key="index + 'col'">

                    <bookable-list-item
                        :item-title="book.title"
                        :item-content="book.content" :price="1000" :key="index">
                    </bookable-list-item>
                    
                </div>

            </div>
        </div>



        <!-- <p v-else>Data is loading</p> -->
    </div>
</template>

<!-- --------------------------------------------------------------- -->

<script>
import BookableListItem from '../components/bookables/BookableListItem.vue'
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
    created() {
        this.loading = true;
        setTimeout(() => {
            
            this.bookables = [
                {
                    title: 'Cheap Villa',
                    content: 'A very cheap villa'
                },
                {
                    title: 'Expensive Villa',
                    content: 'A very expensive villa'
                },
                {
                    title: 'Cheap Villa',
                    content: 'A very cheap villa'
                },
                {
                    title: 'Expensive Villa',
                    content: 'A very expensive villa'
                },
                {
                    title: 'Cheap Villa',
                    content: 'A very cheap villa'
                },
                {
                    title: 'Expensive Villa',
                    content: 'A very expensive villa'
                },
                {
                    title: 'Expensive Villa',
                    content: 'A very expensive villa'
                },
            ];
            this.loading = false;
        }, 2000)
    }
}
</script>

<!-- --------------------------------------------------------------- -->

<style lang="scss" scoped>

</style>