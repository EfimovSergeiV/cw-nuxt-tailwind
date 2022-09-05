<template>
  <div>
    <div class="mb-10">
      <h1>Hallo welt</h1>
    </div>
      <div class="carousel-wrapper">

        <carousel v-bind="options">
          <slide v-for="i in 10" :key="i" class="img-wrapper">
            <img :src="`https://picsum.photos/800/400/?image=4${i}`" />
          </slide>

          <numbered-pagination slot="pagination" />
          <stylish-navigation slot="navigation" />
        </carousel>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: {
        loop: true,
        perPage: 6,
        paginationEnabled: true,
        paginationColor: "#ffffff",
        paginationEnabled: true
      }
    }
  }
}
</script>

<style>
.carousel-wrapper {
  padding: 20px;
  height: 400px;

}
.VueCarousel-slide {
  text-align: center;
}
.img-wrapper img {
  margin: auto;
  width: 300px;
  height: 400px;
  background-image: linear-gradient(gray 100%, transparent 0);
}
</style>