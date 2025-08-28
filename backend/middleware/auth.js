const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.status(401).json({ message: '토큰 없음' });

  try {
    const decoded = jwt.verify(token, 'secretKey'); // secretKey는 환경변수로 관리
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: '유효하지 않은 토큰' });
  }
};

module.exports = authMiddleware;
