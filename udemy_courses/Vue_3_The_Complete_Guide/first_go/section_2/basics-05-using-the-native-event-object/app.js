const app = Vue.createApp({

  data() {
    return {
      counter: 0,
      name: ''
    };
  },

  watch: {
    name(value) {
      console.log(value);
    },
    counter(value) {
      if (value > 50) {
        this.counter = 0;
      }
    }
  },

  methods: {
    setName(event) {
      this.name = event.target.value + ' ' + lastName;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput(e) {
      this.name = '';
    },

    outputFullname() {
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Cassar';
    }
  },

  computed: {
    fullname() {
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Cassar'; 
    }
  }
});

app.mount('#events');
