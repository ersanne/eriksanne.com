<template>
  <section-layout id="experience" title="Experience">
    <v-layout wrap>
      <v-flex xs12>
        <v-timeline :dense="$vuetify.breakpoint.smAndDown">
          <v-timeline-item
            v-for="(item, i) in items"
            :color="item.color"
            :key="i"
            small
          >
            <span
              slot="opposite"
              :class="`title blue-grey--text text--darken-2 font-weight-regular`"
              v-text="item.date"
            ></span>
            <div class="py-4">
              <h2 class="title blue-grey--text text--darken-3 pb-2" v-text="item.title"></h2>
              <span class="primary--text text--darken-2 pb-2"
                v-text="`${item.company}, ${item.location}`">
              </span>
              <div class="blue-grey--text text--darken-1 pb-1 hidden-md-and-up" v-text="item.date"></div>
              <div class="blue-grey--text text--darken-3 pb-1" v-html="item.text"></div>
            </div>
          </v-timeline-item>
        </v-timeline>
      </v-flex>
    </v-layout>
  </section-layout>
</template>

<script>
import SectionLayout from '../../views/SectionLayout'
export default {
  name: 'Experience',
  components: { SectionLayout },
  data () {
    return {
      items: [
        { title: 'Technology Anayst - Industrial Placement',
          company: 'Morgan Stanley',
          location: 'Glasgow, UK',
          date: 'Jun 2018 - May 2019',
          text: '12 months split between Equity Swaps Trading and MSDE (Morgan Stanley Developer Environment).' +
            '<ul><li>Performance tuning</li>' +
            '<li>Software migration</li>' +
            '<li>Full stack software development</li>' +
            '<li>Worked with Java 7/8, Spring and Spring Boot, TypeScript with Angular 6, Python 2.7, ' +
            'Perl, SQL for DB2 and Sybase, Ant-build and Gradle</li></ul>' },
        { title: 'Product Specialist - Online Fraud Prevention',
          company: 'Sykes Global Services Ltd',
          location: 'Edinburgh, UK',
          date: 'May 2017 - May 2018',
          text: '' +
            '<ul><li>Understanding client’s needs and what actions are necessary to carry out' +
            ' requests successfully</li>' +
            '<li>Reviewing customer transactions to identify suspicious activity/fraud</li>' +
            '<li>Analysing trends</li>' +
            '<li>Gathering evidence</li></ul>' }
      ]
    }
  }
}
</script>

<style scoped>

</style>
