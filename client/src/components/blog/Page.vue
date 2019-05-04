<template>
  <div v-editable="blok">
    <template v-for="item in blok.body">
      <component :key="item._uid" :blok="item" :is="item.component"></component>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Page',
  props: ['blok']
}
</script>

<style scoped>

</style>
