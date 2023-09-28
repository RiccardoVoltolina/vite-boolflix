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
        this.store.fetchData()
        
       }
      
    },
  }
</script>

<template>
  <header>
    <input  v-model="store.movies" type="text" @keyup="searchFilms()" name="search" id="">
    <div class="container">
      <ul v-for="(film, i) in this.store.selectedFilm">
        <li>{{ this.store.selectedFilm[i].original_title}}</li>
      </ul>
    </div>
  </header>



</template>

<style lang="scss">
  @use './assets/app'
</style>
