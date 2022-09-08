<template>
    <div class="mx-auto py-2 px-4 lg:max-w-7xl lg:px-8">

      <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">

        <div v-for="ct in cts" :key="ct.id" class="flex items-stretch bg-white rounded-sm border dark:border-gray-700 dark:bg-gray-800 shadow-md p-2">

            

            <div class="w-full">
              <div class="">
                <nuxt-link to="products/page" class="text-gray-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  <h2>{{ ct.name }}</h2>
                </nuxt-link>
              </div>
             

              <div class="flex flex-col">
                <div v-for="sct in ct.inserted" :key="sct.id" >
                  <div>
                    <nuxt-link to="#" class="text-gray-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      {{ sct.name }}
                    </nuxt-link>
                  </div>
                  
                </div>
              </div>

            </div>

            
          
        </div>


      </div>




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