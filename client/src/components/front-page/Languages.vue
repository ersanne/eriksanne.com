<template>
    <section-layout id="languages" title="Languages">
      <v-layout wrap justify-center>
        <v-flex xs12 sm6 md5 class="px-4">
          <div v-for="item in items" :key="item.text" class="mb-4">
            <div class="subheading blue-grey--text text--darken-3" v-text="item.text"></div>
            <v-progress-linear class="my-1" height="8" :value="item.value" :color="item.color"></v-progress-linear>
          </div>
        </v-flex>
      </v-layout>
    </section-layout>
</template>

<script>
import SectionLayout from '../../views/SectionLayout'
export default {
  name: 'Languages',
  components: { SectionLayout },
  data: () => ({
    items: [
      {
        text: 'German',
        value: 100,
        color: 'yellow darken-1'
      },
      {
        text: 'English',
        value: 95,
        color: 'red'
      }
    ]
  })
}
</script>

<style scoped>

</style>
