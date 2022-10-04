<template lang="en">
    <li>
        <h3>{{ coach.firstName }} {{ coach.lastName }}</h3>
        <h4>${{ coach.hourlyRate }}/hour</h4>
        <div>
            <base-badge v-for="(area) in coach.areas" :type="area" :key="area" :title="area"></base-badge>
        </div>
        
        <div class="actions">
			<base-button mode="outline" :isLink="true" :linkTo="{name: 'details', params: {id:  coach.id  } }">Details</base-button>
			<base-button                :isLink="true" :linkTo="{name: 'contact', params: {id:  coach.id  } }">Contact</base-button>
        </div>
        
    </li>
</template>

<!-- --------------------------------------------------------------- -->

<script>
export default {
    props: {'coach': Object}
}
</script>

<!-- --------------------------------------------------------------- -->

<style lang="scss" scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}  
</style>