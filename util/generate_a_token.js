const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

dotenv.config()

const a_token = process.env.ACCES_T

const generate_a_token = (id) => {
    return jwt.sign(
        {id},
        a_token,
        {
            expiresIn: 5 * 4,
        }
    )
}

module.exports = generate_a_token