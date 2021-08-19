<template>
  <div class="gb-collection-contentItems">
    <template v-for="(item, i) in localPokemons">
      <div :key="i" class="gb-collection-item">
        <button
          @click.prevent="GetPokemon({ pokemon: item.name, favorite: item.favorite })"
          class="gb-collection-btnItem"
        >
          {{ item.text }}
        </button>
        <!-- Button favorte change -->
        <button
          @click.prevent="SetFavoritePokemon(item.name)"
          class="appearance-none p-4"
        >
          <span class="material-icons text-quartary">
            {{ item.favorite ? "star_rate" : "star_border" }}
          </span>
        </button>
      </div>
    </template>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
export default {
  name: "collection-all",

  computed: {
    ...mapState("collection", ["pokemons", "searchPokemon"]),

    localPokemons() {
      const search = this.searchPokemon.toLowerCase();
      const pokemons = [];

      if (this.pokemons.length > 0) {
        this.pokemons.map((element) => {
          if (element.favorite) {
            this.searchPokemon === ""
              ? pokemons.push(element)
              : element.name.indexOf(search) !== -1
              ? pokemons.push(element)
              : null;
          }
        });
      }

      return pokemons;
    },
  },

  watch:{
    localPokemons(){this.SetViewUnfavorites(this.localPokemons.length > 0 ? false : true)}
  },

  methods: {
    ...mapMutations("collection", ["SetFavoritePokemon", "SetViewVacuum", "SetViewUnfavorites"]),
    ...mapActions("collection", ["GetPokemon"]),
  },

  mounted(){
    this.SetViewUnfavorites(this.localPokemons.length > 0 ? false : true)
  }
};
</script>

<style scoped>
</style>