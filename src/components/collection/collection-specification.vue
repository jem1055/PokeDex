<template>
  <div class="gb-modal">
    <div class="gb-collection-contentSpecification">
      <!-- image head -->
      <div class="absolute top-0 left-0 w-full h-48 rounded-t-2xl">
        <img
          src="@/assets/img/bgSpecification.png"
          alt="bgSpecification"
          class="gb-cover object-cover rounded-t-2xl"
        />
        <img
          :src="pokemon.img"
          :alt="pokemon.name"
          class="gb-absolute-center h-36 w-auto"
        />
        <button
          @click.prevent="SetModalSpecificationPokemon(false)"
          class="appearance-none absolute top-3 right-3"
        >
          <span class="material-icons text-3xl text-white">highlight_off</span>
        </button>
      </div>
      <!-- information body -->
      <div class="px-4 py-7">
        <template v-for="(item, i) in localInformation">
          <div :key="i" class="flex py-3 border-b-2 border-gray-200">
            <h3 class="mr-auto text-sm font-medium">{{ item.title }}:</h3>
            <h3 class="text-sm">{{ item.value }}</h3>
          </div>
        </template>
      </div>
      <!-- information footer -->
      <div class="gb-flex-center p-4">
        <button
          @click.prevent="SharePokemon()"
          class="gb-btn-normal gb-btn-normal--tertiary h-11 mr-auto text-sm"
        >
          Share to my friend
        </button>
        <span
          v-if="pokemon.favorite"
          class="material-icons text-3xl text-quartary animate-pulse"
        >
          star_rate
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "collection-specification",

  computed: {
    ...mapState("collection", ["pokemon"]),

    localInformation() {
      let information = [];

      if (this.pokemon !== "") {
        information = [
          { title: "Name", value: this.pokemon.name },
          { title: "Weight", value: this.pokemon.weight },
          { title: "Height", value: this.pokemon.height },
          { title: "Types", value: this.pokemon.types.toString() },
        ];
      }

      return information;
    },
  },

  methods: {
    ...mapMutations("collection", ["SetModalSpecificationPokemon"]),

    SharePokemon() {
      const info = this.localInformation;
      const board = `${info[0].value}, ${info[1].value}, ${info[1].value}`;
      this.$clipboard(board);
      alert(`Ready to share ${info[0].value}`);
    },
  },
};
</script>