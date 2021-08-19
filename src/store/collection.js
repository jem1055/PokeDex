/* eslint-disable */
import vue from "vue";
import vuex from "vuex";

// Axios import
const axios = require('axios');

vue.use(vuex);

export default {
    namespaced: true,

    state: {
        loadingGetPokemons: true,
        pokemons: [],
        viewSectionPokemons: 1,
        searchPokemon: "",
        modalSpecificationPokemon: false,
        pokemon: {},
        viewVacuum: false,
        viewUnfavorites: false,
    },

    mutations: {

        SetLoadingGetPokemons: (state, payload) => (state.loadingGetPokemons = payload),
        SetPokemons: (state, payload) => (state.pokemons = payload),
        SetViewSectionPokemons: (state, payload) => (state.viewSectionPokemons = payload),
        SetSearchPokemon: (state, payload) => (state.searchPokemon = payload),
        SetModalSpecificationPokemon: (state, payload) => (state.modalSpecificationPokemon = payload),
        SetPokemon: (state, payload) => (state.pokemon = payload),
        SetViewUnfavorites: (state, payload) => (state.viewUnfavorites = payload),
        SetViewVacuum: (state, payload) => (state.viewVacuum = payload),
        // Change value favorite on pokemon
        SetFavoritePokemon: (state, payload) => {
            state.pokemons.map(element => {
                if (element.name === payload) {
                    return element.favorite = !element.favorite
                }
            });
        },

    },

    actions: {

        // Get all pokemon collection
        async GetPokemons({ commit }) {

            commit("SetLoadingGetPokemons", true)

            try {

                const res = await axios.get("https://pokeapi.co/api/v2/pokemon")
                const data = res.data.results

                const pokemons = data.map(element => {
                    return {
                        text: element.name.charAt(0).toUpperCase() + element.name.slice(1),
                        name: element.name,
                        favorite: false
                    }
                });
                commit("SetPokemons", pokemons)

            } catch (error) {

                alert(error)

            } finally {

                setTimeout(() => {
                    commit("SetLoadingGetPokemons", false)
                }, 3000);

            }

        },

        // Get one pokemon
        async GetPokemon({ commit }, payload) {

            try {

                const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${payload.pokemon}`)
                const data = res.data

                const pokemon = {
                    name: data.name.charAt(0).toUpperCase() + data.name.slice(1),
                    weight: data.weight,
                    height: data.height,
                    favorite: payload.favorite,
                    img: data.sprites.other.dream_world.front_default
                }
                pokemon.types = data.types.map((element) => {
                    return ` ${element.type.name}`
                })

                commit("SetPokemon", pokemon)
                commit("SetModalSpecificationPokemon", true)

            } catch (error) {

                alert(error)
            }
        }
    }
}