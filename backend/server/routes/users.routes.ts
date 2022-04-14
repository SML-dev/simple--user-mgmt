import {Router} from 'express';
import {getAllUsers, addUser, getOneUser, removeUser, updateUser} from '../controllers/user.controller';

export const usersRouter = Router();

usersRouter
    .get('/api/users', getAllUsers)
    .post('/api/users/', addUser)
    .get('/api/users/:id', getOneUser)
    .delete('/api/users/:id', removeUser)
    .put('/api/users/:id', updateUser);

