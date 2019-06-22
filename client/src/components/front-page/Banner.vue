<template>
    <v-parallax
            src="https://i.imgur.com/HSv30Lc.jpg"
    >
        <v-layout
                align-center
                column
                justify-center
        >
            <h1 class="display-2 mb-3">Erik Sanne</h1>
            <h4 class="subheading">Software Engineer</h4>
        </v-layout>
    </v-parallax>
</template>

<script>
export default {
  name: 'Banner'
}
</script>

<style scoped>
  .v-parallax__image {
    transform: none !important;
    width: 100% !important;
  }
</style>
