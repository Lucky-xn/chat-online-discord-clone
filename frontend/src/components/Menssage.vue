<template>
  <div class="flex gap-2 p-2">
    <img src="" alt="" class="h-10 w-10 rounded-full border" />
    <div class="flex flex-1 flex-col">
      <span class="font-semibold">{{ person }}</span>
      <span>{{ mensage }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  person: {
    type: String,
    required: true,
  },
  mensage: {
    type: String,
    required: true,
  },
});
</script>
