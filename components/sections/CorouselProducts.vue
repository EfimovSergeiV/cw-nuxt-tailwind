<template>
  <section id="" class="mt-4">
    <small>{{ neues }}</small>
  </section>
</template>
  
<script>
  export default {
    name: 'CorouselProductsSection',
    components: {
      // Hooper,
    },
    props: {
      neues: {
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