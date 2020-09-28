<template>
      <nav class="navbar navbar-default">
      <div class="container-fluid">
        
        <div class="navbar-header">
          <router-link to='/' class="navbar-brand">Stock Trader</router-link>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse">

          <ul class="nav navbar-nav">
            <router-link to="/portfolio" active-class="active" tag="li"><a>Portfolio</a></router-link>
            <router-link to="/stocks"    active-class="active" tag="li"><a>Stocks</a></router-link>
          </ul>
          <strong class="navbar-text navbar-right">Fonds: {{fonds | currency}}</strong>
          <ul class="nav navbar-nav navbar-right">
            <li><a href="#" @click="endDay()">End Day</a></li>
            <li class="dropdown"
                @click="isDropdownOpen = !isDropdownOpen"
                :class="{'open': isDropdownOpen}">
              <a 
                href="#" 
                class="dropdown-toggle" 
                data-toggle="dropdown" 
                role="button" aria-haspopup="true" 
                aria-expanded="false">Save & Load<span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="#" @click="saveData()">Save Data</a></li>
                <li><a href="#" @click="loadData()">Load Data</a></li>
              </ul>
            </li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
</template>

<script>

  import {  mapActions } from "vuex";
  import Vue from 'vue'

  export default {
    data() {
      return {
        isDropdownOpen: false
      }
    },
    computed: {
      fonds() {
        return this.$store.getters['portfolio/fundsPortfolio']
      }
    },
    methods: {
      ...mapActions({
        randomizeStocks: 'stocks/randomizeStocks',
        fetchData: 'loadData'
      }),
      endDay() {
        this.randomizeStocks();
      },
      saveData() {
        const data = {
          funds: this.$store.getters['portfolio/fundsPortfolio'], 
          stockPortfolio: this.$store.getters['portfolio/stockPortfolio'], 
          stocks:  this.$store.getters['stocks/stocks'],
        }
        this.$http.put('data.json', data);
      },
      loadData() {
        this.fetchData();
      }
    }
  }

</script>

<style>

</style>