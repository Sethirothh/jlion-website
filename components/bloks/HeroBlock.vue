<template>
  <div v-editable="blok" class="hero-block" id="hero">
    <div class="hero-block__heading-inner">
      <h1 class="hero-block__heading">
        {{ blok.text }}
      </h1>
      <h4 class="hero-block__heading hero-block__heading--subheading">
        {{ blok.subheading }}
      </h4>
      <template v-if="blok.link.url !== ''">
        <a :href="blok.link.url" target="_blank" class="hero-block__button">
          {{ blok.linkText }}
        </a>
      </template>
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
.hero-block {
  height: calc(100vh - 60px);
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: flex-start;

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
    &--subheading {
      font-size: $font-size-subheading;
    }
  }
  &__button {
    display: inline-block;
    padding: 12px 32px;
    margin-top: 20px;
    background-color: $color-secondary-light;
    color: $color-black;
    border-radius: 8px;
    text-decoration: none;
    transition: 0.4s;
    &:hover {
      background-color: $color-gray;
      color: $color-white;
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
