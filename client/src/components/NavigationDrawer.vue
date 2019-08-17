<template>
  <v-navigation-drawer
    v-model="drawer"
    temporary
    floating
    app>
    <v-list>
      <v-list-tile
        v-for="link in links"
        :key="link.text"
        :href="`#${link.id}`"
        :class="[{
          'primary--text': activeIndex === link.id,
          'blue-grey--text text--darken-2': activeIndex !== link.id
        }]"
        @click.stop.prevent="onClick(`#${link.id}`)"
      >
        <v-list-tile-content>{{ link.text }}</v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'NavigationDrawer',
  computed: {
    drawer: {
      get () {
        return this.$store.state.drawer
      },
      set (newValue) {
        this.$store.commit('drawer', newValue)
      }
    },
    ...mapState([
      'links',
      'activeIndex'
    ])
  },
  methods: {
    onClick (hash) {
      this.drawer = false
      this.$vuetify.goTo(hash)
    }
  }
}
</script>

<style lang="stylus" module>
.title
  text-decoration: none
</style>
