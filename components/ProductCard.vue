<template>

  <div class="p-2">
    <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-sm bg-white xl:aspect-w-7 xl:aspect-h-8">
      <img 
        :src="product.preview_image" 
        :alt="product.imageAlt"
        loading=lazy
        width="235"
        height="177"
        class="h-full w-full object-cover object-center group-hover:opacity-75" 
      />
    </div>

    <nuxt-link to="#">
      <p class="text-lg text-right font-medium text-gray-900 dark:text-gray-200">{{ product.prod_price[0].price.toLocaleString() }} руб.</p>
      <p class="text-sm text-right font-medium text-gray-900 dark:text-gray-200">В наличии</p>
      <p class="mt-2 h-16 text-sm text-gray-700 dark:text-gray-200 text-center">{{ product.name }}</p>
    </nuxt-link>


    <div class="grid grid-flow-col justify-items-end">
      <button type="button" class="mdi mdi-24px mdi-equalizer-outline text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-500 focus:outline-none transition duration-300 delay-150 hover:delay-300"></button>
      <button type="button" class="mdi mdi-24px mdi-heart-multiple-outline text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-500 focus:outline-none transition duration-300 delay-150 hover:delay-300"></button>
      <button type="button" class="mdi mdi-16px mdi-cart-outline rounded-sm bg-yellow-450 px-2 py-1 text-base text-gray-800 shadow-sm hover:bg-yellow-550 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1 transition duration-300 delay-150 hover:delay-300">
        В корзину
      </button>
    </div>

  </div>

</template>

<script>
    export default {
      name: 'ProductSection',
      components: {
      },
      props: {
        product: {
          type: Object,
          default: Object,
        },
      },
      data() {
        return {
          dataset: true,
        }
      },
    }
  </script>