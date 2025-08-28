const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'joeun',           // MySQL 계정
  password: '123456',    // MySQL 비밀번호
  database: 'BlueSoul',   // DB 이름
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool.promise();
