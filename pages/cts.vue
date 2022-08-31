<template>
    <div>
      <h1>Категории</h1>
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