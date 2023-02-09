const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

dotenv.config()

const a_token = process.env.REFRESH_T

const generate_r_token = (id) => {
    return jwt.sign(
        {id},
        a_token,
        {
            expiresIn: '30d',
        }
    )
}

module.exports = generate_r_token