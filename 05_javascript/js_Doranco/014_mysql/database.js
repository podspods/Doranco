import { createPool } from "mysql";

const pool = createPool({
  host: "localhost",
  user: "root",
  password: "a",
  database: "knex_test",
  connectionLimit: 10,
});

pool.query(`SELECT * FROM menu WHERE 1`,
  (err, result, fields) => {
    if (err) {
      return console.log(err);
    }
    return console.log(result);
  });
