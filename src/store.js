import { reactive } from 'vue'
import axios from 'axios'
export const store = reactive({
  base_urlN: 'https://api.themoviedb.org/3/search/multi?',
  base_url: 'https://api.themoviedb.org/3/search/movie?api_key=6e87e9e8ed25b27ad31bd55380aa45ed',
  // https://api.themoviedb.org/3/search/movie?api_key=6e87e9e8ed25b27ad31bd55380aa45ed&query=aa
  // https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&query=scrubs
  api_key: '6e87e9e8ed25b27ad31bd55380aa45ed',
  selectedFilm: '',
  movies: null,
  filmLanguage:null,
  starValueArray:[],
  singleLanguage: [],

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