<template>
  <div class="flex w-screen">
    <div class="flex flex-col justify-between w-100 h-screen border-r border-neutral-700">
      <div
        class="flex items-center justify-center py-3 border-b border-neutral-700 font-bold"
      >
        Mensagems
      </div>
      <div class="flex-1 overflow-y-auto">
        <Person :person="'Pessoa'" :last-mensage="'Eae meu querido como que tu ta?'" />
      </div>
      <div class="px-2 py-4 h-17 border-t border-neutral-700">
        <Profile />
      </div>
    </div>
    <ChatWindow :person="'Person'" />
  </div>
</template>

<script setup>
import Person from "./Person.vue";
import ChatWindow from "./ChatWindow.vue";
import Profile from "./Profile.vue";
</script>
