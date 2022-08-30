<template>
  <section id="" class="mt-4">
    <small>{{ esab }}</small>
  </section>
</template>

  <script>
  export default {
    name: 'ESABSection',
    components: {
      // Hooper,
    },
    props: {
      esab: {
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