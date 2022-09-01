<template>
  <section id="" class="">
    <!-- <small>{{ cts }}</small>
    <small>{{ banners }}</small> -->
    <h1>Main section</h1>
    <video class="w-96" controls>
      <source src="https://www.youtube.com/embed/SakTd5qGn24?autoplay=0&amp;loop=1&amp;&amp;playlist=SakTd5qGn24" type="video/mp4">
      Your browser does not support the video tag.
    </video>
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