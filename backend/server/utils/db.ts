import {createPool} from 'mysql2/promise';

export const pool = createPool({
    host: 'localhost',
    user: 'root',
    database: 'crud_contact',
    namedPlaceholders: true,
    decimalNumbers: true,
});
