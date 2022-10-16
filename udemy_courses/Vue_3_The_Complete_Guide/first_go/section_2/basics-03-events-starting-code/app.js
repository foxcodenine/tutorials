const app = Vue.createApp({

  data() {
    return {
      counter: 0,
      name: '',
      confirmName: ''
    };
  },

  methods: {

    addCounter() {
      ++this.counter;
    },
    reduceCounter() {
      --this.counter;
    },

    setName(e) {
      this.name = e.target.value;
    },

    setConfirmName() {
      this.confirmName = this.name;
    },

    submitForm() {
      alert('Form has been submited');
    }
  }
});

app.mount('#events');
