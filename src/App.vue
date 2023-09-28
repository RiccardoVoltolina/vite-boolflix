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
    <input  v-model="store.movies" type="text" name="search" id="">
    <button @click="searchFilms()">CERCA IL TUO FILM</button>
    <div class="container">
      <ul v-for="(film, i) in this.store.selectedFilm">
        <li class="d-flex flex-column">
          <div>TITOLO: {{ this.store.selectedFilm[i].title }}</div>
          <div>TITOLO DEL FILM: {{ this.store.selectedFilm[i].original_title}}</div>
          <div>LINGUA: {{ this.store.selectedFilm[i].original_language }}</div>
          <div>VOTO: {{ this.store.selectedFilm[i].vote_average }}</div>
        </li>

      </ul>
    </div>
  </header>



</template>

<style lang="scss">
  @use './assets/app'
</style>
