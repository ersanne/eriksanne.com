<template>
  <div>
    <banner id="banner"></banner>
    <about-me id="about-me"></about-me>
    <skills id="skills"></skills>
    <experience id="experience"></experience>
    <portfolio id="portfolio"></portfolio>
    <contact id="contact"></contact>
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

  export default {
    components: {
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
