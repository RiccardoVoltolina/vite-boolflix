<script>
  import  {store}  from './store.js';
  import axios from 'axios'
  export default {
    data() {
      return {
        store,
      }
    },
    created() {
      store.fetchData();
    },
    methods: {
      searchFilms() {
        this.store.base_url = this.store.base_url + `&query=${store.movies}`
        console.log(this.store.base_url);
        console.log(store.fetchData());
       }
      
    },
  }
</script>

<template>
  <header>
    <input  v-model="store.movies" type="text" @keyup="searchFilms()" name="search" id="">
  </header>



</template>

<style lang="scss">
  @use './assets/app'
</style>
