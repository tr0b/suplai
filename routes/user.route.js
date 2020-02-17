const express = require('express');
const router = express.Router();

//Login
router.get('/login',(req,res) => res.send('Login'));

module.exports = router;