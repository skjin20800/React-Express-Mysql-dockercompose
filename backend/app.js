const express = require("express"); //express모드다운
const bodyParser = require("body-parser");
var cors = require('cors');
const app = express();
const port = 5000;

var mysql = require('mysql');
var connection = mysql.createConnection({
     host: 'dbhost',
     user: 'root',
     password: 'hodooai0000',
     database: 'test',
     port: '3306'
 });
 
 connection.connect();

// CORS 설정
app.use(cors());

//  JSON 파싱
app.use(bodyParser.json());

app.get("/", (req, res) => {
// 기능
connection.query("SELECT * FROM test", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});


app.post("/save", (req, res) => {
    // 기능
    var sql = `INSERT INTO test (test) VALUES ('${req.body.title}')`;
    connection.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
    });

app.listen(5000, function() {
console.log("서버 가동");
});

