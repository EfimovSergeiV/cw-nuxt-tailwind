<template>

  <div class="p-2">

    <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-sm bg-white xl:aspect-w-7 xl:aspect-h-8">
      <img :src="product.preview_image" :alt="product.imageAlt" class="h-full w-full object-cover object-center group-hover:opacity-75" />
    </div>

    <p class="mt-1 text-lg text-right font-medium text-gray-900 dark:text-gray-200">{{ product.prod_price[0].price.toLocaleString() }} руб.</p>
    <p class="mt-1 text-sm text-right font-medium text-gray-900 dark:text-gray-200">В наличии</p>
    <p class="mt-4 h-24 text-sm text-gray-700 dark:text-gray-200 text-center">{{ product.name }}</p>

    <div class="grid grid-flow-row auto-rows-max justify-items-end">
      <div class="grid grid-flow-col auto-cols-max items-center">

        <div class="px-2">
          <button type="button" class="mdi mdi-24px mdi-equalizer-outline text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-500 focus:outline-none transition duration-300 delay-150 hover:delay-300"></button>
        </div>
        <div class="px-2">
          <button type="button" class="mdi mdi-24px mdi-heart-multiple-outline text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-500 focus:outline-none transition duration-300 delay-150 hover:delay-300"></button>
        </div>
        <div class="py-1">
          <button type="button" class="mdi mdi-16px mdi-cart-outline inline-flex items-center rounded-sm border border-transparent bg-yellow-450 px-2 py-1 text-base text-gray-800 shadow-sm hover:bg-yellow-550 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1 transition duration-300 delay-150 hover:delay-300">
            В корзину
          </button>
        </div>          

      </div>
    </div>

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