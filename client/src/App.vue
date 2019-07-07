<template>
  <v-app>
    <NavigationDrawer/>
    <Toolbar/>
    <v-content style="padding-bottom: 80px">
      <router-view></router-view>
    </v-content>
    <button-go-top></button-go-top>
    <Footer></Footer>
  </v-app>
</template>

<script>

import { mapState } from 'vuex'
import scrollSpyMixin from './scrollSpyMixin'
import goTo from 'vuetify/es5/components/Vuetify/goTo'
import NavigationDrawer from './components/NavigationDrawer'
import Toolbar from './components/Toolbar'
import ButtonGoTop from './components/front-page/ButtonGoTop'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    NavigationDrawer,
    Toolbar,
    ButtonGoTop,
    Footer
  },
  computed: mapState([
    'links',
    'activeIndex'
  ]),
  mixins: [scrollSpyMixin],
  created () {
    const hash = this.$route.hash
    if (hash) {
      this.$store.commit('activeIndex', hash.substr(1))
      this.$nextTick(() => {
        // Code that will run only after the
        // entire view has been rendered
        goTo(hash)
      })
    }
  }
}
</script>

<style lang="stylus">
#app
  background: #fff
  .container, .v-toolbar--fixed .v-toolbar__content
    max-width: 1170px
  .v-toolbar--fixed .v-toolbar__content
    margin: 0 auto
</style>
