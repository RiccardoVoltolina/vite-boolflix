<script>
import { store } from './store.js';

import AppHeader from './components/AppHeader.vue';
import AppCard from './components/AppCard.vue';
export default {
  name: 'App',
  data() {
    return {
      store,
      
    }
  },
  created() {
    store.fetchData();
  },
  methods: {
  },
  components: {
    AppHeader,
    AppCard,
  },
}
</script>

<template>
  <AppHeader />
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
        <!-- cards section -->
        <AppCard :film='film'  v-for="(film) in this.store.selectedFilm"/>

      </div>
    </div>

  </main>
</template>

<style lang="scss">
@use './assets/app';




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



#star_svg {
  width: 10px;
}

.language_flag {
  width: 20px;
  height: 20px;
}
</style>
