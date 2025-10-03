import express from "express";

const router = express.Router();

import authentication from "./system/authentication";
import users from "./system/users";

export default (): express.Router => {
   authentication(router);
   users(router);
   
   return router;
};