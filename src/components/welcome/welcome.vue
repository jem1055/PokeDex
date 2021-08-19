<template>
  <div class="w-full md:w-1/2 text-center">
    <!-- Pokemon image -->
    <div group class="relative h-40 mb-5">
      <div
        class="gb-absolute-center h-40 w-40 rounded-full bg-tertiary shadow"
      />
      <img
        src="@/assets/img/pokemon.svg"
        alt="Pokemon"
        class="gb-absolute-x-center -bottom-2.5 left-3.5 h-52"
      />
    </div>
    <!-- Title main -->
    <h1 class="mb-3 text-2xl text-gray-800 font-semibold">
      Welcome to Pokédex
    </h1>    
    <p class="mb-6">
      The digital encyclopedia created by Professor Oak is an invaluable tool to
      Trainers in the Pokémon world..
    </p>
    <!-- Next collection button -->
    <router-link
      :to="{ name: 'Collection' }"
      tag="button"
      class="gb-btn-normal gb-btn-normal--tertiary h-12"
      >Get started</router-link
    >
  </div>
</template>

<script>
export default {
  name: "welcome",
};
</script>