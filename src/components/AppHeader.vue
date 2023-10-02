
<script>
import { store } from '../store.js';

export default {
    name: 'AppHeader',
    data() {
        return {
            store,
        }
    },
    methods: {
        //al click stampo i risultati filtrati

        searchFilms() {

            //cambio il mio url dinamicamente
            this.store.base_url = `${this.store.base_urlN}api_key=e99307154c6dfb0b4750f6603256716d&query=${store.movies}`
            this.store.fetchData()
        }
    }
}
</script>

<template>
    <header>
        <nav>
            <div class="container">
                <div class="row">
                    <div class="d-flex align-items-center justify-content-between">
                        <div class="left_side_header d-flex align-items-center">
                            <img src="../assets/img/logoNetflix.png" alt="">
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
                            <img src="../assets/img/Netflix-avatar.png" alt="">
                            <div class="dropdown">
                                <button class="btn dropdown-toggle border-0 text-white" type="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">

                                </button>
                                <ul class="dropdown-menu" style="">
                                    <li class="d-flex align-items-center bg-danger-subtle ps-3"><img
                                            src="../assets/img/Netflix-avatar.png" alt=""> <a class="dropdown-item text-black"
                                            href="#">Riky</a></li>
                                    <li class="d-flex align-items-center ps-3"><img src="../assets/img/Netflix-avatar.png" alt="">
                                        <a class="dropdown-item text-black" href="#">Nimesh</a>
                                    </li>
                                    <li class="d-flex align-items-center bg-dark-subtle ps-3"><img
                                            src="../assets/img/Netflix-avatar.png" alt=""> <a class="dropdown-item text-black"
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
</style>