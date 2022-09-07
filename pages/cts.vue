<template>
    <div class="mx-auto py-2 px-4 lg:max-w-7xl lg:px-8">

      <!-- <nuxt-link class="bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium">LIST RPODUCTS</nuxt-link> -->

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">

        <div v-for="ct in cts" :key="ct.id" class="flex items-stretch bg-white rounded-sm border dark:border-gray-700 dark:bg-gray-800 shadow-md p-2">

            

            <div class="flex flex-col">
              <div>
                <nuxt-link to="products/page" class="text-gray-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium">{{ ct.name }}</nuxt-link>
              </div>
             

              <div class="flex flex-col">
                <div v-for="sct in ct.inserted" :key="sct.id" >
                  <p>{{ sct.name }}</p>
                </div>
              </div>

            </div>
          
          <!-- <div class="">
            <p v-for="sct in ct.inserted" :key="sct.id">{{ sct.name }}</p>
          </div> -->
          
        </div>



          <!-- <div class="">
            <div class="bg-white rounded-sm border dark:border-gray-700 dark:bg-gray-800 shadow-md">
              <div class="">
              <div class="p-2">
                <p class="p-1">{{ ct.name }}</p>

                <div class="" v-for="sct in ct.inserted" :key="sct.id">
                  <p class="p-2">{{ sct.name }}</p>
                </div>

              </div>
            </div>
            
            </div>
          </div> -->


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