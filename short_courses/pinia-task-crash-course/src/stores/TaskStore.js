import { defineStore } from "pinia";

export const useTaskStore = defineStore('taskStore', {
    state() {
        return {
            tasks: [],
            name: "Yochi's Pinia Tasks",
            isLoading: false,
        }
    },
    getters: {
        favs() {
            return this.tasks.filter(t => t.isFav);
        },
        favCount() {
            return this.tasks.reduce((previousVal, currentVal)=>{
                return currentVal.isFav ? previousVal + 1 : previousVal;
            }, 0);
        },
        totalCount: (state) => {
            return state.tasks.length;
            // -- note, we can also use an arrow function, 
            // -- however 'this' is not the 'state'
        }
    },
    actions: {
        async addTask(task) {
            this.tasks.push(task);
            const response = await fetch(`http://localhost:3000/tasks`, {
                method: 'POST',
                body: JSON.stringify(task),
                headers: {'Content-Type': 'application/json'}
            });

            if (response.error) {
                console.info('! TaskStore.addTask !');
                console.error(response.error);
            }
        },
        async deleteTask(id) {
            this.tasks = this.tasks.filter( t => {
                return t.id != id;
            })
            const response = await fetch(`http://localhost:3000/tasks/${id}`, {
                method: 'DELETE',
            });

            if (response.error) {
                console.info('! TaskStore.addTask !');
                console.error(response.error);
            }
        },
        toggleFav(id) {
            this.tasks.forEach( async (t) => {     
                if (t.id == id) {

                    t.isFav = !t.isFav;

                    const response = await fetch(`http://localhost:3000/tasks/${id}`, {
                        method: 'PATCH',
                        body: JSON.stringify({isFav: t.isFav}),
                        headers: {'Content-Type': 'application/json'}
                    });
                    
                    if (response.error) {
                        console.info('! TaskStore.addTask !');
                        console.error(response.error);
                    }
                }
            });
        },
        getTask() {
            this.isLoading = true;
            setTimeout(async ()=>{

                const response = await fetch('http://localhost:3000/tasks');
                const data = await response.json();
    
                this.tasks = data;
                this.isLoading = false;
            }, 500);
        }
    }
});