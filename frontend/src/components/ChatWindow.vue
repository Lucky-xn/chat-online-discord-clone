<template>
  <div class="flex flex-col justify-between w-[100%]">
    <div class="flex items-center p-2 font-bold gap-2 border-b border-neutral-700 w-full">
      <img src="" alt="" class="border h-10 w-10 rounded-full" />
      <span>{{ person }}</span>
    </div>
    <div class="flex flex-col flex-1 justify-end">
      <Menssage :person="'Person'" :mensage="'Eae meu querido como que tu ta?'" />
    </div>
    <div class="border-t border-neutral-700 p-3 h-17">
      <InputTextMenssage />
    </div>
  </div>
</template>

<script setup>
import Menssage from "./Menssage.vue";
import InputTextMenssage from "./InputTextMenssage.vue";

defineProps({
  person: {
    type: String,
    required: true,
  },
});
</script>
