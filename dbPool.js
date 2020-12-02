const mysql = require('mysql');

const pool  = mysql.createPool({
    connectionLimit: 10,
    host: "de1tmi3t63foh7fa.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "ghbdvzn1plr18akd",
    password: "ixndw7a2xe1qcbie",
    database: "k0iox9xt663o8muf"
});

module.exports = pool;
