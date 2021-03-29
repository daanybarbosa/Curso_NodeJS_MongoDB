const pg = require('pg');

const client = new pg.Client({
    user: 'danielesilva',
    host: 'localhost',
    database: 'portal_oticias',
    password: '12345',
    port: 5432,
});

module.exports = client;
