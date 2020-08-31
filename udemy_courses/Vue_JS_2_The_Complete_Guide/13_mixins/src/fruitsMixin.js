export const fruitsMixin = {
    data() {
        return {
            
            fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
            filterText: ''
        }
    },

    computed: {
        filteredFruits() {
            return this.fruits.filter((fruit)=>{
            // return fruit.startsWith(this.filterText, 0);
            // return fruit.match(this.filterText, 0);
            return fruit.includes(this.filterText);

            
            });
        }
    },
    created() {
        console.log('>> Created Hook- fruitsMixin.js')
    }
}