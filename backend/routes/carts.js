const express = require('express');
const router = express.Router();
const pool = require('../config/db');
const auth = require('../middleware/auth');

// 장바구니 추가
router.post('/detail', auth, async (req, res) => {
  const { product_no, quantity } = req.body;
  try {
    await pool.query(
      'INSERT INTO carts (user_no, product_no, quantity, total_price) VALUES (?, ?, ?, ?)',
      [req.user.user_no, product_no, quantity, quantity * 10000] // 단가 예시 10000
    );
    res.json({ message: '장바구니 추가 완료' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: '장바구니 추가 실패' });
  }
});

// 내 장바구니 조회
router.get('/Cart2', auth, async (req, res) => {
  try {
    const [rows] = await pool.query(
      `SELECT c.*, p.name, p.price FROM carts c
       JOIN products p ON c.product_no = p.no
       WHERE c.user_no = ?`,
      [req.user.user_no]
    );
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: '조회 실패' });
  }
});

module.exports = router;
