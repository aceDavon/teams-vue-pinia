import { defineStore } from 'pinia'

export const useStore = defineStore('teams', {
  state() {
   return {
     name: "",
     limit: 0,
     members: [],
   };
  },
  actions: {
    async fill() {
      const data = await import('./TeamStore.json');

      this.$state = data.default;
    }
  }
})