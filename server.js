
const express = require("express");
const { Pool } = require("pg");

const app = express();
const port = process.env.PORT || 3000;

// DB connection (Coolify injects env variables)
const pool = new Pool({
  host: process.env.DB_HOST || "notes-db",
  port: process.env.DB_PORT || 5432,
  user: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "123456",
  database: process.env.DB_NAME || "postgres",
});

app.get("/", async (req, res) => {
  const result = await pool.query("SELECT NOW()");
  res.send(`Hello from Coolify! DB Time: ${result.rows[0].now}`);
});

app.listen(port, () => console.log(`Server running on ${port}`));
