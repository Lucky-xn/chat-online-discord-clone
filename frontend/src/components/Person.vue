<template>
  <div
    class="flex flex-col border-b border-neutral-700 p-2 gap-2 cursor-pointer hover:bg-neutral-700/50"
  >
    <div class="flex items-center gap-2">
      <img src="" alt="" class="h-7 w-7 border rounded-full" />
      <span class="font-semibold">{{ person }}</span>
    </div>
    <p class="text-gray-500 text-xs ml-4 font-semibold">{{ lastMensage }}</p>
  </div>
</template>

<script setup>
defineProps({
  person: {
    type: String,
    required: true,
  },
  lastMensage: {
    type: String,
    required: true,
  },
});
</script>
