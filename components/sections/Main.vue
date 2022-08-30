<template>
  <section id="" class="">
    <small>{{ cts }}</small>
    <small>{{ banners }}</small>
  </section>
</template>

<script>
export default {
  name: 'MainSection',
  components: {
    // Hooper,
  },
  props: {
    cts: {
      type: Array,
      default: Array,
    },
    banners: {
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