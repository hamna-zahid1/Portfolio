require('dotenv').config();

const adminAuth = (req, res, next) => {
    const apiKey = req.header('x-api-key');
    if (!apiKey || apiKey !== process.env.ADMIN_API_KEY) {
        return res.status(403).json({ message: 'Access Denied' });
    }
    next();
};

module.exports = adminAuth;
