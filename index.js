const pgp = require('pg-promise');

const cn = 'postgres://admin:admin@host:5432/users';
const db = pgp(cn);

module.exports = db;