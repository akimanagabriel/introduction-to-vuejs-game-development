<script setup>
import { onUpdated, ref } from "vue";

const name = ref("");
// https://github.com/akimanagabriel/introduction-to-vuejs-game-development
const students = ref(["Roger", "Caella", "Kylo", "Muhire", "Aime"]);

onUpdated(function () {
  //   console.log("The state is changedn to ", name.value);
  if (name.value.length !== 0) {
    students.value = students.value.filter((student) =>
      student.toLowerCase().includes(name.value.toLowerCase())
    );
  } else {
    students.value = ["Roger", "Caella", "Kylo", "Muhire", "Aime"];
  }
});
// onUpdated(()=>{})
</script>

<template>
  <input type="text" v-model="name" />
  <h1>Hello {{ name }}</h1>
  <hr />
  <ul>
    <li v-for="std in students">{{ std }}</li>
  </ul>
</template>
