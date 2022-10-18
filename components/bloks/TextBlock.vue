<template>
  <div v-editable="blok" class="text-block">
    <h1>{{ blok.heading }}</h1>
    <SbRTE :richtext="blok.paragraph"></SbRTE>
    <div class="text-block__img-wrapper">
      <img
        :src="blok.image.filename"
        :alt="blok.image.alt"
        class="text-block__img"
      />
    </div>
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
.text-block {
  max-width: 1400px;
  margin: 0 auto;
  padding: 60px 14px;
  width: 100%;
  h1 {
    font-size: $font-size-heading;
    border-bottom: 1px solid $color-gray;
    margin-bottom: 24px;
  }
  &__img-wrapper {
    padding-top: 24px;
    margin-top: 24px;
    border-top: 1px solid $color-gray;
  }
  &__img {
    width: 100%;
  }
}
</style>
