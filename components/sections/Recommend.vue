<template>
  <section id="" class="">
    
    <div class="bg-gray-100 dark:bg-gray-800 dark:text-gray-200">
      <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">

        <h1>Рекоммендуем:</h1>
        <h2 class="sr-only">Products</h2>
  
        <div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          <div v-for="product in recommends" :key="product.id" class="bg-white rounded-sm dark:bg-gray-900 shadow-2xl">
            <ProductCard :product="product" />
          </div>

        </div>

      </div>
    </div>
  </section>
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