<template>
  <div class="relative h-full py-20 bg-gray-50">
    <!-- search head -->
    <search />
    <!-- Dinamic body -->
    <div class="relative h-full px-5 overflow-y-auto">
      <!-- All pokemons -->
      <section v-show="viewSectionPokemons === 1">
        <all />
      </section>
      <!-- favorites pokemons -->
      <section v-show="viewSectionPokemons === 2">
        <favorites />
      </section>
      <!-- No result in search -->
      <template v-if="viewVacuum">
        <vacuum />
      </template>
      <!-- No favorites-->
      <template v-if="viewUnfavorites && !viewVacuum && viewSectionPokemons === 2">
        <unfavorites />
      </template>
    </div>
    <!-- options footer -->
    <options />
    <!-- loading get pokemons -->
    <template v-if="loadingGetPokemons">
      <loader />
    </template>
    <!-- modal specification pokemon -->
    <template v-if="modalSpecificationPokemon">
      <specification />
    </template>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Collection",

  components: {
    loader: () => import("../components/collection/collection-loader.vue"),
    search: () => import("../components/collection/collection-search.vue"),
    all: () => import("../components/collection/collection-all.vue"),
    vacuum: () => import("../components/collection/collection-vacuum.vue"),
    unfavorites: () => import("../components/collection/collection-unfavorites.vue"),
    favorites: () => import("../components/collection/collection-favorites.vue"),
    options: () => import("../components/collection/collection-options.vue"),
    specification: () => import("../components/collection/collection-specification.vue"),
  },

  computed: {
    ...mapState("collection", [
      "loadingGetPokemons",
      "viewSectionPokemons",
      "modalSpecificationPokemon",
      "viewVacuum",
      "viewUnfavorites"
    ]),
  },

  methods: {
    ...mapActions("collection", ["GetPokemons"]),
  },

  created() {
    this.GetPokemons();
  },
};
</script>