<template>
  <div v-editable="blok" class="content-slide">
    <div class="content-slide__heading-inner">
      <h1 class="content-slide__heading">
        {{ blok.text }}
      </h1>
    </div>
    <img :src="blok.image.filename" :alt="blok.image.alt" />
  </div>
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
.content-slide {
  height: 70vh;
  overflow: hidden;
  position: relative;
  display: flex;

  img {
    width: 100%;
  }
  &__heading {
    font-size: $font-size-heading;
    color: $color-white;
    &-inner {
      position: absolute;
      left: 100px;
      bottom: 100px;
      z-index: 2;
      overflow: hidden;
    }
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background: linear-gradient(rgba($color-black, 0), rgba($color-black, 1));
  }
}
</style>
