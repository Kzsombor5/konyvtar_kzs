const express = require('express');
const app = express();
const port =  3000;
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
    user: 'root',
    password: '',
    database: 'konyvtar',
    port: 3307
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/konyvek', (req, res) => {
    const sql = `SELECT * FROM konyvek`;
    db.query(sql, (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});





app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});