<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button v-on:click="loadExperiences">Load Submitted Experiences</base-button>
      </div>

      <p v-if="isLoading">Loading...</p>

      <ul v-else-if="!isLoading && results && results.length > 0">

        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>

      </ul>
      <p v-else-if="!isLoading && error" >{{ error }}</p>
      <p v-else>No stored experiences found. Start adding some survey results first.</p>

    </base-card>
  </section>
</template>

<!--------------------------------------------------------------------->

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  props: [],
  data() {
    return {
      results: [],
      isLoading: false,
      error: false
    }
  },
  components: {
    SurveyResult,
  },
  methods: {
    async loadExperiences() {
      this.isLoading = true;
      this.error = false;
        
      try {
        const response = await fetch(process.env.VUE_APP_API_URL);
      
          if (response.ok) {
            this.isLoading = false;

            const data = await response.json();
            const results = [];
            
            for (let id in data) {
              results.push({
                id: id, 
                name: data[id].name,
                rating: data[id].rating
              })
            }
            this.results = results;
		} else {
      this.isLoading = false;
			throw Error(response.statusText);
		}     
      } catch (error) {
        this.error = error;
      }
    }
  },
  created() {
    this.loadExperiences();
  }
};
</script>

<!--------------------------------------------------------------------->

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>