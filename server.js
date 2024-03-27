import express from "express";
import cors from "cors";
import mysql from "mysql";

const app = express();
const port = 3000;

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "!N4t6th6l10n",
  database: "programminglangs",
});

app.use(cors({ origin: "*" }));
app.use(express.json());

app.get("/api", (req, res) => {
  pool.query("SELECT * FROM languages", (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
