<template>
  <nav>
  <router-link to="/home">Home</router-link>  | 
  <router-link to="/info">Info</router-link>
  </nav>
  <RouterView />
</template>

<script setup>
import { RouterView } from "vue-router";
</script>
