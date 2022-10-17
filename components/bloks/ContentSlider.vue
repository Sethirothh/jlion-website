<template>
  <carousel :per-page="1" :paginationEnabled="false" :loop="true">
    <slide
      v-editable="blok"
      :key="slide._uid"
      v-for="slide in blok.Slide"
      class="content-slider"
    >
      <component :blok="slide" :is="slide.component"
    /></slide>
  </carousel>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.content-slider {
  width: 100%;
}
</style>
