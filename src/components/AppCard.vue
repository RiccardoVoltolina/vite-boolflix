
<script>
export default {
    name: 'AppCard',
    props: {
        film: Object
    },
    data() {
        return {

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
            return starValue
        },

    }

}
</script>
<template>
    <div class="col-lg-2 col-md-3 col-sm-4 py-2">
        <div class="card card_film position-relative">

            <img class="filmImage"
                :src="film.backdrop_path ? `https://image.tmdb.org/t/p/w342/${film.poster_path} ` : 'https://picsum.photos/164/246'"
                alt="">

            <div class=" position-absolute info_film text-white top-0 bottom-0 start-0 end-0  flex-column justify-content-between">
                <div>
                    <div class=" text-center">{{ film.title ? film.title : film.name }} </div>

                    <!-- operatore nullish solo per valori nulli/ undefinited -->

                    <div class=" py-2">Titolo originale: {{ film.original_title ?? film.original_name }} </div>
                    <div class="d-flex align-items-center">Lingua:

                        <img class="language_flag" :src="getFlagImage(film)" alt="">

                    </div>
                </div>
                <!-- operatore ternario -->


                <div class="d-flex align-items-center">
                    <div v-if="starValueConverter(film.vote_average) > 0">
                        <img v-for="star in starValueConverter(film.vote_average)" id="star_svg"
                            src="../assets/img/starValue.svg" alt="">
                    </div>
                    <div class="d-flex" v-else>
                        <img class="star_plane" src="https://www.svgrepo.com/show/172818/star-outline.svg" alt="">
                        <img class="star_plane" src="https://www.svgrepo.com/show/172818/star-outline.svg" alt="">
                        <img class="star_plane" src="https://www.svgrepo.com/show/172818/star-outline.svg" alt="">
                        <img class="star_plane" src="https://www.svgrepo.com/show/172818/star-outline.svg" alt="">
                        <img class="star_plane" src="https://www.svgrepo.com/show/172818/star-outline.svg" alt="">
                    </div>
                </div>

            </div>
        </div>



    </div>
</template>

<style lang="scss" scoped>
.card_film:hover .filmImage {
    filter: contrast(0.5);
}

.card_film:hover .info_film {
    cursor: pointer;
    display: flex;
}

.info_film {
    display: none;

}

.star_plane {
    width: 10px;
}
</style>