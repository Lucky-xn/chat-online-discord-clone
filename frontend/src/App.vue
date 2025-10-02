<template>
  <div>
    <router-view />
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";

let socket;

onMounted(() => {
  socket = new WebSocket("ws://localhost:3000");

  socket.onopen = () => {
    console.log("Conectado ao servidor!");
    socket.send({id: 1, mensagem: 2});
  };

  socket.onmessage = (event) => {
    console.log("Mensagem do servidor:", event.data);
  };

  socket.onclose = () => {
    console.log("Desconectado do servidor.");
  };
});

onUnmounted(() => {
  if (socket) {
    socket.close();
    socket = null;
  }
});
</script>
