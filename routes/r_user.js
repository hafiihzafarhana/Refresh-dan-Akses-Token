const express = require('express');
const router = express.Router();

const { login, convert_password } = require('./../controllers/c_user')
const refresh_token = require('./../util/refresh_token')

router.get('/')
router.post('/login', login, async (req, res) => {
    return res.status(201).json({
        r_token: req.r_token,
        a_token: req.a_token,
        id: req.id
    })
})
router.post('/register')
router.get('/detail')
router.post('/generate-password', convert_password)
router.post('/refresh-token', refresh_token, async (req, res) => {
    return res.status(201).json({
        r_token: req.r_token,
        a_token: req.a_token,
        id: req.id
    })
})

module.exports = router