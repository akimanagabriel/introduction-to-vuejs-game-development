<template>
  <div v-for="item in products">
    <img height="200" :src="item.image" alt="" />
    <h1>{{ item.title }}</h1>
    <p>{{ item.description }}</p>
    <hr />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import api from "./axios_config";

const products = ref([]);

onMounted(() => {
  api.get("/products").then((res) => {
    products.value = res.data;
  });
});
</script>
