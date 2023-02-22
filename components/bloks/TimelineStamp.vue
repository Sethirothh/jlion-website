<template>
  <div class="timeline-item">
    <div class="timeline-item__date timeline-item__date--start">
      {{ startDate() }}
    </div>
    <div class="timeline-item__content">
      <h3 class="timeline-item__heading">
        {{ blok.StampTitle }}
      </h3>
      <p class="timeline-item__information">{{ blok.StampInformation }},</p>
    </div>
    <div class="timeline-item__image-wrapper">
      <img
        :src="blok.StampImage.filename"
        :alt="blok.StampImage.alt"
        class="timeline-item__image"
      />
    </div>
    <div class="timeline-item__date timeline-item__date--end">
      {{ endDate() }}
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

  methods: {
    startDate() {
      const date = this.blok.StampStart.split(" ");
      return date[0];
    },
    endDate() {
      const date = this.blok.StampEnd.split(" ");
      return date[0];
    },
  },
};
</script>
<style lang="scss" scoped>
.timeline-item {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-between;
  align-items: center;
  background-color: $color-gray;
  margin-bottom: 60px;
  position: relative;
  z-index: 3;
  padding: 16px 16px;

  &__heading {
    font-size: 30px;
  }

  &__content {
    font-size: $font-size-quote;
    margin-bottom: 30px;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;

    &::after {
      content: "";
      position: absolute;
      display: block;
      width: 5px;
      height: 5px;
      bottom: -15px;
      background-color: rgba($color-tertiary, 0.4);
      border-radius: 50%;
    }
  }

  &__image {
    width: 50%;

    &-wrapper {
      width: 30%;
    }
  }

  &__date {
    overflow: hidden;
    height: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.5s;
    font-weight: 700;
  }

  &:hover {
    .timeline-item__date {
      height: 40px;
    }
  }

  @media screen and (max-width: 600px) {
    .timeline-item {
      &__image {
        width: 100%;
        &-wrapper {
          width: 70%;
        }
      }
    }
  }
}
</style>
