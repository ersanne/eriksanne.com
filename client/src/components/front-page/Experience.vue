<template>
  <v-container>
    <h2 class="headline text-xs-center py-5 font-weight-bold text-uppercase grey--text text--darken-3">
      Experience</h2>
    <v-divider></v-divider>
    <v-timeline>
      <v-timeline-item
        v-for="(item, i) in items"
        :key="i"
        small
      >
        <template v-slot:opposite>
          <span>{{item.startDate}} - {{item.endDate}}</span>
        </template>
        <v-card
          dark
        >
          <v-card-title>{{ item.company }}</v-card-title>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>
  export default {
    name: 'Experience',
    data () {
      return {
        items: [
          {company: 'Morgan Stanley', location: 'Glasgow, UK', startDate: 'Jun 2017', endDate: 'May 2018'},
          {company: 'Sykes', location: 'Glasgow, UK', startDate: 'Jun 2017', endDate: 'May 2018'}
        ]
      }
    }
  }
</script>

<style scoped>

</style>
