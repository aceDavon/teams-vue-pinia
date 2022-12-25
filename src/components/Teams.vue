<script setup>
import Team from "@/components/Team.vue";
import { useStore } from "../store/Sore";

const TeamStore = useStore();

TeamStore.fill();
</script>

<template>
  <div class="flex flex-col gap-2 px-2 py-6">
    <div class="flex justify-between items-center">
      <button
        :disabled="TeamStore.members.length == TeamStore.limit"
        class="bg-blue-400 text-white text-sm capitalze p-2 rounded-md"
      >
        Add Member ({{ TeamStore.limit - TeamStore.members.length }}) Slots
        remaining
      </button>
      <span class="text-xl font-bold text-green-500">{{ TeamStore.name }}</span>
    </div>
    <Team />
    <span class="italic text-right capitalize">
      there are {{ TeamStore.limit - TeamStore.members.length }} slots remaining
      out of {{ TeamStore.limit }}
    </span>
  </div>
</template>
