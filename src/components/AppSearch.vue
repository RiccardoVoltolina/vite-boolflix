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

        starValueConverter(voteAverage) {
            // con math.ceil ottengo un numero intero, arrotondando sempre verso l' alto
            let starValue = Math.ceil((voteAverage / 10) * 5)
            this.store.starValueArray.push(starValue)
            console.log(this.store.starValueArray);
            return starValue
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


                <img :src="film.backdrop_path ? `https://image.tmdb.org/t/p/w342/${film.backdrop_path} ` : 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/No_immagine_disponibile.svg/768px-No_immagine_disponibile.svg.png'"
                    alt="">

                <!-- operatore ternario -->

                <div>TITOLO: {{ film.title ? film.title : film.name }} </div>

                <!-- operatore nullish solo per valori nulli/ undefinited -->

                <div>TITOLO DEL FILM/SERIE: {{ film.original_title ?? film.original_name }} </div>
                <div>
                    LINGUA:
                    <img class="language_flag" :src="getFlagImage(film)" alt="">

                </div>
                <div>VOTO: {{ film.vote_average }} {{ starValueConverter(film.vote_average) }}
                    <img v-for="(star) in starValueConverter(film.vote_average)" class="star_svg"
                        src="../assets/img_bandiere/star-rate-svgrepo-com.svg" alt="">
                </div>
            </li>

        </ul>
    </div>

    <header>
        <nav>
            <div class="container">
                <div class="row">
                    <div class="d-flex align-items-center justify-content-between">
                        <div class="left_side_header d-flex align-items-center">
                            <img src="../assets/img_bandiere/pngimg.com - netflix_PNG22.png" alt="">
                            <div class="w_470px d-sm-none d-md-block">
                                <input v-model="store.movies" type="text" name="search" id="">
                                <button @click="searchFilms()">CERCA</button>
                            </div>
                            <a class="d-sm-none d-md-none d-lg-block" href="#">Home</a>
                            <a class="d-sm-none d-md-none d-lg-block" href="#">Serie TV</a>
                            <a class="d-sm-none d-md-none d-lg-block" href="#">Nuovi Popolari</a>
                            <a class="d-sm-none d-md-none d-lg-block" href="#">La mia lista</a>
                        </div>
                        <div class="right_side_header d-flex align-items-center">
                            <a class="d-sm-none d-md-none d-lg-block" href="#"><i
                                    class="fa-solid fa-magnifying-glass"></i></a>
                            <a class="d-sm-none d-md-none d-lg-block" href="#">Bambini</a>
                            <a class="d-sm-none d-md-none d-lg-block" href="#">DVD</a>
                            <a class="d-sm-none d-md-none d-lg-block" href="#"><i class="fa-solid fa-bell"></i></a>
                            <img src="./img/Netflix-avatar.png" alt="">
                            <div class="dropdown">
                                <button class="btn dropdown-toggle border-0 text-white" type="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">

                                </button>
                                <ul class="dropdown-menu" style="">
                                    <li class="d-flex align-items-center bg-danger-subtle ps-3"><img
                                            src="./img/Netflix-avatar.png" alt=""> <a class="dropdown-item text-black"
                                            href="#">Riky</a></li>
                                    <li class="d-flex align-items-center ps-3"><img src="./img/Netflix-avatar.png" alt="">
                                        <a class="dropdown-item text-black" href="#">Nimesh</a></li>
                                    <li class="d-flex align-items-center bg-dark-subtle ps-3"><img
                                            src="./img/Netflix-avatar.png" alt=""> <a class="dropdown-item text-black"
                                            href="#">Fabio</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped>

.language_flag {
    width: 30px;
}

.star_svg {
    width: 20px;
}

body a:hover {
    color: red;
}

header {
    height: 80px;
    background-color: black;
}

.left_side_header img {
    height: 80px;
}

.left_side_header a {
    text-decoration: none;
    color: white;
    margin-left: 0.5rem;
}

.right_side_header img {
    height: 30px;
}

nav .w_470px {
    width: 470px;
}

.right_side_header a {
    margin-right: 0.5rem;
    text-decoration: none;
    color: white;
}

/* start main */

main {
    background-color: black;
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


.container_img img {
    width: 100%;
    height: 100%;
}

.film_section img:hover {
    filter: contrast(0.5);
    cursor: pointer;
}

.riga-film {
    height: 150px;
}</style>