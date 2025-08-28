const express = require('express');
const router = express.Router();
const pool = require('../config/db');

// 전체 상품 조회
router.get('/Shop', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM products');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: '상품 조회 실패' });
  }
});

// 상품 상세
router.get('/detail', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM products WHERE no = ?', [req.params.id]);
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: '상품 상세 조회 실패' });
  }
});

module.exports = router;
