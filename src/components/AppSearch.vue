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
            {
                img: 'https://e7.pngegg.com/pngimages/713/101/png-clipart-question-mark-question-mark.png',
                language: 'unknown'
            }
            ]
        }
    },
    created() {
        store.fetchData();
    },
    methods: {



        takeLanguageValue(i) {

            let languageValue = this.store.selectedFilm[i].original_language
            this.flags.forEach(flag => {
                this.store.singleLanguage = flag
                console.log(this.store.singleLanguage);
                
                
                
            });
           

            return languageValue
        },

        //al click stampo i risultati filtrati

        searchFilms() {

            //cambio il mio url dinamicamente

            this.store.base_url = this.store.base_url + `&query=${store.movies}`
            console.log(this.store.movies);
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
            <li v-for="(film, i) in this.store.selectedFilm" class="d-flex flex-column">
                <div>TITOLO: {{ this.store.selectedFilm[i].title }}</div>
                <div>TITOLO DEL FILM: {{ this.store.selectedFilm[i].original_title }}</div>
                <div>LINGUA: {{ this.store.selectedFilm[i].original_language }}</div>
                <div>{{ takeLanguageValue(i) }}</div>
                <div>VOTO: {{ this.store.selectedFilm[i].vote_average }}</div>
            </li>

        </ul>
    </div>
</template>

<style lang="scss" scoped>
img {
    width: 30px;
}
</style>