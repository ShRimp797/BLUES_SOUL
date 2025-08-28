const express = require('express');
const router = express.Router();
const pool = require('../config/db');
const auth = require('../middleware/auth');

// 내 정보 조회
router.get('/Mypage', auth, async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT username, name, tel, email FROM users WHERE no = ?', [req.user.user_no]);
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: '조회 실패' });
  }
});

module.exports = router;
