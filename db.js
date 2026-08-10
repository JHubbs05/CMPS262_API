const Pool = require("pg").Pool;

const pool = new Pool({
    //user: "postgres",
    //host: "localhost",
    //database: "inventory",
    user: "jhubbs",
    host: "dpg-d9rtuqv10e5c738rbr20-a",
    database: "inventory_cmps262",
    password: "F1h71InOqY8XjI5DH7deYYMIhSJAL5wE",
    port: 5432,
});

module.exports = pool;