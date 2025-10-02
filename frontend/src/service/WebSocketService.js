import { ref } from "vue";

export const state = ref({
   isConnected: false,
   messages: [],
})

let socket = null;

export const connect = () => {
   if (socket && socket.readyState === WebSocket.OPEN) {
      return;
   }

   socket = new WebSocket('ws://localhost:8080');

   socket.onopen = () => {
      console.log('Conexão WebSocket estabelecida com sucesso!');
      state.isConnected = true;
   }

   socket.onmessage = (event) => {
      console.log('mensagem Vinda do servidor:', event.data);

      const message = JSON.parse(event.data);
      state.messages.push(message);
   }

   socket.onclose = () => {
      console.log('Conexão WebSocket Fechada!');
      state.isConnected = false;
   }

   socket.onerror = (err) => {
      console.log('Erro na conexão WebSocket!', err);
      state.isConnected = false;
   };
};

export const disconect = () => {
   if (socket) {
      socket.close();
   }
} 