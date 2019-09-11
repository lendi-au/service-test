const pgp = require('pg-promise');

const cn = {
    host: 'postgres',
    port: 5432,
    database: 'users',
    user: 'admin',
    password: 'admin'
};

const db = pgp(cn);