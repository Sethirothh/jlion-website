<template>
  <div v-editable="blok" class="timeline" id="timeline">
    <div class="timeline__heading-inner">
      <h1 class="timeline__heading">
        {{ blok.Title }}
      </h1>
    </div>
    <div class="timeline__items">
      <div
        v-editable="blok"
        :key="timeline._uid"
        v-for="timeline in blok.TimelineStamp"
        class="timeline__item"
      >
        <timeline-stamp :blok="timeline" />
      </div>
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
.timeline {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: $color-gray;
  padding: 60px 16px;

  &__heading {
    font-size: $font-size-heading-3;
    text-align: center;
    &-inner {
      padding: 0 16px;
    }
  }

  &__item {
    width: 100%;
  }

  &__items {
    max-width: 1400px;
    width: 100%;
    padding: 0 16px;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    justify-content: center;

    &::before {
      content: "";
      position: absolute;
      width: 5px;
      height: 100%;
      background-color: rgba($color-tertiary, 0.4);
    }
    &::after {
      content: "\25bc";
      font-size: 30px;
      z-index: 2;
      color: $color-tertiary;
      position: absolute;
      bottom: -15px;
    }
  }
}
</style>
