<template>
  <div class="gb-collection-contentSearch">
    <div class="relative w-full sm:w-96">
      <span class="material-icons absolute top-3 left-3 text-gray-700">search</span>
      <input
        type="text"
        class="gb-input-normal gb-input-normal--gray w-full h-11 pl-12"
        placeholder="Find your pokemon"
        v-model="search"
        @input="SetSearchPokemon(search)"
      />
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "collection-search",

  data() {
    return {
      search: "",
    };
  },

  watch: {
    searchPokemon() {
      if (this.searchPokemon === "") {
        this.search = "";
      }
    },
  },

  computed: {
    ...mapState("collection", ["searchPokemon"]),
  },

  methods: {
    ...mapMutations("collection", ["SetSearchPokemon"]),
  },
};
</script>