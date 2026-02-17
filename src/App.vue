<template>
  <nav class="navbar navbar-expand-lg bg-primary">
    <router-link style="color: white" to="/home">Home</router-link> |
    <router-link style="color: white" to="/info">Info</router-link>
  </nav>
  <RouterView />
</template>

<script setup>
import { RouterView } from "vue-router";
</script>
