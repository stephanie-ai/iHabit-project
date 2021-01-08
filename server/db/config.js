const { Pool } = require("pg");

const pool = new Pool({ database: "ihabit" });

function run(q) {
  return pool.query(q);
}

module.exports = { run };
