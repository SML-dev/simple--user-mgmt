import {User} from '../records/User.record';
import {Request,Response} from 'express';

export const removeUser = async (req: Request, res:Response) => {
    const user = await User.getOne(req.params.id);
    await user.remove();
    res.json(`Successful delete user ${user.name}.`)
};

export const updateUser = async (req:Request, res:Response) => {
    const user = await User.getOne(req.params.id);
    user.name = req.body.name;
    user.email = req.body.email;
    user.contact = req.body.contact;
    await user.update();
    res.json(`User with ID ${user.id} updated successfully.`)
};

export const getOneUser = async (req:Request, res:Response) => {
    const result = await User.getOne(req.params.id);
    res.json({result}) ;
};

export const addUser = async (req:Request, res:Response) => {
    const newUser = new User(req.body);
    await newUser.create();
    res.json(`Successful add user ${newUser.name}`)
};

export const getAllUsers = async (req:Request, res:Response) => {
    const result = await User.usersList();
    res.json({result});
}

