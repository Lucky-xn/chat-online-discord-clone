import express from 'express';

import { getAllUsers, deleteUser, updadeUser } from '../../controllers/system/usersMethod';

import { isAuthenticated } from '../../middlewares/Auth';
import { isOwner } from '../../middlewares/IsOwner';

export default (router: express.Router) => {
   router.get('/users', isAuthenticated, getAllUsers);
   router.delete('/users/:id', isAuthenticated, isOwner, deleteUser);
   router.patch('/users/:id', isAuthenticated, isOwner, updadeUser);
}