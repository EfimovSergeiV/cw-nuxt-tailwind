<template>
  <section id="" class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">

    <h1>Main section</h1>

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