<template>
  <div class="m-10 flex gap-5">
    <button
      @click="currentPage = 'recipes'"
      class="text-white bg-orange-700 px-6 py-1 rounded"
    >
      Recipes
    </button>
    <button
      @click="currentPage = 'users'"
      class="text-white bg-orange-700 px-6 py-1 rounded"
    >
      Users
    </button>
  </div>

  <!-- users table -->

  <div v-if="currentPage == 'users'">
    <Users />
  </div>

  <!-- recipes -->
  <div v-if="currentPage == 'recipes'" class="m-10">
    <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
      <!-- single recipe -->
      <div class="shadow-xl p-5 rounded-xl" v-for="recipe in recipes">
        <img class="rounded-xl" loading="lazy" :src="recipe.image" alt="" />
        <h1 class="line-clamp-1 text-orange-500 font-bold my-3 text-3xl">
          {{ recipe.name }}
        </h1>

        <!-- tags -->
        <div class="grid grid-cols-3 gap-3">
          <div
            class="px-4 py-1 bg-orange-100 text-orange-800 rounded-full line-clamp-1 text-center"
            v-for="tag in recipe.tags"
          >
            {{ tag }}
          </div>
        </div>

        <h3 class="font-bold underline mb-4">Instructions</h3>
        <ol>
          <li class="my-1 line-clamp-1" v-for="(rule, i) in recipe.instructions">
            {{ i + 1 }}. {{ rule }}
          </li>
        </ol>

        <h3 class="font-bold underline mb-4">Ingredients</h3>
        <ol>
          <li class="my-1 line-clamp-1" v-for="(rule, i) in recipe.ingredients">
            {{ i + 1 }}. {{ rule }}
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import Users from "./Users.vue";

const recipes = ref([]);
const currentPage = ref("users");

onMounted(() => {
  // calling api
  axios.get("https://dummyjson.com/recipes").then((response) => {
    recipes.value = response.data.recipes;
    console.log(recipes.value);
  });
});
</script>
