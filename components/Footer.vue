<template>
  <footer class="py-10 bg-teal-100">
    <div class="max-w-5xl mx-auto text-center">
      <nuxt-link
        class="text-gray-500 hover:text-gray-800 hover:underline"
        to="/en/sitemap">
        Sitemap
      </nuxt-link>
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
    height: 50vh;

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
