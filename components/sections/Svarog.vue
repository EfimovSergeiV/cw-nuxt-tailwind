<template>
  <section id="" class="">
    <small>{{ mpromobs }}</small>
  </section>
</template>
  
<script>
  export default {
    name: 'SvarogSection',
    components: {
      // Hooper,
    },
    props: {
        mpromobs: {
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