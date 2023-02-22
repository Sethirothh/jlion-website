<template>
  <footer class="footer">
    <div class="footer__wrapper">
      <div class="footer__column">
        <ul class="footer__list">
          <li class="footer__list-item">
            <h3 href="#" class="footer__heading">Kontaktinformationer</h3>
          </li>
          <li class="footer__list-item">
            <a href="#" class="footer__anchor">Jesper Gyldenløve Laursen </a>
          </li>
          <li class="footer__list-item">
            <a href="#" class="footer__anchor">Jespergyldenlve@gmail.com</a>
          </li>
          <li class="footer__list-item">
            <a href="#" class="footer__anchor">+4521734299</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>
<style lang="scss" scoped>
.footer {
  width: 100%;
  padding: 90px 0 120px;
  background-color: rgba($color-gray, 0.5);

  &__wrapper {
    max-width: 1400px;
    width: 100%;
    padding: 36px 36px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    background-color: rgba($color-white, 0.4);
    position: relative;
    border-radius: 5px;
    box-shadow: 10px 10px 10px rgba($color-black, 0.1);

    &::before,
    &::after {
      content: "";
      display: block;
      position: absolute;
      right: 15px;
      bottom: 15px;
      width: 100px;
      height: 100px;
      background-color: $color-primary;
      border-radius: 50%;
    }
    &::after {
      right: 20px;
      bottom: 50px;
      width: 20px;
      height: 20px;
      background-color: $color-white;
      box-shadow: -25px -25px 0 10px $color-white;
    }
  }
  &__list {
    list-style: none;
  }
  &__heading {
    font-size: $font-size-subheading-3;
  }
  &__anchor {
    text-decoration: none;
    overflow: hidden;
    display: inline-block;
    position: relative;
    color: $color-primary;
    font-size: $font-size-paragraph;
    font-weight: 600;
    margin: 10px 0;

    &::after {
      content: "";
      display: block;
      position: absolute;
      bottom: 1px;
      left: 0;
      width: 100%;
      overflow-wrap: break-word;
      height: 1px;
      background-color: $color-primary;
      transition: 0.2s ease;
      transform: translateX(-100%);
    }

    &:hover {
      &::after {
        transform: translateX(0);
      }
    }
  }
  &__inner {
    max-width: 1400px;
    display: flex;
    justify-content: space-between;
  }
  &__column {
    width: 30%;
    min-width: 300px;
  }
}
</style>
