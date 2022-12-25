<script setup>
import Team from "@/components/Team.vue";
import { ref } from "vue";
import { useStore } from "../store/Sore";
import Modal from "./Modal.vue";

const TeamStore = useStore();

TeamStore.fill();

const modalShow = ref(false);
</script>

<template>
  <div class="flex flex-col gap-2 px-2 py-6">
    <div class="lg:flex justify-between items-center">
      <button
        :disabled="TeamStore.members.length == TeamStore.limit"
        class="bg-blue-400 text-white text-sm capitalze p-2 rounded-md"
        @click="modalShow = true"
      >
        Add Member ({{ TeamStore.limit - TeamStore.members.length }}) Slots
        remaining
      </button>
      <p class="text-xl font-bold text-green-500 text-center mt-4 lg:mt-0 lg:border-0 border-b border-b-3 border-b-green-500 lg:text-right">{{ TeamStore.name }}</p>
      <Modal :show="modalShow">
        <template #header>Add new Members to Team</template>
        <template #default>
          <form action="#">
            <div class="flex gap-2 my-2">
              <input
                type="text"
                class="flex-1 px-2 py-1 rounded"
                placeholder="Email address..."
              />
              <button>Add</button>
            </div>
          </form>
        </template>
        <template #footer>
          <button class="bg-gray-600 px-2 py-1 text-white rounded-md" @click="modalShow = false">
            close
          </button>
        </template>
      </Modal>
    </div>
    <Team />
    <span class="italic text-right capitalize">
      there are {{ TeamStore.limit - TeamStore.members.length }} slots remaining
      out of {{ TeamStore.limit }}
    </span>
  </div>
</template>
