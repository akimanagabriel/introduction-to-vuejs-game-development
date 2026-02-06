<template>
  <div>
    <button @click="isHidden = !isHidden">show/hide</button>
    <Game v-if="isHidden" />
  </div>
</template>
<script setup>
import { ref } from "vue";
import Game from "./Game.vue";

const isHidden = ref(false);
</script>
