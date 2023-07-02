<template >
	<div class="wrong-letters-container">
		<div class="wrong-letter">
			<p v-show="worngLetters.length > 0">Wrong</p>
			<span v-for="(letter, i) in worngLetters">
				{{ letter }}
				{{ i === worngLetters.length - 1 ? '' : ', ' }}
			</span>
		</div>
	</div>
</template>
  
  <!-- --------------------------------------------------------------- -->
  
<script>
export default {
	props: {
		worngLetters: {type: Array, default: () => []}
	},
	setup() {
	}
}
</script>
  
  <!-- --------------------------------------------------------------- -->
  
<style lang="scss" scoped></style>