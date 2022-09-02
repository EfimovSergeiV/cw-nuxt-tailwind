<template>

  <div class="p-2">

    <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-sm bg-white xl:aspect-w-7 xl:aspect-h-8">
      <img :src="product.preview_image" :alt="product.imageAlt" class="h-full w-full object-cover object-center group-hover:opacity-75" />
    </div>

    <p class="mt-1 text-lg text-right font-medium text-gray-900 dark:text-gray-200">{{ product.prod_price[0].price.toLocaleString() }} руб.</p>
    <p class="mt-1 text-sm text-right font-medium text-gray-900 dark:text-gray-200">В наличии</p>
    <h3 class="mt-4 h-24 text-sm text-gray-700 dark:text-gray-200 text-center">{{ product.name }}</h3>
    





    <div class="grid grid-flow-row auto-rows-max">
      <div class="grid grid-flow-col auto-cols-max">
        <div><button type="button" class="mdi mdi-24px mdi-equalizer-outline text-gray-700"></button></div>
        <div><button type="button" class="mdi mdi-24px mdi-heart-multiple-outline text-gray-700"></button></div>
        <div>
          <button type="button" class="mdi mdi-16px mdi-cart-outline inline-flex items-center rounded-md border border-transparent bg-yellow-400 px-4 py-2 text-base font-semibold text-gray-800 shadow-sm hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
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