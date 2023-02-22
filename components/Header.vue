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
      hide-overlay
      class="navigation__drawer"
    >
      <div class="navigation__drawer-content">
        <v-list>
          <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
          >
            <v-list-item class="navigation__item">
              <v-list-item-title class="navigation__link">
                <a href="#hero">Home</a>
              </v-list-item-title>
            </v-list-item>

            <v-list-item class="navigation__item">
              <v-list-item-title class="navigation__link">
                <a href="#timeline">Timeline</a>
              </v-list-item-title>
            </v-list-item>

            <v-list-item class="navigation__item">
              <v-list-item-title class="navigation__link"
                >Link here</v-list-item-title
              >
            </v-list-item>
          </v-list-item-group>
        </v-list>
        <div class="extra-content">
          <p>All rights reserved @jlion.dk</p>
        </div>
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
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 7;
  padding: 30px 20px;
  &__list {
    list-style: none;
    display: flex;
  }
  &__drawer {
    position: fixed;
    z-index: 8;
    padding: 14px 8px;
    &-content {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
}
.extra-content {
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 12px;
}
</style>
