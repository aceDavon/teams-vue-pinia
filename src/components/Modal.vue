<script setup>
defineProps({
  show: Boolean,
});
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-from-class="opacity-0"
      enter-active-class="transition delay-500 scale-125"
      leave-active-class="transition delay-300 scale-125"
      leave-to-class="opacity-0"
    >
      <div class="fixed inset-0 grid place-items-center modal-mask" v-if="show">
        <div
          class="bg-white rounded w-8/12 max-w-md p-2 text-left space-y-4 text-gray-600"
        >
          <slot name="header"></slot>
          <slot></slot>
          <slot name="footer"></slot>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style>
.modal-mask {
  background-color: rgba(0, 0, 0, 0.65);
  z-index: 999;
}
</style>
