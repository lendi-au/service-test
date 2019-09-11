const pgp = require('pg-promise')({});

const cn = 'postgres://admin:admin@postgres:5432/users';
const db = pgp(cn);

db.connect()
    .then(obj => {
        obj.done(); // success, release the connection;
        console.log('Connection successful!');
    })
    .catch(error => {
        console.log('ERROR:', error.message || error);
    });