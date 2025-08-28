const express = require('express');
const router = express.Router();
const pool = require('../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// 회원가입
router.post('/register', async (req, res) => {
  const { username, password, name, tel, email } = req.body;
  const hashed = await bcrypt.hash(password, 10);

  try {
    const [result] = await pool.query(
      'INSERT INTO users (username, password, name, tel, email) VALUES (?, ?, ?, ?, ?)',
      [username, hashed, name, tel, email]
    );
    res.json({ message: '회원가입 완료' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: '회원가입 실패' });
  }
});

// 로그인
router.post('/Login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const [rows] = await pool.query('SELECT * FROM users WHERE username = ?', [username]);
    if (!rows.length) return res.status(401).json({ message: '사용자 없음' });

    const user = rows[0];
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ message: '비밀번호 틀림' });

    const token = jwt.sign({ user_no: user.no, username: user.username }, 'secretKey', { expiresIn: '1h' });
    res.json({ token, user: { username: user.username, name: user.name, email: user.email } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: '로그인 실패' });
  }
});

module.exports = router;
