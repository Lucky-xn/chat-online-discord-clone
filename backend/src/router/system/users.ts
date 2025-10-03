import express from 'express';

import { getAllUsers, deleteUser, updadeUser } from '../../controllers/system/usersMethod';

import { isAutenticated } from '../../middlewares/Auth';
import { isOwner } from '../../middlewares/IsOwner';

export default (router: express.Router) => {
   router.get('/users', isAutenticated, getAllUsers);
   router.delete('/users/:id', isAutenticated, isOwner, deleteUser);
   router.patch('/users/:id', isAutenticated, isOwner, updadeUser);
}