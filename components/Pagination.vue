<template>
  <div class="mx-auto py-2 px-4 lg:max-w-7xl lg:px-8">
    <div class="flex items-center justify-between border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-sm px-4 py-3 sm:px-6">
      <div class="flex flex-1 justify-between sm:hidden">
        <a href="#" class="relative inline-flex items-center rounded-sm border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700  hover:bg-gray-50">Предыдущая</a>
        <a href="#" class="relative ml-3 inline-flex items-center rounded-sm border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Следущая</a>
      </div>
      <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p class="text-sm text-gray-700 dark:text-gray-200">
            Показано
            <span class="font-medium">1</span>
            по
            <span class="font-medium">20</span>
            из
            <span class="font-medium">97</span>
            результатов
          </p>
        </div>
        <div>
          <nav class="relative z-0 inline-flex -space-x-px rounded-sm shadow-sm" aria-label="Pagination">
            <a href="#" class="relative inline-flex items-center rounded-l-sm border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50">
              <span class="sr-only">Предыдущая</span>
              <!-- Heroicon name: mini/chevron-left -->
              <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
              </svg>
            </a>
            <!-- Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" -->
            <a href="#" aria-current="page" class="relative z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600">1</a>
            <a href="#" class="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50">2</a>
            <a href="#" class="relative hidden items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 md:inline-flex">3</a>
            <span class="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700">...</span>
            <a href="#" class="relative hidden items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 md:inline-flex">8</a>
            <a href="#" class="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50">9</a>
            <a href="#" class="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50">10</a>
            <a href="#" class="relative inline-flex items-center rounded-r-sm border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50">
              <span class="sr-only">Следущая</span>
              <!-- Heroicon name: mini/chevron-right -->
              <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
              </svg>
            </a>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // import ProductCard from '../ProductCard.vue';
    
    export default {
      name: 'ProductsSection',
      components: {
        // ProductCard
  },
      props: {
        pages: {
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