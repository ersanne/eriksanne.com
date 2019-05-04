<template>
  <v-app>
    <v-navigation-drawer v-model="sidebar" temporary app>
      <v-list>
        <v-list-tile
          v-for="item in menuItems"
          :key="item.title"
          v-on:click="$vuetify.goTo(item.id)"
        >
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar app color="white">
            <span class="hidden-sm-and-up">
                <v-toolbar-side-icon v-on:click="sidebar = !sidebar">
                </v-toolbar-side-icon>
            </span>
      <v-toolbar-title class="headline text-uppercase">
        <router-link to="/" tag="span" style="cursor: pointer">{{ appTitle }}</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          flat
          v-for="item in menuItems"
          :key="item.title"
          v-on:click="$vuetify.goTo(item.id)">
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
      <v-btn round color="primary">Download CV</v-btn>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>

    <v-footer>
      <v-layout
        align-center
        justify-center
      >
        <p>&copy; 2019 Erik Sanne</p>
      </v-layout>
    </v-footer>
  </v-app>
</template>
// @ is an alias to /src
<script>
export default {
  name: 'App',
  components: {},
  data () {
    return {
      appTitle: 'Erik Sanne',
      sidebar: false,
      menuItems: [
        { title: 'About Me', id: '#about-me' },
        { title: 'Skills', id: '#skills' },
        { title: 'Experience', id: '#experience' },
        { title: 'Portfolio', id: '#portfolio' },
        { title: 'Contact Me', id: '#contact' }
      ]
    }
  },
  methods: {
    sendHome: function () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="stylus">
#app
  background: #fff
  .container
    max-width: 1170px
</style>
