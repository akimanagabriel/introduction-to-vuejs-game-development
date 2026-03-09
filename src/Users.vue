<template>
  <div class="m-10">
    <h1>All Users</h1>
    <table class="w-full">
      <thead class="border">
        <tr class="bg-orange-500 text-white">
          <th class="border py-2">Avatar</th>
          <th class="border">Firstname</th>
          <th class="border">Maiden Name</th>
          <th class="border">Lastname</th>
          <th class="border">Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users">
          <td class="border px-2">
            <img class="h-12" :src="user.image" alt="" />
          </td>
          <td class="border px-2">{{ user.firstName }}</td>
          <td class="border px-2">
            {{ user.maidenName.length == 0 ? "N/A" : user.maidenName }}
          </td>
          <td class="border px-2">{{ user.lastName }}</td>
          <td class="border px-2">{{ user.email }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import users from "./data.json";
</script>
