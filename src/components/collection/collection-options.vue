<template>
  <div class="gb-collection-contentOptions">
    <div class="gb-flex-center w-full">
      <template v-for="(item, i) in options">
        <button
          :key="i"
          :class="`
           gb-collection-btnOptions
            ${
              item.section === viewSectionPokemons
                ? 'gb-btn-normal--tertiary'
                : 'gb-btn-normal--gray'
            }
           ${item.section === 1 ? ' rounded-r-none' : 'rounded-l-none'}`"
          @click.prevent="SetViewSectionPokemons(item.section)"
        >
          <span class="material-icons mr-2.5"> {{ item.icon }} </span>
          {{ item.name }}
        </button>
      </template>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: "collection-options",

  data() {
    return {
      options: [
        { name: "All", section: 1, icon: "view_list" },
        { name: "Favorites", section: 2, icon: "star" },
      ],
    };
  },

  computed: {
    ...mapState("collection", ["viewSectionPokemons"]),
  },

  methods: {
    ...mapMutations("collection", ["SetViewSectionPokemons"]),
  },
};
</script>