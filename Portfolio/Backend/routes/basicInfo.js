const express = require('express');
const router = express.Router();
const adminAuth = require('../middlewares/adminAuth');
const {
    getBasicInfo,
    updateBasicInfo,
    deleteBasicInfo,
    createBasicInfo,
} = require('../controllers/basicInfo');

// Public route to get the BasicInfo (no auth needed)
router.get('/', getBasicInfo);

// Admin routes to create, update, or delete BasicInfo
router.post('/', adminAuth, createBasicInfo);
router.put('/', adminAuth, updateBasicInfo);
router.delete('/', adminAuth, deleteBasicInfo);

module.exports = router;
