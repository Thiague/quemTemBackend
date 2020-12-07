const express = require('express');
const router = express.Router();

// Home
router.get('/', (req, res, next) => {
    res.send('Welcome to quemTem');
});

module.exports = router;
