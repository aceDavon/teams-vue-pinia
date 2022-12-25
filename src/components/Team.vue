<script setup>
import { useStore } from "../store/Sore";

const teams = useStore();
</script>

<template>
  <div
    v-for="team in teams.members"
    class="rounded-md shadow-md bg-bray-500 p-4 mx-auto w-full flex justify-between items-center"
  >
    <div class="flex gap-2 items-center">
      <img
        class="w-28 rounded-lg"
        :src="`https://i.pravatar.cc/50?u=${team.email}`"
        :alt="`${team.email}'s-img'`"
      />
      <span class="text-xl">{{ team.name }}</span>
    </div>
    <span class="text-green-600">{{ team.status }}</span>
  </div>
</template>
