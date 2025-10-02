import express from "express";
import { createServer } from "http";
import WebSocket from "ws";

import { startApp } from "./config/server";

const app = express();
const server = createServer(app);
const port = 3000;

const wss = new WebSocket.Server({ server });

startApp();

app.get("/", (req, res) => {
   res.send("hello");
});

wss.on("connection", (ws) => {
   console.log("Cliente conectado");
   ws.send("oioi");


   ws.on("message", (message) => {
      console.log(`Mensagem recebida: ${message}`);

      wss.clients.forEach((client) => {
         if (client !== ws && client.readyState === WebSocket.OPEN) {
            client.send(String(message));
         }
      });

   });

   ws.on("close", () => {
      console.log("Um cliente se desconectou");
   });
});

server.listen(port, () => {
   console.log(`Servidor rodando na porta ${port}`);
});
