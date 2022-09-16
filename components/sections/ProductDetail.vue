<template>
  <section id="product-detail">

    <div class="mx-auto py-2 px-4 lg:max-w-7xl lg:px-8">

      <div class="bg-white rounded-sm border dark:border-gray-700 dark:bg-gray-800 shadow-md mb-2">

        <div class="p-2">
          <h1>{{ product.name }}</h1>
        </div>
      </div>


      <div class="grid grid-cols-2 gap-4 mt-4 mb-4">

        <div class="bg-white rounded-sm border dark:border-gray-700 dark:bg-gray-800 shadow-md p-2">
          <div class="flex justify-center h-full w-full rounded-sm">

            <div class="flex items-stretch ...">
              <div>
                <img src="https://api.glsvar.ru/files/img/c/preview/strong-400.png" width="235" height="177" class="rounded-sm"/>
              </div>

            </div>

          </div>
        </div>

        <div class="bg-white rounded-sm border dark:border-gray-700 dark:bg-gray-800 shadow-md p-2">
          <div class="mt-4">
            <div v-for="param in product.propstrmodel" :key="param.id">
              <div class="grid grid-cols-2">
                <div class=""><small>{{ param.name }} :</small></div>
                <div class="text-right"><small>{{ param.value }}</small></div>                
              </div>
            </div>
          </div>
        </div>



        <div class="bg-white rounded-sm border dark:border-gray-700 dark:bg-gray-800 shadow-md p-2">
          <div class="mt-4">
            <div v-for="param in product.propstrmodel" :key="param.id">
              <small> {{ param.name }}  {{ param.value }}</small>
            </div>
          </div>
        </div>


        <div class="bg-white rounded-sm border dark:border-gray-700 dark:bg-gray-800 shadow-md p-2">
          <div>
            <p> {{ product.decription }}</p>
          </div>
        </div>



      </div>



        
      <div class="bg-white rounded-sm border dark:border-gray-700 dark:bg-gray-800 shadow-md p-2 ">
        <button type="button" class="mdi mdi-24px mdi-equalizer-outline text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-500 focus:outline-none transition duration-300 delay-150 hover:delay-300"></button>
        <button type="button" class="mdi mdi-24px mdi-heart-multiple-outline text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-500 focus:outline-none transition duration-300 delay-150 hover:delay-300"></button>
        <button type="button" class="mdi mdi-16px mdi-cart-outline rounded-sm bg-yellow-450 px-8 py-2 text-base text-gray-800 shadow-sm hover:bg-yellow-550 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1 transition duration-300 delay-150 hover:delay-300">
          В корзину
        </button>
      </div>
      





    </div>

  </section>
</template>

<script>
  export default {
    name: 'ProductDetail',
      components: {
    },
    // props: {
    //   product: {
    //     type: Object,
    //     default: Object,
    //   },
    // },
    data() {
      return {
        product: {
          name: "Cварочный инвертор AuroraPRO STRONGHOLD 400M",
          decription: "Профессиональный инвертор STRONGHOLD 400M предназначендля работы штучными электродами (MMA) в условиях небольшого производства. Максимальный ток в 400А достигается при весе всего 22 кг.Профессиональный сварщик по достоинству оценит данный аппарат.Широкие возможности настроек инвертора обеспечивают высокое качество сварки практически в любых условиях.",
          propstrmodel: [
              {
                  "id": 7924,
                  "name": "Наибольшая пропускная способность при наибольшем рабочем давлении, л/мин",
                  "qname": "03sn",
                  "value": "30"
              },
              {
                  "id": 7920,
                  "name": "Габаритные размеры, мм",
                  "qname": "3b0e",
                  "value": "128х158х232"
              },
              {
                  "id": 7922,
                  "name": "Масса комплекта, кг",
                  "qname": "8q2m",
                  "value": "1"
              },
              {
                  "id": 7923,
                  "name": "Наименьшее давление газа на входе, при наибольшем расходе МПа (кгс/см2)",
                  "qname": "hekh",
                  "value": "0,8 (8)"
              },
              {
                  "id": 7921,
                  "name": "Наибольшее давление газа на входе, МПа (кгс/см2)",
                  "qname": "ik6q",
                  "value": "10 (100)"
              },
              {
                  "id": 9759,
                  "name": "Вес, кг",
                  "qname": "7z26",
                  "value": "5"
              },
              {
                  "id": 11635,
                  "name": "Тип проволоки",
                  "qname": "cop",
                  "value": "омеднённая"
              },
              {
                  "id": 9758,
                  "name": "Диаметр проволоки, мм",
                  "qname": "emjx",
                  "value": "1,0"
              }
          ],
        },
      }
    },
  }
</script>