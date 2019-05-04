<template>
  <div>
    <component :blok="story.content" :is="story.content.component"></component>
  </div>
</template>

<script>

import StoryblokClient from 'storyblok-js-client/dist/index'

const token = 'ikCqNDZyFNLvnT6ZMjzoWAtt'

let storyapi = new StoryblokClient({
  accessToken: token
})

export default {
  name: 'Blog',
  data () {
    return {
      msg: 'Some message',
      story: {
        content: {
          body: []
        }
      }
    }
  },
  created () {
    window.storyblok.init({
      accessToken: token
    })
    window.storyblok.on('change', () => {
      this.getStory('blog', 'draft')
    })
    window.storyblok.pingEditor(() => {
      if (window.storyblok.isInEditor()) {
        this.getStory('blog', 'draft')
      } else {
        this.getStory('blog', 'published')
      }
    })
  },
  methods: {
    getStory (slug, version) {
      storyapi.get('cdn/stories/' + slug, {
        version: version
      })
        .then((response) => {
          this.story = response.data.story
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>

</style>
