<template>
  <div>
    <banner></banner>
    <about-me></about-me>
    <skills></skills>
    <languages></languages>
    <experience></experience>
    <education></education>
    <contact></contact>
  </div>
</template>

<script>

import Experience from '../components/front-page/Experience'
import Banner from '../components/front-page/Banner'
import AboutMe from '../components/front-page/AboutMe'
import Contact from '../components/front-page/Contact'
import Skills from '../components/front-page/Skills'
import Education from '../components/front-page/Education'
import Languages from '../components/front-page/Languages'

export default {
  components: {
    Languages,
    Education,
    Skills,
    Contact,
    AboutMe,
    Banner,
    Experience
  },
  created () {
    const hash = this.$route.hash
    if (hash) {
      this.$store.commit('activeIndex', hash.substr(1))
      this.$nextTick(() => {
        // Code that will run only after the
        // entire view has been rendered
        // this.$router
      })
    }
  }
}
</script>
