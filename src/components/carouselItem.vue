<template>
    <div class="carousel-item active">
      <div class="container">
        <carouselCard
                v-for="(item, index) in data"
                :data="item"
                :key="index"
        />
      </div>
  </div>
</template>

<style scoped>
  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
</style>

<script>
  import carouselCard from './carouselCard.vue';

  export default {
    props: {
      data: {
        type: Array,
        required: true
      }
    },
    components: {
      carouselCard
    }
  }
</script>