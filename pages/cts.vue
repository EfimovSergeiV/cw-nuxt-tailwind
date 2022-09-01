<template>
    <div>
      <h1>Категории</h1>

      <nuxt-link to="products/page" class="bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium">LIST RPODUCTS</nuxt-link>

      <small>{{ cts }}</small>
  
    </div>
  </template>
  
  <script>
import Products from '~/components/sections/Products.vue'
//   import Main from '~/components/sections/Main.vue'

  export default {
    name: 'CtsPage',
    components: {
    Products
},
    async asyncData({ $axios }) {
      const cts = await $axios.$get(`c/ct/`)
      return { cts }
    },
    data() {
      return {
        stat: false,
      }
    },
  }
  </script>