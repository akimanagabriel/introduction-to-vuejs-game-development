<template>
  <div class="profiles">
    <div class="card">
        <img height="100" v-bind:src="picture" alt="" />
      <h1>{{ names }}</h1>
      <small>{{ email }}</small>
      <button>{{ btnText }}</button>
    </div>
  </div>
</template>

<script setup>
const { picture, names, email, btnText } = defineProps([
  "picture",
  "names",
  "email",
  "btnText",
]);
</script>

<style>
.profiles {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}

.card {
  padding: 10px;
}
</style>
