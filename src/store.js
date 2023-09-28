import { reactive } from 'vue'
import axios from 'axios'
export const store = reactive({
  base_url: 'https://api.themoviedb.org/3/search/movie?api_key=6e87e9e8ed25b27ad31bd55380aa45ed',
  selectedFilm: '',
  movies: null,
  filmLanguage:null,

  //creo la mia funzione axios 

  fetchData(){
    axios
    //prendo il mio url

    .get(this.base_url)

    //inserisco il valore della mia risposta axios alla mia variabile
    
    .then(response =>{
      this.selectedFilm = response.data.results
    })
},


 
})