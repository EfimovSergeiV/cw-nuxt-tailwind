<template>
  <div>

    <div v-for="product in products" :key="product.id">
      <ProductCard />
    </div>

  </div>
</template>

<script>
import ProductCard from '../ProductCard.vue';
  
  export default {
    name: 'ProductsSection',
    components: {
      ProductCard
},
    props: {
      products: {
        type: Array,
        default: Array,
      },
    },
    data() {
      return {
        dataset: true,
      }
    },
  }
</script>