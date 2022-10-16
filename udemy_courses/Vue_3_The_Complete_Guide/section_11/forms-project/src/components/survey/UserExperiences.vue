<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button v-on:click="loadExperiences">Load Submitted Experiences</base-button>
      </div>
      <p v-if="isLoading">Loading...</p>
      <p v-else-if="error">{{ error }}</p>
      <p v-else-if="!results || results.length <= 0">
        No stored experiences found. Start adding some survey results first!
      </p>
      <ul v-else>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  data() {
    return {
      results: [],
      isLoading: false,
      error: null
    }
  },
  components: {
    SurveyResult,
  },
  methods: {
    async loadExperiences() {

      this.isLoading = true;
      this.error = null;

      try {

        const requestUrl = process.env.VUE_APP_FIREBASE_URL + process.env.VUE_APP_FIREBASE_NODE + '.json';

        const response = await fetch(requestUrl, {
          method: 'GET',
          headers: { 'Accept': 'application/json' }
        });

        if (!response.ok) { 
          this.isLoading = false;  
          throw new Error('Something went wrong');
        }

        const data = await response.json();

        this.isLoading = false;
        
        if (!data) { return } // <~~ if there is no data in db

        const results = [];
        
        for (const [key, value] of Object.entries(data)) {
          value.id = key;
          results.push(value);
        }        
        this.results = results;

      } catch (error) {
        this.error = 'Failed to fetch data - please try again later.'
        this.isLoading = false;
        console.info('error:', error);
      }
      
      
    }
  },
  mounted() {
    this.loadExperiences();
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>