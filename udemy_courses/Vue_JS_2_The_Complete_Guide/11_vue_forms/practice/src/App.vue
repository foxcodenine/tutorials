<template>

  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-4">
        
        <app-full-name v-model="fullname"></app-full-name>
        
        <div class="form-group">
          <label>Email: </label>
          <input type="email" class="form-control" v-model="email">
        </div>
        
        <div class="form-group">
          <label>Password: </label>
          <input type="password" class="form-control" v-model="password">
        </div>
        
        <div class="form-group">
          <h4>Store Data</h4>
          <label>
            <input type="radio" value="yes" v-model="storeData"> Yes
          </label>
          <label>
            <input type="radio" value="no" v-model="storeData"> No
          </label>
        </div>

        <div class="form-group">
          <button 
              class="btn btn-primary" 
              v-on:click.prevent="submitForm"
          >Submit Form
          </button>
        </div>

      </div>

      <hr>
      
      <div class="row" v-if="isSubmited">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-4">
            <div class="panel panel-default">
              <div class="panel-heading">
                  <h4>Your Data</h4>
              </div>
              <div class="panel-body">
                <p>Fullname: {{fullname}}</p>
                <p>Email: {{email}}</p>
                <p>Password: {{password}}</p>
                <p>Store Data: {{storeData}}</p>
              </div>
            </div>

        </div>
      </div>

    </div>
  </div>


</template>
  





<script>

  import FullName from './FullName'

  export default {

    components: {
      
      appFullName: FullName
    },

    data() {
      return {

        fullname: '',
        email: '',
        password: '',
        storeData: 'no',
        isSubmited: false,
      }
    },

    methods: {
      submitForm() {
        this.isSubmited = true;
      }
    }  
  }
  
</script>



<style lang="scss">

</style>
