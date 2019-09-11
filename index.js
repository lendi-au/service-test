const pgp = require('pg-promise')({});

const cn = 'postgres://admin:admin@0.0.0.0:5432/users';
const db = pgp(cn);

db.connect();