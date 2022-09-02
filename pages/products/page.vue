<template>
    <div>

      <Breadcrumbs />
      <TwoModal />
      <Pagination />
      <Products :products="response.results" />  
      <Pagination />
      
    </div>
  </template>
  
<script>
  import Products from '~/components/sections/Products.vue'
import Breadcrumbs from '~/components/Breadcrumbs.vue'
import TwoModal from '~/components/TwoModal.vue'
import Pagination from '~/components/Pagination.vue'

  export default {
    name: 'CtsPage',
      components: {
    Products,
    Breadcrumbs,
    TwoModal,
    Pagination
},
    async asyncData({ query, $axios }) {
      const brands = await $axios.$get(`c/ctbrand/`, {
        params: { ct: query.ct },
      })
      const props = await $axios.$get(`c/props/`, {
        params: { ct: query.ct },
      })
      const rands = await $axios.$get(`c/random/`, {
        params: { ct: query.ct },
      })
      const response = await $axios.$get(`c/prods/`, {
        params: query,
      })
      const breadcrumbs = await $axios.$get(`c/breadcrumb/`, {
        params: query,
      })
      return { response, brands, props, rands, breadcrumbs }
    },
    data() {
      return {
        stat: false,
      }
    },
  }
</script>