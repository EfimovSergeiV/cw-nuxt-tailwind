<template>
  <div class="dark:bg-gray-800 dark:text-gray-200">

    <Navbar />
    <Header />
    <Nuxt class="mx-auto p-4" />
    <Footer />

  </div>
</template>
  
<script>
  import Navbar from '~/components/Navbar.vue';
  import Header from '~/components/Header.vue';
  import Footer from '~/components/Footer.vue';
  export default {
    head: {
        title: "Nuxt.js with TailwindCSS",
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            {
                hid: "description",
                name: "description",
                content: "Nuxt.js with TailwindCSS example",
            },
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
    components: { Navbar, Header, Footer }
};
</script>