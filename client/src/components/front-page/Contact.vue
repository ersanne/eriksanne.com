<template>
    <v-container>
        <h2 class="headline text-xs-center py-5 font-weight-bold text-uppercase grey--text text--darken-3">Contact Me</h2>
        <v-divider></v-divider>
        <div class="text-xs-center pb-4">
            <v-btn
                    v-for="item in items"
                    :color="item.color"
                    :key="item.icon"
                    :href="item.link"
                    :aria-label="item.label"
                    target="_blank"
                    rel="noopener"
                    fab
                    depressed
                    dark
            >
                <v-icon medium dark>mdi-{{ item.icon }}</v-icon>
            </v-btn>
        </div>
        <v-layout align-center justify-center fill-height>
            <v-icon>email</v-icon>
            <span class="title font-weight-light grey--text text--darken-3"> erik@eriksanne.com</span>
        </v-layout>
    </v-container>
</template>

<script>
  export default {
    data: () => ({
      items: [
        {
          label: 'GitHub',
          icon: 'github-circle',
          link: 'https://github.com/',
          color: '#333'
        },
        {
          label: 'LinkedIn',
          icon: 'linkedin',
          link: 'https://www.linkedin.com/in/',
          color: '#0077b5'
        },
        {
          label: 'Twitter',
          icon: 'twitter',
          link: 'https://www.twitter.com/',
          color: '#38a1f3'
        }
      ]
    })
  }
</script>
