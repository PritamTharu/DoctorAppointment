const jwt = require('jsonwebtoken')

async function verifyToken(req, res, next) {
    const token = req.cookies.token
    if (!token) {
        return res.status(401).json({ error: 'Access Denied. No token provided.' })
    }
    try {
        const secretKey = process.env.JWT_SECRET;
        const verified = jwt.verify(token, secretKey);
        req.user = verified;
        next();
    } catch (error) {
        return res.status(401).json({ error: 'Invalid or expired token.' });
    }
}


module.exports = verifyToken