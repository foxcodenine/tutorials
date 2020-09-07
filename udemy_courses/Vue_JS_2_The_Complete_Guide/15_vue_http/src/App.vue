<template>
  <!-- https://console.firebase.google.com/u/1/project/vuejs-http-e067e/database/vuejs-http-e067e/data -->
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Http</h1>

        <div class="form-group">
          <label>Username</label>
          <input type="text" class="form-control" v-model="user.username">
        </div>

        <div class="form-group">
          <label >Email</label>
          <input type="text" class="form-control"  v-model="user.email">
        </div>

        <button class="btn btn-primary" @click="submit">Submit</button>

        <hr>

        <button class="btn btn-primary" @click="fetchData">Get Data</button>
        <br><br>
        <ul class="list-group">
          <li class="list-group-item" v-for="(u, index) in users" :key="index">{{ u.username }} - {{ u.email }}</li>
        </ul>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: '',
        email: ''
      },
      users: [],
    }    
  },
  methods: {
    async submit() {
      
      try{
        const res =  await this.$http.post('https://vuejs-http-e067e.firebaseio.com/data.json', this.user);
        const data = await res.json();
        console.log(res);
      }
      catch(err) {
        console.log('>>>', err);
        return null
      }
    },
    async fetchData() {
      const res = await this.$http.get('https://vuejs-http-e067e.firebaseio.com/data.json');
      const data = await res.json();
      
      let resultArray = [];
      for (let key in data) {
        resultArray.push(data[key]);
      }
      
      this.users = resultArray;
      console.log(this.users);
    },
  }
}
</script>

<style>

</style>