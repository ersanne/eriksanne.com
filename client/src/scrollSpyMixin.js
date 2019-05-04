import { getDocumentHeight, getWindowHeight } from './helpers'
export default {
  created () {
    window.addEventListener('scroll', this.onScroll)
  },
  mounted () {
    this.genList()
  },
  data: () => ({
    currentOffset: 0,
    list: [],
    timeout: null
  }),
  methods: {
    genList () {
      const list = []
      const items = document.querySelectorAll('.section-layout h2[id]')
      for (const item of items) {
        list.unshift({
          id: item.id,
          item
        })
      }
      this.list = list
    },
    findActiveIndex () {
      let activeIndex = ''
      const lastIndex = this.list.length - 1
      const offsetFirstSection = this.list[lastIndex].item.offsetTop - 100

      if (offsetFirstSection > this.currentOffset) {
        activeIndex = ''
      } else {
        const list = this.list.slice()
        const index = list.findIndex(item => {
          const offsetParent = item.item
          if (!offsetParent) return false
          return offsetParent.offsetTop - 100 < this.currentOffset
        })

        if (index > -1) {
          activeIndex = list[index].id
          // Check bottom scroll
          const bottomOfWindow = this.currentOffset + getWindowHeight() === getDocumentHeight()
          if (bottomOfWindow && index === 1) activeIndex = list[0].id
        }
      }
      this.$store.commit('activeIndex', activeIndex)
      this.$router.push({ hash: activeIndex })
    },
    onScroll () {
      // Get container scroll position
      this.currentOffset = window.pageYOffset ||
        document.documentElement.offsetTop

      // Add 50 ms delay
      clearTimeout(this.timeout)
      this.timeout = setTimeout(this.findActiveIndex, 50)
    }
  }
}
