<template>
    <v-fab-transition>
        <v-btn
                v-scroll="onScroll"
                v-show="hidden"
                v-on:click="$vuetify.goTo(0)"
                bottom
                right
                fab
                fixed
                color="primary"
                aria-label="Volver arriba"
        >
            <v-icon>expand_less</v-icon>
        </v-btn>
    </v-fab-transition>
</template>

<script>
export default {
  data: () => ({
    hidden: false
  }),
  methods: {
    onScroll () {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset || document.documentElement.offsetTop || 0
      this.hidden = top > 560
    }
  }
}
</script>
