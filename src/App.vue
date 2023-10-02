<script>
  import { store } from './store.js';

/*   import AppSearch from './components/AppSearch.vue';
 */  import AppHeader from './components/AppHeader.vue';
  export default {
    name: 'App',
    data() {
        return {
            store,
            flags: [{
                img: "src/assets/img_bandiere/france_flags_flag_16999.png",
                language: 'fr',
            },
            {
                img: "src/assets/img_bandiere/italy_flags_flag_17018.png",
                language: 'it',
            },
            {
                img: "src/assets/img_bandiere/spain_flags_flag_17068.png",
                language: 'es',
            },
            {
                img: "src/assets/img_bandiere/united_kingdom_flags_flag_17079.png",
                language: 'en',
            },
            ]
        }
    },
    created() {
        store.fetchData();
    },
    methods: {


        /**
         * questa funzione prende l' immagine della bandiera
         * @param  singleFilm 
         * @return url flag image
         */
        getFlagImage(singleFilm) {

            let languageValue = singleFilm.original_language
            console.log(languageValue);

            let findLanguage = 'https://banner2.cleanpng.com/20180408/rxe/kisspng-emoji-globe-world-globe-5aca7ccb80dca7.1142281915232196595278.jpg'

            this.flags.forEach(flag => {
                if (flag.language === languageValue) {
                    //se è stato trovato riassegno a film.original_language il valore dell' img desiderata
                    findLanguage = flag.img
                }
            });

            return findLanguage


        },

        starValueConverter(voteAverage) {
            // con math.ceil ottengo un numero intero, arrotondando sempre verso l' alto
            let starValue = Math.ceil((voteAverage / 10) * 5)
            this.store.starValueArray.push(starValue)
            console.log(this.store.starValueArray);
            return starValue
        },

    },
    components: {
      /* AppSearch,*/
      AppHeader 
    },
  }
</script>

<template>
  <!-- <AppSearch/> -->
<AppHeader/>
    <main>
        <div class="container">
            <div class="d-flex justify-content-between pt-4">
                <div>
                    <h2 class="text-white">Insieme per il nostro pianeta</h2>
                </div>
                <div class="d-flex align-items-center">
                    <div class="dropdown d-sm-none d-md-none d-lg-block">
                        <button id="border_1" class="btn  dropdown-toggle gray" type="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                        </button>
                        <ul class="dropdown-menu" style="">
                            <li><a class="dropdown-item" href="#">Azione</a></li>
                            <li><a class="dropdown-item" href="#">Avventura</a></li>
                            <li><a class="dropdown-item" href="#">Horror</a></li>
                        </ul>
                    </div>
                    <div class="dropdown border_1">
                        <button class="btn d-flex align-items-center text-white dropdown-toggle border-0" type="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fa-solid fa-bars pe-3 text-white"></i>
                            <div class="pe-3 text-white">Suggerimenti per te</div>
                        </button>
                        <ul class="dropdown-menu" style="">
                            <li><a class="dropdown-item" href="#">Film</a></li>
                            <li><a class="dropdown-item" href="#">Serie tv</a></li>
                            <li><a class="dropdown-item" href="#">Anime</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="container film_section bg-black">
            <div class="row mt-4">
                <div v-for="(film) in this.store.selectedFilm" class="col-lg-2 col-md-3 col-sm-4 py-2">
                        <div class="card position-relative">

                                <img class="filmImage" :src="film.backdrop_path ? `https://image.tmdb.org/t/p/w342/${film.poster_path} ` : 'https://picsum.photos/164/246'"
                                    alt="">
                            
                            <div class="d-none position-absolute info_film">
                                <!-- operatore ternario -->
    
                                <div>TITOLO: {{ film.title ? film.title : film.name }} </div>
    
                                <!-- operatore nullish solo per valori nulli/ undefinited -->
    
                                <div>TITOLO DEL FILM/SERIE: {{ film.original_title ?? film.original_name }} </div>
                                <div>
                                    LINGUA:
                                    <img class="language_flag" :src="getFlagImage(film)" alt="">
    
                                </div>
                                <div>VOTO: {{ film.vote_average }} {{ starValueConverter(film.vote_average) }}
                                    <img id="star_svg"
                                    src="../assets/img_bandiere/star-rate-svgrepo-com.svg" alt="">
                                </div>
    
                            </div>
                        </div>

                    

                </div>
            </div>
        </div>

    </main>

</template>

<style lang="scss">
 @use './assets/app';


/* start main */


main {
    background-color: black;
    height: 100%;

}

/* insieme per il nostro pianeta */

.gray {
    color: gray;
}

.border_1 {
    border: 1px solid white;
    border-radius: 0;
}

#border_1 {
    border: 1px solid gray;
    border-radius: 0;
}

/* film section */


.filmImage {
    width: 100%;
    height: 100%;
}


.film_section img:hover + .info_film {
    filter: contrast(0.5);
    cursor: pointer;
    display: block;
}

#star_svg {
    width: 10px;
}
.language_flag {
    width: 10px;
}


 
</style>
