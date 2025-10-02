import express from "express";
import { UserModel } from "../config/models/User";
import { dbConnection } from './../config/database';

const router = express.Router();



router.get("/user/create", async (req, res) => {
   try {
      await dbConnection.connect();
      await UserModel.create({ _id: '1', username: "ana", email: "ana@example.com" });
      await UserModel.create({ _id: '2', username: "bob", email: "bob@example.com" });
      res.status(201).send('users created');
   } catch (error) {
      res.status(500).json({ error: "Internal server error" });
   }
});

export default router;