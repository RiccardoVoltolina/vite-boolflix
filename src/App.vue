<script>
  import AppSearch from './components/AppSearch.vue';
  import axios from 'axios'
  export default {
    name: 'App',
    data() {
      return {
      }
    },
    components: {
      AppSearch
    },
  }
</script>

<template>
  <AppSearch/>
</template>

<style lang="scss">

  @use './assets/app'
</style>
