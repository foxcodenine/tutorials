const app = Vue.createApp({

    data() {
        return {
            taskInput: '',
            taskList: [],
            taskQty: 0,
            taskId: 0,
            taskShow: true
        }
    },
    watch: {
        taskQty() {
            console.log(...this.taskList);
        }
    },
    computed: {
        fetchTaskkShow() {
            return this.taskShow
        }
    },
    methods: {
        addTask () {
            this.taskInput = this.taskInput.trim();
            
            if (this.taskInput) {
                
                const task = { id: this.taskId,  input: this.taskInput };
                this.taskList.push(task);

                this.taskQty = this.taskList.length;

                this.taskInput = '';
            }
        },
        toggleTaskShow() {
            this.taskShow = !this.taskShow;
        }
    }
});

app.mount('#assignment');