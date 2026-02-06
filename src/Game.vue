<template>
  <h1>TICTAC GAME</h1>

  <!-- tictac board -->
  <div class="container">
    <div class="square" v-for="cell in 9"></div>
  </div>

  <ol>
    <li v-for="name in names">{{ name }}</li>
  </ol>
</template>

<style scoped>
.square {
  border: 2px grey solid;
}
.square:nth-child(even) {
  background-color: teal;
}

.container {
  height: 200px;
  width: 200px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
  border: 5px solid orangered;
  padding: 2px;
}
</style>

<script setup>
import { onBeforeUnmount, onMounted } from "vue";

const names = [
  "Japhet",
  "Johan",
  "Joanna",
  "Jean",
  "Jules",
  "Junior",
  "Caella",
  "Hertier",
];

onBeforeUnmount(() => {
  alert("you are going to hide the board");
});

onMounted(() => {
  console.log("component is going to be mounted");
});
</script>
