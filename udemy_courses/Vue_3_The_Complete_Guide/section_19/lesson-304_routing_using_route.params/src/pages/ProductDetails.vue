<template>
  <section>
    <h2>{{ title }}</h2>
    <h3>${{ price}}</h3>
    <p>{{ description}}</p>
    <router-link to="/products/p2">Product 2</router-link>
  </section>
</template>

<!-- --------------------------------------------------------------- -->

<script>
/* eslint-disable */
import { ref, inject, computed } from 'vue';
import { useLink, useRoute, useRouter } from 'vue-router';

export default {
  props: ['pid'],
  
  setup(props, context) {
    const products = inject('products');

	const route = useRoute();

    const selectedProduct = computed(()=>{
      return  products.value.find((product) =>{
		
        // return product.id === props.pid;

		// ~~> OR: using useRoute instead of props:
        return product.id === route.params.pid;
      });
    })

    const title = computed(() => selectedProduct.value.title);
    const price = computed(() => selectedProduct.value.price);
    const description = computed(() => selectedProduct.value.description);

    return { title, price, description };
  },
};
</script>

<!-- --------------------------------------------------------------- -->

<style scoped>
section {
  margin: 3rem auto;
  max-width: 40rem;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
</style>