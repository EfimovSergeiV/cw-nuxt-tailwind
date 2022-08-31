<template>
  <div>
    <h4>THIS IS BREADCRUMBS</h4>
  </div>
</template>

<script>
  // import ProductCard from '../ProductCard.vue';
    
  export default {
    // name: 'ProductsSection',
    components: {
      // ProductCard
  },
    props: {
      breadcrumbs: {
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