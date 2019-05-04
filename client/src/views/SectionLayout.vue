<template>
  <section :class="`section-layout section-${id} ${$style.section}`">
    <v-container class="py-0">
      <h2
        :id="id"
        class="headline text-xs-center py-5 font-weight-bold text-uppercase grey--text text--darken-3"
      >{{ title }}</h2>
      <v-divider></v-divider>
      <div :class="$style.padding">
        <slot></slot>
      </div>
    </v-container>
  </section>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  name: 'SectionLayout'
}
</script>

<style lang="stylus" module>
.padding
  padding-top: 80px
  padding-bottom: 80px
.section:nth-child(odd)
  background: #f4f7fbcc
</style>
