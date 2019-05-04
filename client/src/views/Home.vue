<template>
  <div>
    <banner></banner>
    <about-me></about-me>
    <skills></skills>
    <languages></languages>
    <experience></experience>
    <education></education>
    <portfolio></portfolio>
    <contact></contact>
    <button-go-top></button-go-top>
  </div>
</template>

<script>

import Experience from '../components/front-page/Experience'
import Banner from '../components/front-page/Banner'
import AboutMe from '../components/front-page/AboutMe'
import Contact from '../components/front-page/Contact'
import Skills from '../components/front-page/Skills'
import Portfolio from '../components/front-page/Portfolio'
import ButtonGoTop from '../components/front-page/ButtonGoTop'
import Education from '../components/front-page/Education'
import Languages from '../components/front-page/Languages'

export default {
  components: {
    Languages,
    Education,
    ButtonGoTop,
    Portfolio,
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
