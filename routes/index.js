const express = require('express');
const router = express.Router();
const dotenv = require('dotenv')

dotenv.config()

const r_kos = require('./r_kos')
const r_user = require('./r_user')

const ver = process.env.version

router.use(`/${ver}/kos`, r_kos)
router.use(`/${ver}/users`, r_user)

module.exports = router