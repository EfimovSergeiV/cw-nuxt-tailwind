<template>
  <section id="" class="">
    <small>{{ mweld }}</small>
  </section>
</template>
  
<script>
  export default {
    name: 'MWeldSection',
    components: {
      // Hooper,
    },
    props: {
      mweld: {
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