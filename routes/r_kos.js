const express = require('express');
const router = express.Router();
const { getAllBook } = require('./../controllers/c_kos')
const verify_token = require('./../util/verify_token')

router.get('/', verify_token, getAllBook)
router.get('/detail/:id')

module.exports = router