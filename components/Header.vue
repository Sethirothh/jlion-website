<template>
  <div class="navigation-wrapper">
    <v-system-bar color="navigation deep-purple darken-4 pa-md-6">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-system-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      bottom
      temporary
      class="navigation__drawer"
    >
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item class="navigation__item">
            <v-list-item-title class="navigation__link">Home</v-list-item-title>
          </v-list-item>

          <v-list-item class="navigation__item">
            <v-list-item-title class="navigation__link">Link</v-list-item-title>
          </v-list-item>

          <v-list-item class="navigation__item">
            <v-list-item-title class="navigation__link"
              >Link here</v-list-item-title
            >
          </v-list-item>

          <v-list-item class="navigation__item">
            <v-list-item-title class="navigation__link"
              >Link here</v-list-item-title
            >
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <div class="extra-content">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, et.
        </p>
      </div>
    </v-navigation-drawer>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data: () => ({
    drawer: false,
    group: null,
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
});
</script>
<style lang="scss" scoped>
.navigation {
  padding: 30px 20px;
  &__list {
    list-style: none;
    display: flex;
  }
  &__drawer {
    padding: 14px 8px;
  }
}
</style>
