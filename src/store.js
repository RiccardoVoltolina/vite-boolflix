import { reactive } from 'vue'
import axios from 'axios'
export const store = reactive({
  base_url: 'https://api.themoviedb.org/3/search/movie?api_key=6e87e9e8ed25b27ad31bd55380aa45ed',
  selectedFilm: '',
  movies: [],
 


 
})