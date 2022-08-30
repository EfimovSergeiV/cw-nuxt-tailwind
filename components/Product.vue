<template>

  <div class="bg-white rounded-sm dark:bg-gray-900 p-4">

    <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-sm bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
      <img :src="product.preview_image" :alt="product.imageAlt" class="h-full w-full object-cover object-center group-hover:opacity-75" />
    </div>
    <h3 class="mt-4 text-sm text-gray-700 dark:text-gray-200 text-center">{{ product.name }}</h3>
    <p class="mt-1 text-lg font-medium text-gray-900 dark:text-gray-200">{{ product.prod_price[0].price }} RUB</p>

  </div>

  </template>

<script>
    export default {
      name: 'ProductSection',
      components: {
        // Hooper,
      },
      props: {
        product: {
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