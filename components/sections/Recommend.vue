<template>
  <div class="bg-gray-100 dark:bg-gray-900 dark:text-gray-200">
    <div class="mx-auto py-4 px-4 lg:max-w-7xl lg:px-8">

      <div class="py-2">
        <p>Рекоммендуем:</p>
      </div>

      <div class="grid grid-cols-1 gap-y-4 gap-x-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8">
        <div v-for="product in recommends" :key="product.id" class="bg-white rounded-sm border dark:border-gray-700 dark:bg-gray-800 shadow-md">
          <ProductCard :product="product" />
        </div>
      </div>

    </div>
  </div>
</template>
  
<script>
  import ProductCard from '../ProductCard.vue';
    export default {
      name: 'RecommendSection',
      components: {
        ProductCard
    },
    props: {
      recommends: {
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