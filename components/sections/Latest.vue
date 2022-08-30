<template>
  <section id="" class="">
    <small>{{ latest }}</small>
  </section>
</template>
  
<script>
  export default {
    name: 'LatestSection',
    components: {
      // Hooper,
    },
    props: {
      latest: {
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