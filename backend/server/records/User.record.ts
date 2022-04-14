import {v4 as uuid} from 'uuid';
import {pool} from '../utils/db';
import {ValidationError} from '../utils/error';
import {UserEntity} from '../types';
import {FieldPacket} from 'mysql2';

type UserRecordResult = [User[], FieldPacket[]];

export class User implements UserEntity {
    id?: string;
    name: string;
    email: string;
    contact: string;

    constructor(obj: UserEntity) {
        if (!obj.name || obj.name.length < 5 || obj.name.length > 60) {
            throw new ValidationError('Name must be between 5 and 60 characters');
        }

        if (!obj.email || obj.email.length < 5 || obj.email.length > 50 || !obj.email.includes('@')) {
            throw new ValidationError('Email must be between 5 and 50 characters and contains "@" inside');
        }

        if (!obj.contact || obj.contact.length < 5 || obj.contact.length > 50) {
            throw new ValidationError('Contact must be between 5 and 60 characters');
        }

        this.id = obj.id ?? uuid();
        this.name = obj.name;
        this.email = obj.email;
        this.contact = obj.contact;
    }

    async create(): Promise<string> {
        await pool.execute('INSERT INTO `users`(`id`, `name`,`email`,`contact`) VALUES(:id,:name,:email,:contact)', {
            id: this.id, name: this.name, email: this.email, contact: this.contact,
        });

        return this.id;
    }

    static async usersList(): Promise<User[]> {
        const [results] = (await pool.execute('SELECT * FROM `users` ORDER BY `name` ASC' )) as UserRecordResult;
        return results.map(user => new User(user));
    }

    async remove(): Promise<void> {
        await pool.execute('DELETE FROM `users` WHERE `id` =:id', {
            id: this.id,
        });
    }

    static async getOne(id: string): Promise<User | null> {
        const [results] = await pool.execute('SELECT * FROM `users` WHERE `id` = :id', {
            id,
        }) as UserRecordResult;
        return results.length === 0 ? null : new User(results[0]);
    }

    async update(): Promise<void> {
        await pool.execute('UPDATE `users` SET `name` = :name, `email` = :email, `contact` = :contact WHERE `id` = :id', {
            id: this.id, name: this.name, email: this.email, contact: this.contact,
        });
    }
}

