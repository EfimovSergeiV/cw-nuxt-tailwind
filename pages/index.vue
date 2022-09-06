<template>
  <div>

    <!-- <Main :cts="cts" :banners="banners" /> -->
    <ESAB :esab="esab" />
    <CorouselProducts :neues="neues" />
    <MWeld :mweld="mweld" />
    <Svarog :mpromobs="mpromobs" />
    <Recommend :recommends="recommends" />
    <Latest :latest="latest" />

  </div>
</template>

<script>
import Main from '~/components/sections/Main.vue'
import ESAB from '~/components/sections/ESAB.vue'
import CorouselProducts from '~/components/sections/CorouselProducts.vue'
import MWeld from '~/components/sections/MWeld.vue'
import Svarog from '~/components/sections/Svarog.vue'
import Recommend from '~/components/sections/Recommend.vue'
import Latest from '~/components/sections/Latest.vue'
import CartModal from '~/components/CartModal.vue'
export default {
  name: 'IndexPage',
  components: {
    Main,
    ESAB,
    CorouselProducts,
    MWeld,
    Svarog,
    Recommend,
    Latest,
    CartModal
},
  async asyncData({ $axios }) {
    const banners = await $axios.$get('c/mainbanner/')
    const cts = await $axios.$get('c/ct/')
    const esab = await $axios.$get('c/prods/?brnd=3')
    const latest = await $axios.$get('c/neues/')
    const mpromobs = await $axios.$get('c/mpromob/')
    const recommends = await $axios.$get(`c/recommend/`)
    const mweld = await $axios.$get(`c/prod/1835/`)
    return { banners, cts, latest, mpromobs, esab, recommends, mweld }
  },
  data() {
    return {
      stat: false,
    }
  },
}
</script>
