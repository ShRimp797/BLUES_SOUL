const express = require('express');
const router = express.Router();
const pool = require('../config/db'); // DB 연결

// 1️⃣ 전체 기부 내역 조회
router.get('/Donationsuccess', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM donations ORDER BY date DESC');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: '기부 내역 조회 실패' });
  }
});

// 2️⃣ 특정 기부 내역 조회 (id 기준)
router.get('/:id', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM donations WHERE id = ?', [req.params.id]);
    if (rows.length === 0) return res.status(404).json({ message: '기부 내역이 없습니다.' });
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: '기부 상세 조회 실패' });
  }
});

// 3️⃣ 새 기부 등록
router.post('/', async (req, res) => {
  try {
    const { donor_name, amount, message } = req.body;
    const [result] = await pool.query(
      'INSERT INTO donations (donor_name, amount, message, date) VALUES (?, ?, ?, NOW())',
      [donor_name, amount, message]
    );
    res.status(201).json({ id: result.insertId, donor_name, amount, message });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: '기부 등록 실패' });
  }
});

// 4️⃣ 기부 내역 수정
router.put('/:id', async (req, res) => {
  try {
    const { donor_name, amount, message } = req.body;
    const [result] = await pool.query(
      'UPDATE donations SET donor_name = ?, amount = ?, message = ? WHERE id = ?',
      [donor_name, amount, message, req.params.id]
    );
    if (result.affectedRows === 0) return res.status(404).json({ message: '기부 내역이 없습니다.' });
    res.json({ message: '기부 내역 수정 완료' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: '기부 내역 수정 실패' });
  }
});

// 5️⃣ 기부 내역 삭제
router.delete('/:id', async (req, res) => {
  try {
    const [result] = await pool.query('DELETE FROM donations WHERE id = ?', [req.params.id]);
    if (result.affectedRows === 0) return res.status(404).json({ message: '기부 내역이 없습니다.' });
    res.json({ message: '기부 내역 삭제 완료' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: '기부 내역 삭제 실패' });
  }
});

module.exports = router;
