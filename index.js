const pgp = require('pg-promise')({});

const cn = 'postgres://admin:admin@postgres:5432/users';
const db = pgp(cn);

db.connect();