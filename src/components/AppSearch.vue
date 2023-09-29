<script>
import { store } from '../store.js';
export default {
    name: 'AppSearch',
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

        searchTvSeries() {
            
        },

        //al click stampo i risultati filtrati

        searchFilms() {

            //cambio il mio url dinamicamente
            this.store.base_url = `${this.store.base_urlN}api_key=e99307154c6dfb0b4750f6603256716d&query=${store.movies}`
            this.store.fetchData()
        }


    },



}
</script>
<template>
    <input v-model="store.movies" type="text" name="search" id="">
    <button @click="searchFilms()">CERCA IL TUO FILM</button>
    <div class="container">
        <ul>
            <li v-for="(film) in this.store.selectedFilm" class="d-flex flex-column">

                
                <img :src="film.backdrop_path ? `https://image.tmdb.org/t/p/w342/${film.backdrop_path} ` : 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/No_immagine_disponibile.svg/768px-No_immagine_disponibile.svg.png'" alt="">
                
                <!-- operatore ternario -->

                <div>TITOLO: {{ film.title ? film.title : film.name }} </div>

                <!-- operatore nullish solo per valori nulli/ undefinited -->

                <div>TITOLO DEL FILM/SERIE: {{ film.original_title ?? film.original_name }} </div>
                <div>
                    LINGUA:
                    <img class="language_flag" :src="getFlagImage(film)" alt="">

                </div>
                 <div>VOTO: {{ film.vote_average }}</div>
            </li>

        </ul>
    </div>
</template>

<style lang="scss" scoped>

img {
    width: 500px;
}
.language_flag {
    width: 30px;
}

</style>