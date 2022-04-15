import {UserEntity} from '.';

export type CreateUserName = Pick<UserEntity, 'name'>
export type CreateUserEmail = Pick<UserEntity, 'email'>
export type CreateUserContact = Pick<UserEntity, 'contact'>

export type CreateUserReq = Omit<UserEntity,'id'>
