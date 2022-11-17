<template >
<div>
	<nav class="navbar bg-white border-bottom navbar-light px-4">
		<router-link class="navbar-brand me-auto" :to="{name:'home'}">LaravelBnb</router-link>
		<!-- <router-link class="btn " :to="{name: 'second'}">Second</router-link> -->
	</nav>

	<div class="container my-4 px-4">
		<router-view></router-view>
	</div>
</div>
</template>

<!-- --------------------------------------------------------------- -->

<script>
export default {

}
</script>

<!-- --------------------------------------------------------------- -->

<style lang="scss " scoped >
    
</style>