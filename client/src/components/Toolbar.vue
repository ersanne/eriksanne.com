<template>
  <v-toolbar app color="white">
    <v-toolbar-side-icon
      color="blue-grey--text text--darken-3"
      class="hidden-md-and-up"
      @click.stop="drawerToggle()">
    </v-toolbar-side-icon>
    <v-toolbar-title class="headline text-uppercase">
      <a
        href="/"
        :class="$style.title"
        @click.stop.prevent="$vuetify.goTo(0)">
      Erik Sanne</a>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn
        flat
        v-for="link in links"
        :key="link.title"
        :href="`#${link.id}`"
        :ripple="false"
        :class="[{
            'primary--text': activeIndex === link.id,
            'blue-grey--text text--darken-2': activeIndex !== link.id
          }]"
        @click.stop.prevent="$vuetify.goTo(`#${link.id}`)"
        :aria-label="link.text"
        v-text="link.text">
      </v-btn>
    </v-toolbar-items>
    <div class="hidden-sm-and-down">
      <a href="/CV_ErikSanne.pdf"
         :class="$style.title">
        <v-btn round color="primary">Download CV</v-btn>
      </a>
    </div>
  </v-toolbar>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'Toolbar',
  computed: mapState([
    'links',
    'activeIndex'
  ]),
  methods: {
    drawerToggle () {
      this.$store.commit('drawerToggle')
    }
  }
}
</script>

<style lang="stylus" module>
.title
  text-decoration: none
@media only screen and (min-width: 370px) {
  .hidden-369-and-down {
    display: none !important;
  }
}
@media only screen and (max-width: 369px) {
  .hidden-370-and-up {
    display: none !important;
  }
}
</style>
